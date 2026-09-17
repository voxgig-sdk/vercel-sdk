-- FlagsSdkKeyWithSecret entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("vercel_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("FlagsSdkKeyWithSecretEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:FlagsSdkKeyWithSecret(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = flags_sdk_key_with_secret_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "flags_sdk_key_with_secret." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local flags_sdk_key_with_secret_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.flags_sdk_key_with_secret")))
    local flags_sdk_key_with_secret_ref01_data = nil
    if #flags_sdk_key_with_secret_ref01_data_raw > 0 then
      flags_sdk_key_with_secret_ref01_data = helpers.to_map(flags_sdk_key_with_secret_ref01_data_raw[1][2])
    end

    -- UPDATE
    local flags_sdk_key_with_secret_ref01_ent = client:FlagsSdkKeyWithSecret(nil)
    local flags_sdk_key_with_secret_ref01_data_up0_up = {
    }

    local flags_sdk_key_with_secret_ref01_markdef_up0_name = "createdBy"
    local flags_sdk_key_with_secret_ref01_markdef_up0_value = "Mark01-flags_sdk_key_with_secret_ref01_" .. tostring(setup.now)
    flags_sdk_key_with_secret_ref01_data_up0_up[flags_sdk_key_with_secret_ref01_markdef_up0_name] = flags_sdk_key_with_secret_ref01_markdef_up0_value

    local flags_sdk_key_with_secret_ref01_resdata_up0_result, err = flags_sdk_key_with_secret_ref01_ent:update(flags_sdk_key_with_secret_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local flags_sdk_key_with_secret_ref01_resdata_up0 = helpers.to_map(type(flags_sdk_key_with_secret_ref01_resdata_up0_result) == 'table' and flags_sdk_key_with_secret_ref01_resdata_up0_result.data_get and flags_sdk_key_with_secret_ref01_resdata_up0_result:data_get() or flags_sdk_key_with_secret_ref01_resdata_up0_result)
    assert.is_not_nil(flags_sdk_key_with_secret_ref01_resdata_up0)
    assert.are.equal(flags_sdk_key_with_secret_ref01_resdata_up0[flags_sdk_key_with_secret_ref01_markdef_up0_name], flags_sdk_key_with_secret_ref01_markdef_up0_value)

  end)
end)

function flags_sdk_key_with_secret_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/flags_sdk_key_with_secret/FlagsSdkKeyWithSecretTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read flags_sdk_key_with_secret test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "flags_sdk_key_with_secret01", "flags_sdk_key_with_secret02", "flags_sdk_key_with_secret03", "project01", "project02", "project03" },
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
  local entid_env_raw = os.getenv("VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID"] = idmap,
    ["VERCEL_TEST_LIVE"] = "FALSE",
    ["VERCEL_TEST_EXPLAIN"] = "FALSE",
    ["VERCEL_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID"])
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
