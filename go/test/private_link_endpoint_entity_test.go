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

func TestPrivateLinkEndpointEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PrivateLinkEndpoint(nil)
		if ent == nil {
			t.Fatal("expected non-nil PrivateLinkEndpointEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"private_link_endpoint": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PrivateLinkEndpoint(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.PrivateLinkEndpoint(nil).Stream("list", nil, nil) {
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
		setup := private_link_endpointBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "private_link_endpoint." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_PRIVATE_LINK_ENDPOINT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		privateLinkEndpointRef01Ent := client.PrivateLinkEndpoint(nil)
		privateLinkEndpointRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "private_link_endpoint"}), "private_link_endpoint_ref01"))

		privateLinkEndpointRef01DataResult, err := privateLinkEndpointRef01Ent.Create(privateLinkEndpointRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		privateLinkEndpointRef01Data = core.ToMapAny(entityData(privateLinkEndpointRef01DataResult))
		if privateLinkEndpointRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if privateLinkEndpointRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		privateLinkEndpointRef01Match := map[string]any{}

		privateLinkEndpointRef01ListResult, err := privateLinkEndpointRef01Ent.List(privateLinkEndpointRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		privateLinkEndpointRef01List, privateLinkEndpointRef01ListOk := privateLinkEndpointRef01ListResult.([]any)
		if !privateLinkEndpointRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", privateLinkEndpointRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(privateLinkEndpointRef01List), map[string]any{"id": privateLinkEndpointRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		privateLinkEndpointRef01DataUp0Up := map[string]any{
			"id": privateLinkEndpointRef01Data["id"],
		}

		privateLinkEndpointRef01MarkdefUp0Name := "awsServiceName"
		privateLinkEndpointRef01MarkdefUp0Value := fmt.Sprintf("Mark01-private_link_endpoint_ref01_%d", setup.now)
		privateLinkEndpointRef01DataUp0Up[privateLinkEndpointRef01MarkdefUp0Name] = privateLinkEndpointRef01MarkdefUp0Value

		privateLinkEndpointRef01ResdataUp0Result, err := privateLinkEndpointRef01Ent.Update(privateLinkEndpointRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		privateLinkEndpointRef01ResdataUp0 := core.ToMapAny(entityData(privateLinkEndpointRef01ResdataUp0Result))
		if privateLinkEndpointRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if privateLinkEndpointRef01ResdataUp0["id"] != privateLinkEndpointRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if privateLinkEndpointRef01ResdataUp0[privateLinkEndpointRef01MarkdefUp0Name] != privateLinkEndpointRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", privateLinkEndpointRef01MarkdefUp0Name, privateLinkEndpointRef01ResdataUp0[privateLinkEndpointRef01MarkdefUp0Name])
		}

		// LOAD
		privateLinkEndpointRef01MatchDt0 := map[string]any{
			"id": privateLinkEndpointRef01Data["id"],
		}
		privateLinkEndpointRef01DataDt0Loaded, err := privateLinkEndpointRef01Ent.Load(privateLinkEndpointRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		privateLinkEndpointRef01DataDt0LoadResult := core.ToMapAny(entityData(privateLinkEndpointRef01DataDt0Loaded))
		if privateLinkEndpointRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if privateLinkEndpointRef01DataDt0LoadResult["id"] != privateLinkEndpointRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func private_link_endpointBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "private_link_endpoint", "PrivateLinkEndpointTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read private_link_endpoint test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse private_link_endpoint test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"private_link_endpoint01", "private_link_endpoint02", "private_link_endpoint03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_PRIVATE_LINK_ENDPOINT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_PRIVATE_LINK_ENDPOINT_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_PRIVATE_LINK_ENDPOINT_ENTID"])
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
