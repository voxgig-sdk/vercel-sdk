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

func TestMarketplaceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Marketplace(nil)
		if ent == nil {
			t.Fatal("expected non-nil MarketplaceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"marketplace": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Marketplace(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Marketplace(nil).Stream("list", nil, nil) {
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
		setup := marketplaceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "marketplace." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_MARKETPLACE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		marketplaceRef01Ent := client.Marketplace(nil)
		marketplaceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "marketplace"}), "marketplace_ref01"))
		marketplaceRef01Data["installation_id"] = setup.idmap["installation01"]
		marketplaceRef01Data["product_id"] = setup.idmap["product01"]
		marketplaceRef01Data["resource_id"] = setup.idmap["resource01"]

		marketplaceRef01DataResult, err := marketplaceRef01Ent.Create(marketplaceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		marketplaceRef01Data = core.ToMapAny(entityData(marketplaceRef01DataResult))
		if marketplaceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if marketplaceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		marketplaceRef01Match := map[string]any{
			"installation_id": setup.idmap["installation01"],
		}

		marketplaceRef01ListResult, err := marketplaceRef01Ent.List(marketplaceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		marketplaceRef01List, marketplaceRef01ListOk := marketplaceRef01ListResult.([]any)
		if !marketplaceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", marketplaceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(marketplaceRef01List), map[string]any{"id": marketplaceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		marketplaceRef01DataUp0Up := map[string]any{
			"id": marketplaceRef01Data["id"],
			"installation_id": setup.idmap["installation_id"],
		}

		marketplaceRef01MarkdefUp0Name := "access_token"
		marketplaceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-marketplace_ref01_%d", setup.now)
		marketplaceRef01DataUp0Up[marketplaceRef01MarkdefUp0Name] = marketplaceRef01MarkdefUp0Value

		marketplaceRef01ResdataUp0Result, err := marketplaceRef01Ent.Update(marketplaceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		marketplaceRef01ResdataUp0 := core.ToMapAny(entityData(marketplaceRef01ResdataUp0Result))
		if marketplaceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if marketplaceRef01ResdataUp0["id"] != marketplaceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if marketplaceRef01ResdataUp0[marketplaceRef01MarkdefUp0Name] != marketplaceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", marketplaceRef01MarkdefUp0Name, marketplaceRef01ResdataUp0[marketplaceRef01MarkdefUp0Name])
		}

		// LOAD
		marketplaceRef01MatchDt0 := map[string]any{
			"id": marketplaceRef01Data["id"],
		}
		marketplaceRef01DataDt0Loaded, err := marketplaceRef01Ent.Load(marketplaceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		marketplaceRef01DataDt0LoadResult := core.ToMapAny(entityData(marketplaceRef01DataDt0Loaded))
		if marketplaceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if marketplaceRef01DataDt0LoadResult["id"] != marketplaceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		marketplaceRef01MatchRm0 := map[string]any{
			"id": marketplaceRef01Data["id"],
		}
		_, err = marketplaceRef01Ent.Remove(marketplaceRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		marketplaceRef01MatchRt0 := map[string]any{
			"installation_id": setup.idmap["installation01"],
		}

		marketplaceRef01ListRt0Result, err := marketplaceRef01Ent.List(marketplaceRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		marketplaceRef01ListRt0, marketplaceRef01ListRt0Ok := marketplaceRef01ListRt0Result.([]any)
		if !marketplaceRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", marketplaceRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(marketplaceRef01ListRt0), map[string]any{"id": marketplaceRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func marketplaceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "marketplace", "MarketplaceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read marketplace test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse marketplace test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"marketplace01", "marketplace02", "marketplace03", "installation01", "installation02", "installation03", "invoice01", "invoice02", "invoice03", "member01", "member02", "member03", "resource01", "resource02", "resource03", "product01", "product02", "product03", "item01", "item02", "item03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_MARKETPLACE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_MARKETPLACE_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_MARKETPLACE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add installation_id alias for update test.
	if idmapResolved["installation_id"] == nil {
		idmapResolved["installation_id"] = idmapResolved["installation01"]
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
