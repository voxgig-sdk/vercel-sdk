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

func TestKmsEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Kms(nil)
		if ent == nil {
			t.Fatal("expected non-nil KmsEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"kms": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Kms(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Kms(nil).Stream("list", nil, nil) {
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
		setup := kmsBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "kms." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_KMS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		kmsRef01Ent := client.Kms(nil)
		kmsRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "kms"}), "kms_ref01"))
		kmsRef01Data["issuer_id"] = setup.idmap["issuer01"]
		kmsRef01Data["kind"] = setup.idmap["kind01"]

		kmsRef01DataResult, err := kmsRef01Ent.Create(kmsRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		kmsRef01Data = core.ToMapAny(entityData(kmsRef01DataResult))
		if kmsRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if kmsRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		kmsRef01Match := map[string]any{}

		kmsRef01ListResult, err := kmsRef01Ent.List(kmsRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		kmsRef01List, kmsRef01ListOk := kmsRef01ListResult.([]any)
		if !kmsRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", kmsRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(kmsRef01List), map[string]any{"id": kmsRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		kmsRef01DataUp0Up := map[string]any{
			"id": kmsRef01Data["id"],
		}

		kmsRef01MarkdefUp0Name := "activation"
		kmsRef01MarkdefUp0Value := fmt.Sprintf("Mark01-kms_ref01_%d", setup.now)
		kmsRef01DataUp0Up[kmsRef01MarkdefUp0Name] = kmsRef01MarkdefUp0Value

		kmsRef01ResdataUp0Result, err := kmsRef01Ent.Update(kmsRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		kmsRef01ResdataUp0 := core.ToMapAny(entityData(kmsRef01ResdataUp0Result))
		if kmsRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if kmsRef01ResdataUp0["id"] != kmsRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if kmsRef01ResdataUp0[kmsRef01MarkdefUp0Name] != kmsRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", kmsRef01MarkdefUp0Name, kmsRef01ResdataUp0[kmsRef01MarkdefUp0Name])
		}

		// LOAD
		kmsRef01MatchDt0 := map[string]any{
			"id": kmsRef01Data["id"],
		}
		kmsRef01DataDt0Loaded, err := kmsRef01Ent.Load(kmsRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		kmsRef01DataDt0LoadResult := core.ToMapAny(entityData(kmsRef01DataDt0Loaded))
		if kmsRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if kmsRef01DataDt0LoadResult["id"] != kmsRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		kmsRef01MatchRm0 := map[string]any{
			"id": kmsRef01Data["id"],
		}
		_, err = kmsRef01Ent.Remove(kmsRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		kmsRef01MatchRt0 := map[string]any{}

		kmsRef01ListRt0Result, err := kmsRef01Ent.List(kmsRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		kmsRef01ListRt0, kmsRef01ListRt0Ok := kmsRef01ListRt0Result.([]any)
		if !kmsRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", kmsRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(kmsRef01ListRt0), map[string]any{"id": kmsRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func kmsBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "kms", "KmsTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read kms test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse kms test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"kms01", "kms02", "kms03", "issuer01", "issuer02", "issuer03", "key01", "key02", "key03", "policy01", "policy02", "policy03", "kind01"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_KMS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_KMS_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_KMS_ENTID"])
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
