package sdktest

import (
	"encoding/json"
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

func TestMicrofrontendEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Microfrontend(nil)
		if ent == nil {
			t.Fatal("expected non-nil MicrofrontendEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"microfrontend": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Microfrontend(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Microfrontend(nil).Stream("list", nil, nil) {
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
		setup := microfrontendBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "microfrontend." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_MICROFRONTEND_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		microfrontendRef01Ent := client.Microfrontend(nil)
		microfrontendRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "microfrontend"}), "microfrontend_ref01"))
		microfrontendRef01Data["group_id"] = setup.idmap["group01"]

		microfrontendRef01DataResult, err := microfrontendRef01Ent.Create(microfrontendRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		microfrontendRef01Data = core.ToMapAny(entityData(microfrontendRef01DataResult))
		if microfrontendRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if microfrontendRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		microfrontendRef01Match := map[string]any{
			"group_id": setup.idmap["group01"],
		}

		microfrontendRef01ListResult, err := microfrontendRef01Ent.List(microfrontendRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		microfrontendRef01List, microfrontendRef01ListOk := microfrontendRef01ListResult.([]any)
		if !microfrontendRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", microfrontendRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(microfrontendRef01List), map[string]any{"id": microfrontendRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		microfrontendRef01MatchDt0 := map[string]any{
			"id": microfrontendRef01Data["id"],
		}
		microfrontendRef01DataDt0Loaded, err := microfrontendRef01Ent.Load(microfrontendRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		microfrontendRef01DataDt0LoadResult := core.ToMapAny(entityData(microfrontendRef01DataDt0Loaded))
		if microfrontendRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if microfrontendRef01DataDt0LoadResult["id"] != microfrontendRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func microfrontendBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "microfrontend", "MicrofrontendTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read microfrontend test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse microfrontend test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"microfrontend01", "microfrontend02", "microfrontend03", "group01", "group02", "group03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_MICROFRONTEND_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_MICROFRONTEND_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_MICROFRONTEND_ENTID"])
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
