# Vercel SDK

from vercel_sdk.utility.voxgig_struct import voxgig_struct as vs
from vercel_sdk.core.utility_type import VercelUtility
from vercel_sdk.core.spec import VercelSpec
from vercel_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from vercel_sdk.utility import register

# Load features
from vercel_sdk.feature.base_feature import VercelBaseFeature
from vercel_sdk.features import _has_feature, _make_feature


class VercelSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = VercelUtility()
        self._utility = utility

        from vercel_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return VercelUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = VercelSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "VercelSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("VercelSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AccessGroup(self, data=None) -> "AccessGroupEntity":
        """Entity factory: client.AccessGroup().list() / client.AccessGroup().load({"id": ...})."""
        from vercel_sdk.entity.access_group_entity import AccessGroupEntity
        return AccessGroupEntity(self, data)


    def AiGateway(self, data=None) -> "AiGatewayEntity":
        """Entity factory: client.AiGateway().list() / client.AiGateway().load({"id": ...})."""
        from vercel_sdk.entity.ai_gateway_entity import AiGatewayEntity
        return AiGatewayEntity(self, data)


    def AiGatewayRule(self, data=None) -> "AiGatewayRuleEntity":
        """Entity factory: client.AiGatewayRule().list() / client.AiGatewayRule().load({"id": ...})."""
        from vercel_sdk.entity.ai_gateway_rule_entity import AiGatewayRuleEntity
        return AiGatewayRuleEntity(self, data)


    def AiGatewayRuleList(self, data=None) -> "AiGatewayRuleListEntity":
        """Entity factory: client.AiGatewayRuleList().list() / client.AiGatewayRuleList().load({"id": ...})."""
        from vercel_sdk.entity.ai_gateway_rule_list_entity import AiGatewayRuleListEntity
        return AiGatewayRuleListEntity(self, data)


    def AiGatewayVirtualModelConfig(self, data=None) -> "AiGatewayVirtualModelConfigEntity":
        """Entity factory: client.AiGatewayVirtualModelConfig().list() / client.AiGatewayVirtualModelConfig().load({"id": ...})."""
        from vercel_sdk.entity.ai_gateway_virtual_model_config_entity import AiGatewayVirtualModelConfigEntity
        return AiGatewayVirtualModelConfigEntity(self, data)


    def AiGatewayVirtualModelConfigList(self, data=None) -> "AiGatewayVirtualModelConfigListEntity":
        """Entity factory: client.AiGatewayVirtualModelConfigList().list() / client.AiGatewayVirtualModelConfigList().load({"id": ...})."""
        from vercel_sdk.entity.ai_gateway_virtual_model_config_list_entity import AiGatewayVirtualModelConfigListEntity
        return AiGatewayVirtualModelConfigListEntity(self, data)


    def Alias(self, data=None) -> "AliasEntity":
        """Entity factory: client.Alias().list() / client.Alias().load({"id": ...})."""
        from vercel_sdk.entity.alias_entity import AliasEntity
        return AliasEntity(self, data)


    def ApiAiGateway(self, data=None) -> "ApiAiGatewayEntity":
        """Entity factory: client.ApiAiGateway().list() / client.ApiAiGateway().load({"id": ...})."""
        from vercel_sdk.entity.api_ai_gateway_entity import ApiAiGatewayEntity
        return ApiAiGatewayEntity(self, data)


    def ApiKey(self, data=None) -> "ApiKeyEntity":
        """Entity factory: client.ApiKey().list() / client.ApiKey().load({"id": ...})."""
        from vercel_sdk.entity.api_key_entity import ApiKeyEntity
        return ApiKeyEntity(self, data)


    def Artifact(self, data=None) -> "ArtifactEntity":
        """Entity factory: client.Artifact().list() / client.Artifact().load({"id": ...})."""
        from vercel_sdk.entity.artifact_entity import ArtifactEntity
        return ArtifactEntity(self, data)


    def Authentication(self, data=None) -> "AuthenticationEntity":
        """Entity factory: client.Authentication().list() / client.Authentication().load({"id": ...})."""
        from vercel_sdk.entity.authentication_entity import AuthenticationEntity
        return AuthenticationEntity(self, data)


    def Billing(self, data=None) -> "BillingEntity":
        """Entity factory: client.Billing().list() / client.Billing().load({"id": ...})."""
        from vercel_sdk.entity.billing_entity import BillingEntity
        return BillingEntity(self, data)


    def BulkRedirect(self, data=None) -> "BulkRedirectEntity":
        """Entity factory: client.BulkRedirect().list() / client.BulkRedirect().load({"id": ...})."""
        from vercel_sdk.entity.bulk_redirect_entity import BulkRedirectEntity
        return BulkRedirectEntity(self, data)


    def Cert(self, data=None) -> "CertEntity":
        """Entity factory: client.Cert().list() / client.Cert().load({"id": ...})."""
        from vercel_sdk.entity.cert_entity import CertEntity
        return CertEntity(self, data)


    def Check(self, data=None) -> "CheckEntity":
        """Entity factory: client.Check().list() / client.Check().load({"id": ...})."""
        from vercel_sdk.entity.check_entity import CheckEntity
        return CheckEntity(self, data)


    def ChecksV2(self, data=None) -> "ChecksV2Entity":
        """Entity factory: client.ChecksV2().list() / client.ChecksV2().load({"id": ...})."""
        from vercel_sdk.entity.checks_v2_entity import ChecksV2Entity
        return ChecksV2Entity(self, data)


    def Connect(self, data=None) -> "ConnectEntity":
        """Entity factory: client.Connect().list() / client.Connect().load({"id": ...})."""
        from vercel_sdk.entity.connect_entity import ConnectEntity
        return ConnectEntity(self, data)


    def ConnectConnector(self, data=None) -> "ConnectConnectorEntity":
        """Entity factory: client.ConnectConnector().list() / client.ConnectConnector().load({"id": ...})."""
        from vercel_sdk.entity.connect_connector_entity import ConnectConnectorEntity
        return ConnectConnectorEntity(self, data)


    def ConnectConnectorList(self, data=None) -> "ConnectConnectorListEntity":
        """Entity factory: client.ConnectConnectorList().list() / client.ConnectConnectorList().load({"id": ...})."""
        from vercel_sdk.entity.connect_connector_list_entity import ConnectConnectorListEntity
        return ConnectConnectorListEntity(self, data)


    def ConnectConnectorProjectConnectionList(self, data=None) -> "ConnectConnectorProjectConnectionListEntity":
        """Entity factory: client.ConnectConnectorProjectConnectionList().list() / client.ConnectConnectorProjectConnectionList().load({"id": ...})."""
        from vercel_sdk.entity.connect_connector_project_connection_list_entity import ConnectConnectorProjectConnectionListEntity
        return ConnectConnectorProjectConnectionListEntity(self, data)


    def ConnectProjectConnection(self, data=None) -> "ConnectProjectConnectionEntity":
        """Entity factory: client.ConnectProjectConnection().list() / client.ConnectProjectConnection().load({"id": ...})."""
        from vercel_sdk.entity.connect_project_connection_entity import ConnectProjectConnectionEntity
        return ConnectProjectConnectionEntity(self, data)


    def ConnectProjectConnectorConnectionList(self, data=None) -> "ConnectProjectConnectorConnectionListEntity":
        """Entity factory: client.ConnectProjectConnectorConnectionList().list() / client.ConnectProjectConnectorConnectionList().load({"id": ...})."""
        from vercel_sdk.entity.connect_project_connector_connection_list_entity import ConnectProjectConnectorConnectionListEntity
        return ConnectProjectConnectorConnectionListEntity(self, data)


    def Deployment(self, data=None) -> "DeploymentEntity":
        """Entity factory: client.Deployment().list() / client.Deployment().load({"id": ...})."""
        from vercel_sdk.entity.deployment_entity import DeploymentEntity
        return DeploymentEntity(self, data)


    def Dns(self, data=None) -> "DnsEntity":
        """Entity factory: client.Dns().list() / client.Dns().load({"id": ...})."""
        from vercel_sdk.entity.dns_entity import DnsEntity
        return DnsEntity(self, data)


    def Domain(self, data=None) -> "DomainEntity":
        """Entity factory: client.Domain().list() / client.Domain().load({"id": ...})."""
        from vercel_sdk.entity.domain_entity import DomainEntity
        return DomainEntity(self, data)


    def DomainsRegistrar(self, data=None) -> "DomainsRegistrarEntity":
        """Entity factory: client.DomainsRegistrar().list() / client.DomainsRegistrar().load({"id": ...})."""
        from vercel_sdk.entity.domains_registrar_entity import DomainsRegistrarEntity
        return DomainsRegistrarEntity(self, data)


    def Drain(self, data=None) -> "DrainEntity":
        """Entity factory: client.Drain().list() / client.Drain().load({"id": ...})."""
        from vercel_sdk.entity.drain_entity import DrainEntity
        return DrainEntity(self, data)


    def EdgeCache(self, data=None) -> "EdgeCacheEntity":
        """Entity factory: client.EdgeCache().list() / client.EdgeCache().load({"id": ...})."""
        from vercel_sdk.entity.edge_cache_entity import EdgeCacheEntity
        return EdgeCacheEntity(self, data)


    def Env(self, data=None) -> "EnvEntity":
        """Entity factory: client.Env().list() / client.Env().load({"id": ...})."""
        from vercel_sdk.entity.env_entity import EnvEntity
        return EnvEntity(self, data)


    def Environment(self, data=None) -> "EnvironmentEntity":
        """Entity factory: client.Environment().list() / client.Environment().load({"id": ...})."""
        from vercel_sdk.entity.environment_entity import EnvironmentEntity
        return EnvironmentEntity(self, data)


    def FeatureFlag(self, data=None) -> "FeatureFlagEntity":
        """Entity factory: client.FeatureFlag().list() / client.FeatureFlag().load({"id": ...})."""
        from vercel_sdk.entity.feature_flag_entity import FeatureFlagEntity
        return FeatureFlagEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from vercel_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def Flag(self, data=None) -> "FlagEntity":
        """Entity factory: client.Flag().list() / client.Flag().load({"id": ...})."""
        from vercel_sdk.entity.flag_entity import FlagEntity
        return FlagEntity(self, data)


    def FlagsSdkKeyWithSecret(self, data=None) -> "FlagsSdkKeyWithSecretEntity":
        """Entity factory: client.FlagsSdkKeyWithSecret().list() / client.FlagsSdkKeyWithSecret().load({"id": ...})."""
        from vercel_sdk.entity.flags_sdk_key_with_secret_entity import FlagsSdkKeyWithSecretEntity
        return FlagsSdkKeyWithSecretEntity(self, data)


    def GlobalConfig(self, data=None) -> "GlobalConfigEntity":
        """Entity factory: client.GlobalConfig().list() / client.GlobalConfig().load({"id": ...})."""
        from vercel_sdk.entity.global_config_entity import GlobalConfigEntity
        return GlobalConfigEntity(self, data)


    def GlobalConfigItem(self, data=None) -> "GlobalConfigItemEntity":
        """Entity factory: client.GlobalConfigItem().list() / client.GlobalConfigItem().load({"id": ...})."""
        from vercel_sdk.entity.global_config_item_entity import GlobalConfigItemEntity
        return GlobalConfigItemEntity(self, data)


    def GlobalConfigToken(self, data=None) -> "GlobalConfigTokenEntity":
        """Entity factory: client.GlobalConfigToken().list() / client.GlobalConfigToken().load({"id": ...})."""
        from vercel_sdk.entity.global_config_token_entity import GlobalConfigTokenEntity
        return GlobalConfigTokenEntity(self, data)


    def Integration(self, data=None) -> "IntegrationEntity":
        """Entity factory: client.Integration().list() / client.Integration().load({"id": ...})."""
        from vercel_sdk.entity.integration_entity import IntegrationEntity
        return IntegrationEntity(self, data)


    def Kms(self, data=None) -> "KmsEntity":
        """Entity factory: client.Kms().list() / client.Kms().load({"id": ...})."""
        from vercel_sdk.entity.kms_entity import KmsEntity
        return KmsEntity(self, data)


    def ListEventType(self, data=None) -> "ListEventTypeEntity":
        """Entity factory: client.ListEventType().list() / client.ListEventType().load({"id": ...})."""
        from vercel_sdk.entity.list_event_type_entity import ListEventTypeEntity
        return ListEventTypeEntity(self, data)


    def Log(self, data=None) -> "LogEntity":
        """Entity factory: client.Log().list() / client.Log().load({"id": ...})."""
        from vercel_sdk.entity.log_entity import LogEntity
        return LogEntity(self, data)


    def LogDrain(self, data=None) -> "LogDrainEntity":
        """Entity factory: client.LogDrain().list() / client.LogDrain().load({"id": ...})."""
        from vercel_sdk.entity.log_drain_entity import LogDrainEntity
        return LogDrainEntity(self, data)


    def Marketplace(self, data=None) -> "MarketplaceEntity":
        """Entity factory: client.Marketplace().list() / client.Marketplace().load({"id": ...})."""
        from vercel_sdk.entity.marketplace_entity import MarketplaceEntity
        return MarketplaceEntity(self, data)


    def Microfrontend(self, data=None) -> "MicrofrontendEntity":
        """Entity factory: client.Microfrontend().list() / client.Microfrontend().load({"id": ...})."""
        from vercel_sdk.entity.microfrontend_entity import MicrofrontendEntity
        return MicrofrontendEntity(self, data)


    def Network(self, data=None) -> "NetworkEntity":
        """Entity factory: client.Network().list() / client.Network().load({"id": ...})."""
        from vercel_sdk.entity.network_entity import NetworkEntity
        return NetworkEntity(self, data)


    def Networking(self, data=None) -> "NetworkingEntity":
        """Entity factory: client.Networking().list() / client.Networking().load({"id": ...})."""
        from vercel_sdk.entity.networking_entity import NetworkingEntity
        return NetworkingEntity(self, data)


    def Observability(self, data=None) -> "ObservabilityEntity":
        """Entity factory: client.Observability().list() / client.Observability().load({"id": ...})."""
        from vercel_sdk.entity.observability_entity import ObservabilityEntity
        return ObservabilityEntity(self, data)


    def PrivateLinkEndpoint(self, data=None) -> "PrivateLinkEndpointEntity":
        """Entity factory: client.PrivateLinkEndpoint().list() / client.PrivateLinkEndpoint().load({"id": ...})."""
        from vercel_sdk.entity.private_link_endpoint_entity import PrivateLinkEndpointEntity
        return PrivateLinkEndpointEntity(self, data)


    def Project(self, data=None) -> "ProjectEntity":
        """Entity factory: client.Project().list() / client.Project().load({"id": ...})."""
        from vercel_sdk.entity.project_entity import ProjectEntity
        return ProjectEntity(self, data)


    def ProjectMember(self, data=None) -> "ProjectMemberEntity":
        """Entity factory: client.ProjectMember().list() / client.ProjectMember().load({"id": ...})."""
        from vercel_sdk.entity.project_member_entity import ProjectMemberEntity
        return ProjectMemberEntity(self, data)


    def ProjectRoute(self, data=None) -> "ProjectRouteEntity":
        """Entity factory: client.ProjectRoute().list() / client.ProjectRoute().load({"id": ...})."""
        from vercel_sdk.entity.project_route_entity import ProjectRouteEntity
        return ProjectRouteEntity(self, data)


    def Query(self, data=None) -> "QueryEntity":
        """Entity factory: client.Query().list() / client.Query().load({"id": ...})."""
        from vercel_sdk.entity.query_entity import QueryEntity
        return QueryEntity(self, data)


    def Record(self, data=None) -> "RecordEntity":
        """Entity factory: client.Record().list() / client.Record().load({"id": ...})."""
        from vercel_sdk.entity.record_entity import RecordEntity
        return RecordEntity(self, data)


    def RollingRelease(self, data=None) -> "RollingReleaseEntity":
        """Entity factory: client.RollingRelease().list() / client.RollingRelease().load({"id": ...})."""
        from vercel_sdk.entity.rolling_release_entity import RollingReleaseEntity
        return RollingReleaseEntity(self, data)


    def Sandbox(self, data=None) -> "SandboxEntity":
        """Entity factory: client.Sandbox().list() / client.Sandbox().load({"id": ...})."""
        from vercel_sdk.entity.sandbox_entity import SandboxEntity
        return SandboxEntity(self, data)


    def Schema(self, data=None) -> "SchemaEntity":
        """Entity factory: client.Schema().list() / client.Schema().load({"id": ...})."""
        from vercel_sdk.entity.schema_entity import SchemaEntity
        return SchemaEntity(self, data)


    def Security(self, data=None) -> "SecurityEntity":
        """Entity factory: client.Security().list() / client.Security().load({"id": ...})."""
        from vercel_sdk.entity.security_entity import SecurityEntity
        return SecurityEntity(self, data)


    def Segment(self, data=None) -> "SegmentEntity":
        """Entity factory: client.Segment().list() / client.Segment().load({"id": ...})."""
        from vercel_sdk.entity.segment_entity import SegmentEntity
        return SegmentEntity(self, data)


    def Storage(self, data=None) -> "StorageEntity":
        """Entity factory: client.Storage().list() / client.Storage().load({"id": ...})."""
        from vercel_sdk.entity.storage_entity import StorageEntity
        return StorageEntity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from vercel_sdk.entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def TldName(self, data=None) -> "TldNameEntity":
        """Entity factory: client.TldName().list() / client.TldName().load({"id": ...})."""
        from vercel_sdk.entity.tld_name_entity import TldNameEntity
        return TldNameEntity(self, data)


    def Toggle(self, data=None) -> "ToggleEntity":
        """Entity factory: client.Toggle().list() / client.Toggle().load({"id": ...})."""
        from vercel_sdk.entity.toggle_entity import ToggleEntity
        return ToggleEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from vercel_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def Vcr(self, data=None) -> "VcrEntity":
        """Entity factory: client.Vcr().list() / client.Vcr().load({"id": ...})."""
        from vercel_sdk.entity.vcr_entity import VcrEntity
        return VcrEntity(self, data)


    def VcrImageList(self, data=None) -> "VcrImageListEntity":
        """Entity factory: client.VcrImageList().list() / client.VcrImageList().load({"id": ...})."""
        from vercel_sdk.entity.vcr_image_list_entity import VcrImageListEntity
        return VcrImageListEntity(self, data)


    def VcrRepositoryList(self, data=None) -> "VcrRepositoryListEntity":
        """Entity factory: client.VcrRepositoryList().list() / client.VcrRepositoryList().load({"id": ...})."""
        from vercel_sdk.entity.vcr_repository_list_entity import VcrRepositoryListEntity
        return VcrRepositoryListEntity(self, data)


    def VcrRepositoryPermissionList(self, data=None) -> "VcrRepositoryPermissionListEntity":
        """Entity factory: client.VcrRepositoryPermissionList().list() / client.VcrRepositoryPermissionList().load({"id": ...})."""
        from vercel_sdk.entity.vcr_repository_permission_list_entity import VcrRepositoryPermissionListEntity
        return VcrRepositoryPermissionListEntity(self, data)


    def WebAnalytics(self, data=None) -> "WebAnalyticsEntity":
        """Entity factory: client.WebAnalytics().list() / client.WebAnalytics().load({"id": ...})."""
        from vercel_sdk.entity.web_analytics_entity import WebAnalyticsEntity
        return WebAnalyticsEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from vercel_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "VercelSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from vercel_sdk.entity.access_group_entity import AccessGroupEntity
    from vercel_sdk.entity.ai_gateway_entity import AiGatewayEntity
    from vercel_sdk.entity.ai_gateway_rule_entity import AiGatewayRuleEntity
    from vercel_sdk.entity.ai_gateway_rule_list_entity import AiGatewayRuleListEntity
    from vercel_sdk.entity.ai_gateway_virtual_model_config_entity import AiGatewayVirtualModelConfigEntity
    from vercel_sdk.entity.ai_gateway_virtual_model_config_list_entity import AiGatewayVirtualModelConfigListEntity
    from vercel_sdk.entity.alias_entity import AliasEntity
    from vercel_sdk.entity.api_ai_gateway_entity import ApiAiGatewayEntity
    from vercel_sdk.entity.api_key_entity import ApiKeyEntity
    from vercel_sdk.entity.artifact_entity import ArtifactEntity
    from vercel_sdk.entity.authentication_entity import AuthenticationEntity
    from vercel_sdk.entity.billing_entity import BillingEntity
    from vercel_sdk.entity.bulk_redirect_entity import BulkRedirectEntity
    from vercel_sdk.entity.cert_entity import CertEntity
    from vercel_sdk.entity.check_entity import CheckEntity
    from vercel_sdk.entity.checks_v2_entity import ChecksV2Entity
    from vercel_sdk.entity.connect_entity import ConnectEntity
    from vercel_sdk.entity.connect_connector_entity import ConnectConnectorEntity
    from vercel_sdk.entity.connect_connector_list_entity import ConnectConnectorListEntity
    from vercel_sdk.entity.connect_connector_project_connection_list_entity import ConnectConnectorProjectConnectionListEntity
    from vercel_sdk.entity.connect_project_connection_entity import ConnectProjectConnectionEntity
    from vercel_sdk.entity.connect_project_connector_connection_list_entity import ConnectProjectConnectorConnectionListEntity
    from vercel_sdk.entity.deployment_entity import DeploymentEntity
    from vercel_sdk.entity.dns_entity import DnsEntity
    from vercel_sdk.entity.domain_entity import DomainEntity
    from vercel_sdk.entity.domains_registrar_entity import DomainsRegistrarEntity
    from vercel_sdk.entity.drain_entity import DrainEntity
    from vercel_sdk.entity.edge_cache_entity import EdgeCacheEntity
    from vercel_sdk.entity.env_entity import EnvEntity
    from vercel_sdk.entity.environment_entity import EnvironmentEntity
    from vercel_sdk.entity.feature_flag_entity import FeatureFlagEntity
    from vercel_sdk.entity.file_entity import FileEntity
    from vercel_sdk.entity.flag_entity import FlagEntity
    from vercel_sdk.entity.flags_sdk_key_with_secret_entity import FlagsSdkKeyWithSecretEntity
    from vercel_sdk.entity.global_config_entity import GlobalConfigEntity
    from vercel_sdk.entity.global_config_item_entity import GlobalConfigItemEntity
    from vercel_sdk.entity.global_config_token_entity import GlobalConfigTokenEntity
    from vercel_sdk.entity.integration_entity import IntegrationEntity
    from vercel_sdk.entity.kms_entity import KmsEntity
    from vercel_sdk.entity.list_event_type_entity import ListEventTypeEntity
    from vercel_sdk.entity.log_entity import LogEntity
    from vercel_sdk.entity.log_drain_entity import LogDrainEntity
    from vercel_sdk.entity.marketplace_entity import MarketplaceEntity
    from vercel_sdk.entity.microfrontend_entity import MicrofrontendEntity
    from vercel_sdk.entity.network_entity import NetworkEntity
    from vercel_sdk.entity.networking_entity import NetworkingEntity
    from vercel_sdk.entity.observability_entity import ObservabilityEntity
    from vercel_sdk.entity.private_link_endpoint_entity import PrivateLinkEndpointEntity
    from vercel_sdk.entity.project_entity import ProjectEntity
    from vercel_sdk.entity.project_member_entity import ProjectMemberEntity
    from vercel_sdk.entity.project_route_entity import ProjectRouteEntity
    from vercel_sdk.entity.query_entity import QueryEntity
    from vercel_sdk.entity.record_entity import RecordEntity
    from vercel_sdk.entity.rolling_release_entity import RollingReleaseEntity
    from vercel_sdk.entity.sandbox_entity import SandboxEntity
    from vercel_sdk.entity.schema_entity import SchemaEntity
    from vercel_sdk.entity.security_entity import SecurityEntity
    from vercel_sdk.entity.segment_entity import SegmentEntity
    from vercel_sdk.entity.storage_entity import StorageEntity
    from vercel_sdk.entity.team_entity import TeamEntity
    from vercel_sdk.entity.tld_name_entity import TldNameEntity
    from vercel_sdk.entity.toggle_entity import ToggleEntity
    from vercel_sdk.entity.user_entity import UserEntity
    from vercel_sdk.entity.vcr_entity import VcrEntity
    from vercel_sdk.entity.vcr_image_list_entity import VcrImageListEntity
    from vercel_sdk.entity.vcr_repository_list_entity import VcrRepositoryListEntity
    from vercel_sdk.entity.vcr_repository_permission_list_entity import VcrRepositoryPermissionListEntity
    from vercel_sdk.entity.web_analytics_entity import WebAnalyticsEntity
    from vercel_sdk.entity.webhook_entity import WebhookEntity
