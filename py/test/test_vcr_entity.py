# Vcr entity test

import json
import os
import time

import pytest

from vercel_sdk.utility.voxgig_struct import voxgig_struct as vs
from vercel_sdk import VercelSDK
from vercel_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestVcrEntity:

    def test_should_create_instance(self):
        testsdk = VercelSDK.test(None, None)
        ent = testsdk.Vcr(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "vcr": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = VercelSDK.test(seed, None)
        seen = list(base.Vcr(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from vercel_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = VercelSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Vcr(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _vcr_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "vcr." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set VERCEL_TEST_VCR_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        vcr_ref01_ent = client.Vcr(None)
        vcr_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.vcr"), "vcr_ref01"))
        vcr_ref01_data["id_or_name"] = setup["idmap"]["id_or_name01"]
        vcr_ref01_data["project_slug"] = setup["idmap"]["project_slug01"]
        vcr_ref01_data["repository_id"] = setup["idmap"]["repository01"]
        vcr_ref01_data["repository_name"] = setup["idmap"]["repository_name01"]
        vcr_ref01_data["team_slug"] = setup["idmap"]["team_slug01"]

        vcr_ref01_data = helpers.to_map(runner.entity_data(vcr_ref01_ent.create(vcr_ref01_data, None)))
        assert vcr_ref01_data is not None
        assert vcr_ref01_data["id"] is not None

        # LIST
        vcr_ref01_match = {
            "project_slug": setup["idmap"]["project_slug01"],
            "repository_name": setup["idmap"]["repository_name01"],
            "team_slug": setup["idmap"]["team_slug01"],
        }

        vcr_ref01_list_result = vcr_ref01_ent.list(vcr_ref01_match, None)
        assert isinstance(vcr_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(vcr_ref01_list_result),
            {"id": vcr_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        vcr_ref01_data_up0_up = {
            "id": vcr_ref01_data["id"],
            "project_slug": setup["idmap"]["project_slug"],
            "repository_name": setup["idmap"]["repository_name"],
            "team_slug": setup["idmap"]["team_slug"],
        }

        vcr_ref01_markdef_up0_name = "arch"
        vcr_ref01_markdef_up0_value = "Mark01-vcr_ref01_" + str(setup["now"])
        vcr_ref01_data_up0_up[vcr_ref01_markdef_up0_name] = vcr_ref01_markdef_up0_value

        vcr_ref01_resdata_up0 = helpers.to_map(runner.entity_data(vcr_ref01_ent.update(vcr_ref01_data_up0_up, None)))
        assert vcr_ref01_resdata_up0 is not None
        assert vcr_ref01_resdata_up0["id"] == vcr_ref01_data_up0_up["id"]
        assert vcr_ref01_resdata_up0[vcr_ref01_markdef_up0_name] == vcr_ref01_markdef_up0_value

        # LOAD
        vcr_ref01_match_dt0 = {
            "id": vcr_ref01_data["id"],
        }
        vcr_ref01_data_dt0_loaded = vcr_ref01_ent.load(vcr_ref01_match_dt0, None)
        vcr_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(vcr_ref01_data_dt0_loaded))
        assert vcr_ref01_data_dt0_load_result is not None
        assert vcr_ref01_data_dt0_load_result["id"] == vcr_ref01_data["id"]

        # REMOVE
        vcr_ref01_match_rm0 = {
            "id": vcr_ref01_data["id"],
        }
        vcr_ref01_ent.remove(vcr_ref01_match_rm0, None)

        # LIST
        vcr_ref01_match_rt0 = {
            "project_slug": setup["idmap"]["project_slug01"],
            "repository_name": setup["idmap"]["repository_name01"],
            "team_slug": setup["idmap"]["team_slug01"],
        }

        vcr_ref01_list_rt0_result = vcr_ref01_ent.list(vcr_ref01_match_rt0, None)
        assert isinstance(vcr_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(vcr_ref01_list_rt0_result),
            {"id": vcr_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _vcr_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/vcr/VcrTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = VercelSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["vcr01", "vcr02", "vcr03", "repository01", "repository02", "repository03", "v201", "v202", "v203", "image01", "image02", "image03", "tag01", "tag02", "tag03", "upload01", "upload02", "upload03", "blob01", "blob02", "blob03", "manifest01", "manifest02", "manifest03", "id_or_name01", "project_slug01", "repository_name01", "team_slug01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "VERCEL_TEST_VCR_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "VERCEL_TEST_VCR_ENTID": idmap,
        "VERCEL_TEST_LIVE": "FALSE",
        "VERCEL_TEST_EXPLAIN": "FALSE",
        "VERCEL_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("VERCEL_TEST_VCR_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("project_slug") is None:
        idmap_resolved["project_slug"] = idmap_resolved.get("project_slug01")
    if idmap_resolved.get("repository_name") is None:
        idmap_resolved["repository_name"] = idmap_resolved.get("repository_name01")
    if idmap_resolved.get("team_slug") is None:
        idmap_resolved["team_slug"] = idmap_resolved.get("team_slug01")

    if env.get("VERCEL_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("VERCEL_APIKEY"),
            },
            extra or {},
        ])
        client = VercelSDK(helpers.to_map(merged_opts))

    _live = env.get("VERCEL_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("VERCEL_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
