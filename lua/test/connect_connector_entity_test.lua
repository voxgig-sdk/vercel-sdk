-- ConnectConnector entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("vercel_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ConnectConnectorEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ConnectConnector(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = connect_connector_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "connect_connector." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_CONNECT_CONNECTOR_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local connect_connector_ref01_ent = client:ConnectConnector(nil)
    local connect_connector_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.connect_connector"), "connect_connector_ref01"))

    local connect_connector_ref01_data_result, err = connect_connector_ref01_ent:create(connect_connector_ref01_data, nil)
    assert.is_nil(err)
    connect_connector_ref01_data = helpers.to_map(type(connect_connector_ref01_data_result) == 'table' and connect_connector_ref01_data_result.data_get and connect_connector_ref01_data_result:data_get() or connect_connector_ref01_data_result)
    assert.is_not_nil(connect_connector_ref01_data)
    assert.is_not_nil(connect_connector_ref01_data["id"])

    -- UPDATE
    local connect_connector_ref01_data_up0_up = {
      id = connect_connector_ref01_data["id"],
    }

    local connect_connector_ref01_markdef_up0_name = "accentColor"
    local connect_connector_ref01_markdef_up0_value = "Mark01-connect_connector_ref01_" .. tostring(setup.now)
    connect_connector_ref01_data_up0_up[connect_connector_ref01_markdef_up0_name] = connect_connector_ref01_markdef_up0_value

    local connect_connector_ref01_resdata_up0_result, err = connect_connector_ref01_ent:update(connect_connector_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local connect_connector_ref01_resdata_up0 = helpers.to_map(type(connect_connector_ref01_resdata_up0_result) == 'table' and connect_connector_ref01_resdata_up0_result.data_get and connect_connector_ref01_resdata_up0_result:data_get() or connect_connector_ref01_resdata_up0_result)
    assert.is_not_nil(connect_connector_ref01_resdata_up0)
    assert.are.equal(connect_connector_ref01_resdata_up0["id"], connect_connector_ref01_data_up0_up["id"])
    assert.are.equal(connect_connector_ref01_resdata_up0[connect_connector_ref01_markdef_up0_name], connect_connector_ref01_markdef_up0_value)

    -- LOAD
    local connect_connector_ref01_match_dt0 = {
      id = connect_connector_ref01_data["id"],
    }
    local connect_connector_ref01_data_dt0_loaded, err = connect_connector_ref01_ent:load(connect_connector_ref01_match_dt0, nil)
    assert.is_nil(err)
    local connect_connector_ref01_data_dt0_load_result = helpers.to_map(type(connect_connector_ref01_data_dt0_loaded) == 'table' and connect_connector_ref01_data_dt0_loaded.data_get and connect_connector_ref01_data_dt0_loaded:data_get() or connect_connector_ref01_data_dt0_loaded)
    assert.is_not_nil(connect_connector_ref01_data_dt0_load_result)
    assert.are.equal(connect_connector_ref01_data_dt0_load_result["id"], connect_connector_ref01_data["id"])

  end)
end)

function connect_connector_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/connect_connector/ConnectConnectorTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read connect_connector test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "connect_connector01", "connect_connector02", "connect_connector03", "connector01", "connector02", "connector03" },
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
  local entid_env_raw = os.getenv("VERCEL_TEST_CONNECT_CONNECTOR_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["VERCEL_TEST_CONNECT_CONNECTOR_ENTID"] = idmap,
    ["VERCEL_TEST_LIVE"] = "FALSE",
    ["VERCEL_TEST_EXPLAIN"] = "FALSE",
    ["VERCEL_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["VERCEL_TEST_CONNECT_CONNECTOR_ENTID"])
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
