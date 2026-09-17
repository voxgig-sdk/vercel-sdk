package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/vercel-sdk/go"
	"github.com/voxgig-sdk/vercel-sdk/go/core"

	vs "github.com/voxgig-sdk/vercel-sdk/go/utility/struct"
)

func TestAiGatewayVirtualModelConfigEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiGatewayVirtualModelConfig(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiGatewayVirtualModelConfigEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ai_gateway_virtual_model_configBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_gateway_virtual_model_config." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_AI_GATEWAY_VIRTUAL_MODEL_CONFIG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiGatewayVirtualModelConfigRef01Ent := client.AiGatewayVirtualModelConfig(nil)
		aiGatewayVirtualModelConfigRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_gateway_virtual_model_config"}), "ai_gateway_virtual_model_config_ref01"))

		aiGatewayVirtualModelConfigRef01DataResult, err := aiGatewayVirtualModelConfigRef01Ent.Create(aiGatewayVirtualModelConfigRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiGatewayVirtualModelConfigRef01Data = core.ToMapAny(entityData(aiGatewayVirtualModelConfigRef01DataResult))
		if aiGatewayVirtualModelConfigRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiGatewayVirtualModelConfigRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		aiGatewayVirtualModelConfigRef01DataUp0Up := map[string]any{
			"id": aiGatewayVirtualModelConfigRef01Data["id"],
		}

		aiGatewayVirtualModelConfigRef01MarkdefUp0Name := "baseUrl"
		aiGatewayVirtualModelConfigRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_gateway_virtual_model_config_ref01_%d", setup.now)
		aiGatewayVirtualModelConfigRef01DataUp0Up[aiGatewayVirtualModelConfigRef01MarkdefUp0Name] = aiGatewayVirtualModelConfigRef01MarkdefUp0Value

		aiGatewayVirtualModelConfigRef01ResdataUp0Result, err := aiGatewayVirtualModelConfigRef01Ent.Update(aiGatewayVirtualModelConfigRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiGatewayVirtualModelConfigRef01ResdataUp0 := core.ToMapAny(entityData(aiGatewayVirtualModelConfigRef01ResdataUp0Result))
		if aiGatewayVirtualModelConfigRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiGatewayVirtualModelConfigRef01ResdataUp0["id"] != aiGatewayVirtualModelConfigRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiGatewayVirtualModelConfigRef01ResdataUp0[aiGatewayVirtualModelConfigRef01MarkdefUp0Name] != aiGatewayVirtualModelConfigRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiGatewayVirtualModelConfigRef01MarkdefUp0Name, aiGatewayVirtualModelConfigRef01ResdataUp0[aiGatewayVirtualModelConfigRef01MarkdefUp0Name])
		}

		// LOAD
		aiGatewayVirtualModelConfigRef01MatchDt0 := map[string]any{
			"id": aiGatewayVirtualModelConfigRef01Data["id"],
		}
		aiGatewayVirtualModelConfigRef01DataDt0Loaded, err := aiGatewayVirtualModelConfigRef01Ent.Load(aiGatewayVirtualModelConfigRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiGatewayVirtualModelConfigRef01DataDt0LoadResult := core.ToMapAny(entityData(aiGatewayVirtualModelConfigRef01DataDt0Loaded))
		if aiGatewayVirtualModelConfigRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiGatewayVirtualModelConfigRef01DataDt0LoadResult["id"] != aiGatewayVirtualModelConfigRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func ai_gateway_virtual_model_configBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_gateway_virtual_model_config", "AiGatewayVirtualModelConfigTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_gateway_virtual_model_config test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_gateway_virtual_model_config test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_gateway_virtual_model_config01", "ai_gateway_virtual_model_config02", "ai_gateway_virtual_model_config03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("VERCEL_TEST_AI_GATEWAY_VIRTUAL_MODEL_CONFIG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_AI_GATEWAY_VIRTUAL_MODEL_CONFIG_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_AI_GATEWAY_VIRTUAL_MODEL_CONFIG_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["VERCEL_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["VERCEL_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewVercelSDK(core.ToMapAny(mergedOpts))
	}

	live := env["VERCEL_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["VERCEL_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
