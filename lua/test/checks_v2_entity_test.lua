-- ChecksV2 entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("vercel_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ChecksV2Entity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ChecksV2(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["checks_v2"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:ChecksV2(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:ChecksV2(nil):stream("list", nil, nil) do
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
    local setup = checks_v2_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "checks_v2." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_CHECKS_V2_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local checks_v2_ref01_ent = client:ChecksV2(nil)
    local checks_v2_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.checks_v2"), "checks_v2_ref01"))
    checks_v2_ref01_data["check_id"] = setup.idmap["check01"]
    checks_v2_ref01_data["deployment_id"] = setup.idmap["deployment01"]
    checks_v2_ref01_data["project_id"] = setup.idmap["project01"]

    local checks_v2_ref01_data_result, err = checks_v2_ref01_ent:create(checks_v2_ref01_data, nil)
    assert.is_nil(err)
    checks_v2_ref01_data = helpers.to_map(type(checks_v2_ref01_data_result) == 'table' and checks_v2_ref01_data_result.data_get and checks_v2_ref01_data_result:data_get() or checks_v2_ref01_data_result)
    assert.is_not_nil(checks_v2_ref01_data)

    -- LIST
    local checks_v2_ref01_match = {
      ["deployment_id"] = setup.idmap["deployment01"],
    }

    local checks_v2_ref01_list_result, err = checks_v2_ref01_ent:list(checks_v2_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(checks_v2_ref01_list_result)

    -- UPDATE
    local checks_v2_ref01_data_up0_up = {
      ["deployment_id"] = setup.idmap["deployment_id"],
    }

    local checks_v2_ref01_markdef_up0_name = "checkId"
    local checks_v2_ref01_markdef_up0_value = "Mark01-checks_v2_ref01_" .. tostring(setup.now)
    checks_v2_ref01_data_up0_up[checks_v2_ref01_markdef_up0_name] = checks_v2_ref01_markdef_up0_value

    local checks_v2_ref01_resdata_up0_result, err = checks_v2_ref01_ent:update(checks_v2_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local checks_v2_ref01_resdata_up0 = helpers.to_map(type(checks_v2_ref01_resdata_up0_result) == 'table' and checks_v2_ref01_resdata_up0_result.data_get and checks_v2_ref01_resdata_up0_result:data_get() or checks_v2_ref01_resdata_up0_result)
    assert.is_not_nil(checks_v2_ref01_resdata_up0)
    assert.are.equal(checks_v2_ref01_resdata_up0[checks_v2_ref01_markdef_up0_name], checks_v2_ref01_markdef_up0_value)

    -- LOAD
    local checks_v2_ref01_match_dt0 = {}
    local checks_v2_ref01_data_dt0_loaded, err = checks_v2_ref01_ent:load(checks_v2_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(checks_v2_ref01_data_dt0_loaded)

  end)
end)

function checks_v2_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/checks_v2/ChecksV2TestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read checks_v2 test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "checks_v201", "checks_v202", "checks_v203", "deployment01", "deployment02", "deployment03", "check_run01", "check_run02", "check_run03", "project01", "project02", "project03", "check01", "check02", "check03" },
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
  local entid_env_raw = os.getenv("VERCEL_TEST_CHECKS_V2_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["VERCEL_TEST_CHECKS_V2_ENTID"] = idmap,
    ["VERCEL_TEST_LIVE"] = "FALSE",
    ["VERCEL_TEST_EXPLAIN"] = "FALSE",
    ["VERCEL_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["VERCEL_TEST_CHECKS_V2_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["deployment_id"] == nil then
    idmap_resolved["deployment_id"] = idmap_resolved["deployment01"]
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
