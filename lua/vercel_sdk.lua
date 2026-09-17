-- Vercel SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("vercel_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local VercelSDK = {}
VercelSDK.__index = VercelSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

VercelSDK._make_feature = _make_feature


function VercelSDK.new(options)
  local self = setmetatable({}, VercelSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function VercelSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function VercelSDK:get_utility()
  return Utility.copy(self._utility)
end


function VercelSDK:get_root_ctx()
  return self._rootctx
end


function VercelSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function VercelSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function VercelSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function VercelSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "VercelSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function VercelSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function VercelSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "VercelSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AccessGroup():list() / client:AccessGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:AccessGroup(data)
  local EntityMod = require("entity.access_group_entity")
  if data == nil then
    if self._access_group == nil then
      self._access_group = EntityMod.new(self, nil)
    end
    return self._access_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGateway():list() / client:AiGateway():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:AiGateway(data)
  local EntityMod = require("entity.ai_gateway_entity")
  if data == nil then
    if self._ai_gateway == nil then
      self._ai_gateway = EntityMod.new(self, nil)
    end
    return self._ai_gateway
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayRule():list() / client:AiGatewayRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:AiGatewayRule(data)
  local EntityMod = require("entity.ai_gateway_rule_entity")
  if data == nil then
    if self._ai_gateway_rule == nil then
      self._ai_gateway_rule = EntityMod.new(self, nil)
    end
    return self._ai_gateway_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayRuleList():list() / client:AiGatewayRuleList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:AiGatewayRuleList(data)
  local EntityMod = require("entity.ai_gateway_rule_list_entity")
  if data == nil then
    if self._ai_gateway_rule_list == nil then
      self._ai_gateway_rule_list = EntityMod.new(self, nil)
    end
    return self._ai_gateway_rule_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayVirtualModelConfig():list() / client:AiGatewayVirtualModelConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:AiGatewayVirtualModelConfig(data)
  local EntityMod = require("entity.ai_gateway_virtual_model_config_entity")
  if data == nil then
    if self._ai_gateway_virtual_model_config == nil then
      self._ai_gateway_virtual_model_config = EntityMod.new(self, nil)
    end
    return self._ai_gateway_virtual_model_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayVirtualModelConfigList():list() / client:AiGatewayVirtualModelConfigList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:AiGatewayVirtualModelConfigList(data)
  local EntityMod = require("entity.ai_gateway_virtual_model_config_list_entity")
  if data == nil then
    if self._ai_gateway_virtual_model_config_list == nil then
      self._ai_gateway_virtual_model_config_list = EntityMod.new(self, nil)
    end
    return self._ai_gateway_virtual_model_config_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Alias():list() / client:Alias():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Alias(data)
  local EntityMod = require("entity.alias_entity")
  if data == nil then
    if self._alias == nil then
      self._alias = EntityMod.new(self, nil)
    end
    return self._alias
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiAiGateway():list() / client:ApiAiGateway():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ApiAiGateway(data)
  local EntityMod = require("entity.api_ai_gateway_entity")
  if data == nil then
    if self._api_ai_gateway == nil then
      self._api_ai_gateway = EntityMod.new(self, nil)
    end
    return self._api_ai_gateway
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiKey():list() / client:ApiKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ApiKey(data)
  local EntityMod = require("entity.api_key_entity")
  if data == nil then
    if self._api_key == nil then
      self._api_key = EntityMod.new(self, nil)
    end
    return self._api_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Artifact():list() / client:Artifact():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Artifact(data)
  local EntityMod = require("entity.artifact_entity")
  if data == nil then
    if self._artifact == nil then
      self._artifact = EntityMod.new(self, nil)
    end
    return self._artifact
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Authentication():list() / client:Authentication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Authentication(data)
  local EntityMod = require("entity.authentication_entity")
  if data == nil then
    if self._authentication == nil then
      self._authentication = EntityMod.new(self, nil)
    end
    return self._authentication
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Billing():list() / client:Billing():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Billing(data)
  local EntityMod = require("entity.billing_entity")
  if data == nil then
    if self._billing == nil then
      self._billing = EntityMod.new(self, nil)
    end
    return self._billing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkRedirect():list() / client:BulkRedirect():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:BulkRedirect(data)
  local EntityMod = require("entity.bulk_redirect_entity")
  if data == nil then
    if self._bulk_redirect == nil then
      self._bulk_redirect = EntityMod.new(self, nil)
    end
    return self._bulk_redirect
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Cert():list() / client:Cert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Cert(data)
  local EntityMod = require("entity.cert_entity")
  if data == nil then
    if self._cert == nil then
      self._cert = EntityMod.new(self, nil)
    end
    return self._cert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Check():list() / client:Check():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Check(data)
  local EntityMod = require("entity.check_entity")
  if data == nil then
    if self._check == nil then
      self._check = EntityMod.new(self, nil)
    end
    return self._check
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChecksV2():list() / client:ChecksV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ChecksV2(data)
  local EntityMod = require("entity.checks_v2_entity")
  if data == nil then
    if self._checks_v2 == nil then
      self._checks_v2 = EntityMod.new(self, nil)
    end
    return self._checks_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Connect():list() / client:Connect():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Connect(data)
  local EntityMod = require("entity.connect_entity")
  if data == nil then
    if self._connect == nil then
      self._connect = EntityMod.new(self, nil)
    end
    return self._connect
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectConnector():list() / client:ConnectConnector():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ConnectConnector(data)
  local EntityMod = require("entity.connect_connector_entity")
  if data == nil then
    if self._connect_connector == nil then
      self._connect_connector = EntityMod.new(self, nil)
    end
    return self._connect_connector
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectConnectorList():list() / client:ConnectConnectorList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ConnectConnectorList(data)
  local EntityMod = require("entity.connect_connector_list_entity")
  if data == nil then
    if self._connect_connector_list == nil then
      self._connect_connector_list = EntityMod.new(self, nil)
    end
    return self._connect_connector_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectConnectorProjectConnectionList():list() / client:ConnectConnectorProjectConnectionList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ConnectConnectorProjectConnectionList(data)
  local EntityMod = require("entity.connect_connector_project_connection_list_entity")
  if data == nil then
    if self._connect_connector_project_connection_list == nil then
      self._connect_connector_project_connection_list = EntityMod.new(self, nil)
    end
    return self._connect_connector_project_connection_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectProjectConnection():list() / client:ConnectProjectConnection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ConnectProjectConnection(data)
  local EntityMod = require("entity.connect_project_connection_entity")
  if data == nil then
    if self._connect_project_connection == nil then
      self._connect_project_connection = EntityMod.new(self, nil)
    end
    return self._connect_project_connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectProjectConnectorConnectionList():list() / client:ConnectProjectConnectorConnectionList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ConnectProjectConnectorConnectionList(data)
  local EntityMod = require("entity.connect_project_connector_connection_list_entity")
  if data == nil then
    if self._connect_project_connector_connection_list == nil then
      self._connect_project_connector_connection_list = EntityMod.new(self, nil)
    end
    return self._connect_project_connector_connection_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Deployment():list() / client:Deployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Deployment(data)
  local EntityMod = require("entity.deployment_entity")
  if data == nil then
    if self._deployment == nil then
      self._deployment = EntityMod.new(self, nil)
    end
    return self._deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dns():list() / client:Dns():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Dns(data)
  local EntityMod = require("entity.dns_entity")
  if data == nil then
    if self._dns == nil then
      self._dns = EntityMod.new(self, nil)
    end
    return self._dns
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Domain():list() / client:Domain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Domain(data)
  local EntityMod = require("entity.domain_entity")
  if data == nil then
    if self._domain == nil then
      self._domain = EntityMod.new(self, nil)
    end
    return self._domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainsRegistrar():list() / client:DomainsRegistrar():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:DomainsRegistrar(data)
  local EntityMod = require("entity.domains_registrar_entity")
  if data == nil then
    if self._domains_registrar == nil then
      self._domains_registrar = EntityMod.new(self, nil)
    end
    return self._domains_registrar
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Drain():list() / client:Drain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Drain(data)
  local EntityMod = require("entity.drain_entity")
  if data == nil then
    if self._drain == nil then
      self._drain = EntityMod.new(self, nil)
    end
    return self._drain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EdgeCache():list() / client:EdgeCache():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:EdgeCache(data)
  local EntityMod = require("entity.edge_cache_entity")
  if data == nil then
    if self._edge_cache == nil then
      self._edge_cache = EntityMod.new(self, nil)
    end
    return self._edge_cache
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Env():list() / client:Env():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Env(data)
  local EntityMod = require("entity.env_entity")
  if data == nil then
    if self._env == nil then
      self._env = EntityMod.new(self, nil)
    end
    return self._env
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Environment():list() / client:Environment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Environment(data)
  local EntityMod = require("entity.environment_entity")
  if data == nil then
    if self._environment == nil then
      self._environment = EntityMod.new(self, nil)
    end
    return self._environment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FeatureFlag():list() / client:FeatureFlag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:FeatureFlag(data)
  local EntityMod = require("entity.feature_flag_entity")
  if data == nil then
    if self._feature_flag == nil then
      self._feature_flag = EntityMod.new(self, nil)
    end
    return self._feature_flag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:File():list() / client:File():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:File(data)
  local EntityMod = require("entity.file_entity")
  if data == nil then
    if self._file == nil then
      self._file = EntityMod.new(self, nil)
    end
    return self._file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Flag():list() / client:Flag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Flag(data)
  local EntityMod = require("entity.flag_entity")
  if data == nil then
    if self._flag == nil then
      self._flag = EntityMod.new(self, nil)
    end
    return self._flag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FlagsSdkKeyWithSecret():list() / client:FlagsSdkKeyWithSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:FlagsSdkKeyWithSecret(data)
  local EntityMod = require("entity.flags_sdk_key_with_secret_entity")
  if data == nil then
    if self._flags_sdk_key_with_secret == nil then
      self._flags_sdk_key_with_secret = EntityMod.new(self, nil)
    end
    return self._flags_sdk_key_with_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GlobalConfig():list() / client:GlobalConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:GlobalConfig(data)
  local EntityMod = require("entity.global_config_entity")
  if data == nil then
    if self._global_config == nil then
      self._global_config = EntityMod.new(self, nil)
    end
    return self._global_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GlobalConfigItem():list() / client:GlobalConfigItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:GlobalConfigItem(data)
  local EntityMod = require("entity.global_config_item_entity")
  if data == nil then
    if self._global_config_item == nil then
      self._global_config_item = EntityMod.new(self, nil)
    end
    return self._global_config_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GlobalConfigToken():list() / client:GlobalConfigToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:GlobalConfigToken(data)
  local EntityMod = require("entity.global_config_token_entity")
  if data == nil then
    if self._global_config_token == nil then
      self._global_config_token = EntityMod.new(self, nil)
    end
    return self._global_config_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Integration():list() / client:Integration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Integration(data)
  local EntityMod = require("entity.integration_entity")
  if data == nil then
    if self._integration == nil then
      self._integration = EntityMod.new(self, nil)
    end
    return self._integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Kms():list() / client:Kms():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Kms(data)
  local EntityMod = require("entity.kms_entity")
  if data == nil then
    if self._kms == nil then
      self._kms = EntityMod.new(self, nil)
    end
    return self._kms
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListEventType():list() / client:ListEventType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ListEventType(data)
  local EntityMod = require("entity.list_event_type_entity")
  if data == nil then
    if self._list_event_type == nil then
      self._list_event_type = EntityMod.new(self, nil)
    end
    return self._list_event_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Log():list() / client:Log():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Log(data)
  local EntityMod = require("entity.log_entity")
  if data == nil then
    if self._log == nil then
      self._log = EntityMod.new(self, nil)
    end
    return self._log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogDrain():list() / client:LogDrain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:LogDrain(data)
  local EntityMod = require("entity.log_drain_entity")
  if data == nil then
    if self._log_drain == nil then
      self._log_drain = EntityMod.new(self, nil)
    end
    return self._log_drain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Marketplace():list() / client:Marketplace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Marketplace(data)
  local EntityMod = require("entity.marketplace_entity")
  if data == nil then
    if self._marketplace == nil then
      self._marketplace = EntityMod.new(self, nil)
    end
    return self._marketplace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Microfrontend():list() / client:Microfrontend():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Microfrontend(data)
  local EntityMod = require("entity.microfrontend_entity")
  if data == nil then
    if self._microfrontend == nil then
      self._microfrontend = EntityMod.new(self, nil)
    end
    return self._microfrontend
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Network():list() / client:Network():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Network(data)
  local EntityMod = require("entity.network_entity")
  if data == nil then
    if self._network == nil then
      self._network = EntityMod.new(self, nil)
    end
    return self._network
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Networking():list() / client:Networking():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Networking(data)
  local EntityMod = require("entity.networking_entity")
  if data == nil then
    if self._networking == nil then
      self._networking = EntityMod.new(self, nil)
    end
    return self._networking
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Observability():list() / client:Observability():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Observability(data)
  local EntityMod = require("entity.observability_entity")
  if data == nil then
    if self._observability == nil then
      self._observability = EntityMod.new(self, nil)
    end
    return self._observability
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PrivateLinkEndpoint():list() / client:PrivateLinkEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:PrivateLinkEndpoint(data)
  local EntityMod = require("entity.private_link_endpoint_entity")
  if data == nil then
    if self._private_link_endpoint == nil then
      self._private_link_endpoint = EntityMod.new(self, nil)
    end
    return self._private_link_endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Project():list() / client:Project():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Project(data)
  local EntityMod = require("entity.project_entity")
  if data == nil then
    if self._project == nil then
      self._project = EntityMod.new(self, nil)
    end
    return self._project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectMember():list() / client:ProjectMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ProjectMember(data)
  local EntityMod = require("entity.project_member_entity")
  if data == nil then
    if self._project_member == nil then
      self._project_member = EntityMod.new(self, nil)
    end
    return self._project_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectRoute():list() / client:ProjectRoute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:ProjectRoute(data)
  local EntityMod = require("entity.project_route_entity")
  if data == nil then
    if self._project_route == nil then
      self._project_route = EntityMod.new(self, nil)
    end
    return self._project_route
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Query():list() / client:Query():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Query(data)
  local EntityMod = require("entity.query_entity")
  if data == nil then
    if self._query == nil then
      self._query = EntityMod.new(self, nil)
    end
    return self._query
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Record():list() / client:Record():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Record(data)
  local EntityMod = require("entity.record_entity")
  if data == nil then
    if self._record == nil then
      self._record = EntityMod.new(self, nil)
    end
    return self._record
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RollingRelease():list() / client:RollingRelease():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:RollingRelease(data)
  local EntityMod = require("entity.rolling_release_entity")
  if data == nil then
    if self._rolling_release == nil then
      self._rolling_release = EntityMod.new(self, nil)
    end
    return self._rolling_release
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sandbox():list() / client:Sandbox():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Sandbox(data)
  local EntityMod = require("entity.sandbox_entity")
  if data == nil then
    if self._sandbox == nil then
      self._sandbox = EntityMod.new(self, nil)
    end
    return self._sandbox
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Schema():list() / client:Schema():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Schema(data)
  local EntityMod = require("entity.schema_entity")
  if data == nil then
    if self._schema == nil then
      self._schema = EntityMod.new(self, nil)
    end
    return self._schema
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Security():list() / client:Security():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Security(data)
  local EntityMod = require("entity.security_entity")
  if data == nil then
    if self._security == nil then
      self._security = EntityMod.new(self, nil)
    end
    return self._security
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Segment():list() / client:Segment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Segment(data)
  local EntityMod = require("entity.segment_entity")
  if data == nil then
    if self._segment == nil then
      self._segment = EntityMod.new(self, nil)
    end
    return self._segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Storage():list() / client:Storage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Storage(data)
  local EntityMod = require("entity.storage_entity")
  if data == nil then
    if self._storage == nil then
      self._storage = EntityMod.new(self, nil)
    end
    return self._storage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Team():list() / client:Team():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Team(data)
  local EntityMod = require("entity.team_entity")
  if data == nil then
    if self._team == nil then
      self._team = EntityMod.new(self, nil)
    end
    return self._team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TldName():list() / client:TldName():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:TldName(data)
  local EntityMod = require("entity.tld_name_entity")
  if data == nil then
    if self._tld_name == nil then
      self._tld_name = EntityMod.new(self, nil)
    end
    return self._tld_name
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Toggle():list() / client:Toggle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Toggle(data)
  local EntityMod = require("entity.toggle_entity")
  if data == nil then
    if self._toggle == nil then
      self._toggle = EntityMod.new(self, nil)
    end
    return self._toggle
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Vcr():list() / client:Vcr():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Vcr(data)
  local EntityMod = require("entity.vcr_entity")
  if data == nil then
    if self._vcr == nil then
      self._vcr = EntityMod.new(self, nil)
    end
    return self._vcr
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VcrImageList():list() / client:VcrImageList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:VcrImageList(data)
  local EntityMod = require("entity.vcr_image_list_entity")
  if data == nil then
    if self._vcr_image_list == nil then
      self._vcr_image_list = EntityMod.new(self, nil)
    end
    return self._vcr_image_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VcrRepositoryList():list() / client:VcrRepositoryList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:VcrRepositoryList(data)
  local EntityMod = require("entity.vcr_repository_list_entity")
  if data == nil then
    if self._vcr_repository_list == nil then
      self._vcr_repository_list = EntityMod.new(self, nil)
    end
    return self._vcr_repository_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VcrRepositoryPermissionList():list() / client:VcrRepositoryPermissionList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:VcrRepositoryPermissionList(data)
  local EntityMod = require("entity.vcr_repository_permission_list_entity")
  if data == nil then
    if self._vcr_repository_permission_list == nil then
      self._vcr_repository_permission_list = EntityMod.new(self, nil)
    end
    return self._vcr_repository_permission_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebAnalytics():list() / client:WebAnalytics():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:WebAnalytics(data)
  local EntityMod = require("entity.web_analytics_entity")
  if data == nil then
    if self._web_analytics == nil then
      self._web_analytics = EntityMod.new(self, nil)
    end
    return self._web_analytics
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function VercelSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end




function VercelSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = VercelSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return VercelSDK
