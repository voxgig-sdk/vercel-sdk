# GlobalConfigItem entity test

import json
import os
import time

import pytest

from vercel_sdk.utility.voxgig_struct import voxgig_struct as vs
from vercel_sdk import VercelSDK
from vercel_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestGlobalConfigItemEntity:

    def test_should_create_instance(self):
        testsdk = VercelSDK.test(None, None)
        ent = testsdk.GlobalConfigItem(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "global_config_item": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = VercelSDK.test(seed, None)
        seen = list(base.GlobalConfigItem(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from vercel_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = VercelSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.GlobalConfigItem(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _global_config_item_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "global_config_item." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set VERCEL_TEST_GLOBAL_CONFIG_ITEM_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        global_config_item_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.global_config_item")))
        global_config_item_ref01_data = None
        if len(global_config_item_ref01_data_raw) > 0:
            global_config_item_ref01_data = helpers.to_map(global_config_item_ref01_data_raw[0][1])

        # LIST
        global_config_item_ref01_ent = client.GlobalConfigItem(None)
        global_config_item_ref01_match = {
            "edge_config_id": setup["idmap"]["edge_config01"],
        }

        global_config_item_ref01_list_result = global_config_item_ref01_ent.list(global_config_item_ref01_match, None)
        assert isinstance(global_config_item_ref01_list_result, list)

        # LOAD
        global_config_item_ref01_match_dt0 = {
            "id": global_config_item_ref01_data["id"],
        }
        global_config_item_ref01_data_dt0_loaded = global_config_item_ref01_ent.load(global_config_item_ref01_match_dt0, None)
        global_config_item_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(global_config_item_ref01_data_dt0_loaded))
        assert global_config_item_ref01_data_dt0_load_result is not None
        assert global_config_item_ref01_data_dt0_load_result["id"] == global_config_item_ref01_data["id"]



def _global_config_item_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/global_config_item/GlobalConfigItemTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = VercelSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["global_config_item01", "global_config_item02", "global_config_item03", "global_config01", "global_config02", "global_config03", "edge_config01"],
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
        "VERCEL_TEST_GLOBAL_CONFIG_ITEM_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "VERCEL_TEST_GLOBAL_CONFIG_ITEM_ENTID": idmap,
        "VERCEL_TEST_LIVE": "FALSE",
        "VERCEL_TEST_EXPLAIN": "FALSE",
        "VERCEL_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("VERCEL_TEST_GLOBAL_CONFIG_ITEM_ENTID"))
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
