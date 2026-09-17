# Segment entity test

import json
import os
import time

import pytest

from vercel_sdk.utility.voxgig_struct import voxgig_struct as vs
from vercel_sdk import VercelSDK
from vercel_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestSegmentEntity:

    def test_should_create_instance(self):
        testsdk = VercelSDK.test(None, None)
        ent = testsdk.Segment(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _segment_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "segment." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set VERCEL_TEST_SEGMENT_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        segment_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.segment")))
        segment_ref01_data = None
        if len(segment_ref01_data_raw) > 0:
            segment_ref01_data = helpers.to_map(segment_ref01_data_raw[0][1])

        # LOAD
        segment_ref01_ent = client.Segment(None)
        segment_ref01_match_dt0 = {
            "id": segment_ref01_data["id"],
        }
        segment_ref01_data_dt0_loaded = segment_ref01_ent.load(segment_ref01_match_dt0, None)
        segment_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(segment_ref01_data_dt0_loaded))
        assert segment_ref01_data_dt0_load_result is not None
        assert segment_ref01_data_dt0_load_result["id"] == segment_ref01_data["id"]



def _segment_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/segment/SegmentTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = VercelSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["segment01", "segment02", "segment03", "project01", "project02", "project03"],
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
        "VERCEL_TEST_SEGMENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "VERCEL_TEST_SEGMENT_ENTID": idmap,
        "VERCEL_TEST_LIVE": "FALSE",
        "VERCEL_TEST_EXPLAIN": "FALSE",
        "VERCEL_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("VERCEL_TEST_SEGMENT_ENTID"))
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
