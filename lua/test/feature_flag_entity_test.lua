-- FeatureFlag entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("vercel_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("FeatureFlagEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:FeatureFlag(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["feature_flag"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:FeatureFlag(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:FeatureFlag(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = feature_flag_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "feature_flag." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_FEATURE_FLAG_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local feature_flag_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.feature_flag")))
    local feature_flag_ref01_data = nil
    if #feature_flag_ref01_data_raw > 0 then
      feature_flag_ref01_data = helpers.to_map(feature_flag_ref01_data_raw[1][2])
    end

    -- LIST
    local feature_flag_ref01_ent = client:FeatureFlag(nil)
    local feature_flag_ref01_match = {
      ["project_id"] = setup.idmap["project01"],
    }

    local feature_flag_ref01_list_result, err = feature_flag_ref01_ent:list(feature_flag_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(feature_flag_ref01_list_result)

    -- UPDATE
    local feature_flag_ref01_data_up0_up = {
      id = feature_flag_ref01_data["id"],
    }

    local feature_flag_ref01_markdef_up0_name = "createdBy"
    local feature_flag_ref01_markdef_up0_value = "Mark01-feature_flag_ref01_" .. tostring(setup.now)
    feature_flag_ref01_data_up0_up[feature_flag_ref01_markdef_up0_name] = feature_flag_ref01_markdef_up0_value

    local feature_flag_ref01_resdata_up0_result, err = feature_flag_ref01_ent:update(feature_flag_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local feature_flag_ref01_resdata_up0 = helpers.to_map(type(feature_flag_ref01_resdata_up0_result) == 'table' and feature_flag_ref01_resdata_up0_result.data_get and feature_flag_ref01_resdata_up0_result:data_get() or feature_flag_ref01_resdata_up0_result)
    assert.is_not_nil(feature_flag_ref01_resdata_up0)
    assert.are.equal(feature_flag_ref01_resdata_up0["id"], feature_flag_ref01_data_up0_up["id"])
    assert.are.equal(feature_flag_ref01_resdata_up0[feature_flag_ref01_markdef_up0_name], feature_flag_ref01_markdef_up0_value)

    -- LOAD
    local feature_flag_ref01_match_dt0 = {
      id = feature_flag_ref01_data["id"],
    }
    local feature_flag_ref01_data_dt0_loaded, err = feature_flag_ref01_ent:load(feature_flag_ref01_match_dt0, nil)
    assert.is_nil(err)
    local feature_flag_ref01_data_dt0_load_result = helpers.to_map(type(feature_flag_ref01_data_dt0_loaded) == 'table' and feature_flag_ref01_data_dt0_loaded.data_get and feature_flag_ref01_data_dt0_loaded:data_get() or feature_flag_ref01_data_dt0_loaded)
    assert.is_not_nil(feature_flag_ref01_data_dt0_load_result)
    assert.are.equal(feature_flag_ref01_data_dt0_load_result["id"], feature_flag_ref01_data["id"])

  end)
end)

function feature_flag_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/feature_flag/FeatureFlagTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read feature_flag test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "feature_flag01", "feature_flag02", "feature_flag03", "deployment01", "deployment02", "deployment03", "project01", "project02", "project03", "team01", "team02", "team03", "flag01", "flag02", "flag03", "sdk_key01", "sdk_key02", "sdk_key03", "segment01", "segment02", "segment03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("VERCEL_TEST_FEATURE_FLAG_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["VERCEL_TEST_FEATURE_FLAG_ENTID"] = idmap,
    ["VERCEL_TEST_LIVE"] = "FALSE",
    ["VERCEL_TEST_EXPLAIN"] = "FALSE",
    ["VERCEL_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["VERCEL_TEST_FEATURE_FLAG_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["VERCEL_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["VERCEL_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["VERCEL_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["VERCEL_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
