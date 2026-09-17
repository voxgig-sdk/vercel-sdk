# FeatureFlag entity test

import json
import os
import time

import pytest

from vercel_sdk.utility.voxgig_struct import voxgig_struct as vs
from vercel_sdk import VercelSDK
from vercel_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestFeatureFlagEntity:

    def test_should_create_instance(self):
        testsdk = VercelSDK.test(None, None)
        ent = testsdk.FeatureFlag(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "feature_flag": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = VercelSDK.test(seed, None)
        seen = list(base.FeatureFlag(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from vercel_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = VercelSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.FeatureFlag(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _feature_flag_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "feature_flag." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set VERCEL_TEST_FEATURE_FLAG_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        feature_flag_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.feature_flag")))
        feature_flag_ref01_data = None
        if len(feature_flag_ref01_data_raw) > 0:
            feature_flag_ref01_data = helpers.to_map(feature_flag_ref01_data_raw[0][1])

        # LIST
        feature_flag_ref01_ent = client.FeatureFlag(None)
        feature_flag_ref01_match = {
            "project_id": setup["idmap"]["project01"],
        }

        feature_flag_ref01_list_result = feature_flag_ref01_ent.list(feature_flag_ref01_match, None)
        assert isinstance(feature_flag_ref01_list_result, list)

        # UPDATE
        feature_flag_ref01_data_up0_up = {
            "id": feature_flag_ref01_data["id"],
        }

        feature_flag_ref01_markdef_up0_name = "createdBy"
        feature_flag_ref01_markdef_up0_value = "Mark01-feature_flag_ref01_" + str(setup["now"])
        feature_flag_ref01_data_up0_up[feature_flag_ref01_markdef_up0_name] = feature_flag_ref01_markdef_up0_value

        feature_flag_ref01_resdata_up0 = helpers.to_map(runner.entity_data(feature_flag_ref01_ent.update(feature_flag_ref01_data_up0_up, None)))
        assert feature_flag_ref01_resdata_up0 is not None
        assert feature_flag_ref01_resdata_up0["id"] == feature_flag_ref01_data_up0_up["id"]
        assert feature_flag_ref01_resdata_up0[feature_flag_ref01_markdef_up0_name] == feature_flag_ref01_markdef_up0_value

        # LOAD
        feature_flag_ref01_match_dt0 = {
            "id": feature_flag_ref01_data["id"],
        }
        feature_flag_ref01_data_dt0_loaded = feature_flag_ref01_ent.load(feature_flag_ref01_match_dt0, None)
        feature_flag_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(feature_flag_ref01_data_dt0_loaded))
        assert feature_flag_ref01_data_dt0_load_result is not None
        assert feature_flag_ref01_data_dt0_load_result["id"] == feature_flag_ref01_data["id"]



def _feature_flag_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/feature_flag/FeatureFlagTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = VercelSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["feature_flag01", "feature_flag02", "feature_flag03", "deployment01", "deployment02", "deployment03", "project01", "project02", "project03", "team01", "team02", "team03", "flag01", "flag02", "flag03", "sdk_key01", "sdk_key02", "sdk_key03", "segment01", "segment02", "segment03"],
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
        "VERCEL_TEST_FEATURE_FLAG_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "VERCEL_TEST_FEATURE_FLAG_ENTID": idmap,
        "VERCEL_TEST_LIVE": "FALSE",
        "VERCEL_TEST_EXPLAIN": "FALSE",
        "VERCEL_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("VERCEL_TEST_FEATURE_FLAG_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
