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

func TestNetworkEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Network(nil)
		if ent == nil {
			t.Fatal("expected non-nil NetworkEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"network": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Network(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Network(nil).Stream("list", nil, nil) {
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
		setup := networkBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "network." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_NETWORK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		networkRef01Ent := client.Network(nil)
		networkRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "network"}), "network_ref01"))

		networkRef01DataResult, err := networkRef01Ent.Create(networkRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		networkRef01Data = core.ToMapAny(entityData(networkRef01DataResult))
		if networkRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if networkRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		networkRef01Match := map[string]any{}

		networkRef01ListResult, err := networkRef01Ent.List(networkRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		networkRef01List, networkRef01ListOk := networkRef01ListResult.([]any)
		if !networkRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", networkRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(networkRef01List), map[string]any{"id": networkRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		networkRef01DataUp0Up := map[string]any{
			"id": networkRef01Data["id"],
		}

		networkRef01MarkdefUp0Name := "awsAccountId"
		networkRef01MarkdefUp0Value := fmt.Sprintf("Mark01-network_ref01_%d", setup.now)
		networkRef01DataUp0Up[networkRef01MarkdefUp0Name] = networkRef01MarkdefUp0Value

		networkRef01ResdataUp0Result, err := networkRef01Ent.Update(networkRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		networkRef01ResdataUp0 := core.ToMapAny(entityData(networkRef01ResdataUp0Result))
		if networkRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if networkRef01ResdataUp0["id"] != networkRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if networkRef01ResdataUp0[networkRef01MarkdefUp0Name] != networkRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", networkRef01MarkdefUp0Name, networkRef01ResdataUp0[networkRef01MarkdefUp0Name])
		}

		// LOAD
		networkRef01MatchDt0 := map[string]any{
			"id": networkRef01Data["id"],
		}
		networkRef01DataDt0Loaded, err := networkRef01Ent.Load(networkRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		networkRef01DataDt0LoadResult := core.ToMapAny(entityData(networkRef01DataDt0Loaded))
		if networkRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if networkRef01DataDt0LoadResult["id"] != networkRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		networkRef01MatchRm0 := map[string]any{
			"id": networkRef01Data["id"],
		}
		_, err = networkRef01Ent.Remove(networkRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		networkRef01MatchRt0 := map[string]any{}

		networkRef01ListRt0Result, err := networkRef01Ent.List(networkRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		networkRef01ListRt0, networkRef01ListRt0Ok := networkRef01ListRt0Result.([]any)
		if !networkRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", networkRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(networkRef01ListRt0), map[string]any{"id": networkRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func networkBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "network", "NetworkTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read network test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse network test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"network01", "network02", "network03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_NETWORK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_NETWORK_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_NETWORK_ENTID"])
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
