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

func TestRollingReleaseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RollingRelease(nil)
		if ent == nil {
			t.Fatal("expected non-nil RollingReleaseEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := rolling_releaseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "rolling_release." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_ROLLING_RELEASE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		rollingReleaseRef01Ent := client.RollingRelease(nil)
		rollingReleaseRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "rolling_release"}), "rolling_release_ref01"))
		rollingReleaseRef01Data["project_id"] = setup.idmap["project01"]

		rollingReleaseRef01DataResult, err := rollingReleaseRef01Ent.Create(rollingReleaseRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		rollingReleaseRef01Data = core.ToMapAny(entityData(rollingReleaseRef01DataResult))
		if rollingReleaseRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		rollingReleaseRef01DataUp0Up := map[string]any{
		}

		rollingReleaseRef01MarkdefUp0Name := "advancementType"
		rollingReleaseRef01MarkdefUp0Value := fmt.Sprintf("Mark01-rolling_release_ref01_%d", setup.now)
		rollingReleaseRef01DataUp0Up[rollingReleaseRef01MarkdefUp0Name] = rollingReleaseRef01MarkdefUp0Value

		rollingReleaseRef01ResdataUp0Result, err := rollingReleaseRef01Ent.Update(rollingReleaseRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		rollingReleaseRef01ResdataUp0 := core.ToMapAny(entityData(rollingReleaseRef01ResdataUp0Result))
		if rollingReleaseRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if rollingReleaseRef01ResdataUp0[rollingReleaseRef01MarkdefUp0Name] != rollingReleaseRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", rollingReleaseRef01MarkdefUp0Name, rollingReleaseRef01ResdataUp0[rollingReleaseRef01MarkdefUp0Name])
		}

		// LOAD
		rollingReleaseRef01MatchDt0 := map[string]any{}
		rollingReleaseRef01DataDt0Loaded, err := rollingReleaseRef01Ent.Load(rollingReleaseRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if rollingReleaseRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}


	})
}

func rolling_releaseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "rolling_release", "RollingReleaseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read rolling_release test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse rolling_release test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"rolling_release01", "rolling_release02", "rolling_release03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_ROLLING_RELEASE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_ROLLING_RELEASE_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_ROLLING_RELEASE_ENTID"])
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
