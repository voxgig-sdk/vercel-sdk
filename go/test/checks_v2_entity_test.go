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

func TestChecksV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ChecksV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil ChecksV2Entity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"checks_v2": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ChecksV2(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ChecksV2(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := checks_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "checks_v2." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_CHECKS_V2_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		checksV2Ref01Ent := client.ChecksV2(nil)
		checksV2Ref01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "checks_v2"}), "checks_v2_ref01"))
		checksV2Ref01Data["check_id"] = setup.idmap["check01"]
		checksV2Ref01Data["deployment_id"] = setup.idmap["deployment01"]
		checksV2Ref01Data["project_id"] = setup.idmap["project01"]

		checksV2Ref01DataResult, err := checksV2Ref01Ent.Create(checksV2Ref01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		checksV2Ref01Data = core.ToMapAny(entityData(checksV2Ref01DataResult))
		if checksV2Ref01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		checksV2Ref01Match := map[string]any{
			"deployment_id": setup.idmap["deployment01"],
		}

		checksV2Ref01ListResult, err := checksV2Ref01Ent.List(checksV2Ref01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, checksV2Ref01ListOk := checksV2Ref01ListResult.([]any)
		if !checksV2Ref01ListOk {
			t.Fatalf("expected list result to be an array, got %T", checksV2Ref01ListResult)
		}

		// UPDATE
		checksV2Ref01DataUp0Up := map[string]any{
			"deployment_id": setup.idmap["deployment_id"],
		}

		checksV2Ref01MarkdefUp0Name := "checkId"
		checksV2Ref01MarkdefUp0Value := fmt.Sprintf("Mark01-checks_v2_ref01_%d", setup.now)
		checksV2Ref01DataUp0Up[checksV2Ref01MarkdefUp0Name] = checksV2Ref01MarkdefUp0Value

		checksV2Ref01ResdataUp0Result, err := checksV2Ref01Ent.Update(checksV2Ref01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		checksV2Ref01ResdataUp0 := core.ToMapAny(entityData(checksV2Ref01ResdataUp0Result))
		if checksV2Ref01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if checksV2Ref01ResdataUp0[checksV2Ref01MarkdefUp0Name] != checksV2Ref01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", checksV2Ref01MarkdefUp0Name, checksV2Ref01ResdataUp0[checksV2Ref01MarkdefUp0Name])
		}

		// LOAD
		checksV2Ref01MatchDt0 := map[string]any{}
		checksV2Ref01DataDt0Loaded, err := checksV2Ref01Ent.Load(checksV2Ref01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if checksV2Ref01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func checks_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "checks_v2", "ChecksV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read checks_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse checks_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"checks_v201", "checks_v202", "checks_v203", "deployment01", "deployment02", "deployment03", "check_run01", "check_run02", "check_run03", "project01", "project02", "project03", "check01", "check02", "check03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_CHECKS_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_CHECKS_V2_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_CHECKS_V2_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add deployment_id alias for update test.
	if idmapResolved["deployment_id"] == nil {
		idmapResolved["deployment_id"] = idmapResolved["deployment01"]
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
