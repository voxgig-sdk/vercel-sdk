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

func TestVcrEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Vcr(nil)
		if ent == nil {
			t.Fatal("expected non-nil VcrEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"vcr": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Vcr(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Vcr(nil).Stream("list", nil, nil) {
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
		setup := vcrBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "vcr." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_VCR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		vcrRef01Ent := client.Vcr(nil)
		vcrRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "vcr"}), "vcr_ref01"))
		vcrRef01Data["id_or_name"] = setup.idmap["id_or_name01"]
		vcrRef01Data["project_slug"] = setup.idmap["project_slug01"]
		vcrRef01Data["repository_id"] = setup.idmap["repository01"]
		vcrRef01Data["repository_name"] = setup.idmap["repository_name01"]
		vcrRef01Data["team_slug"] = setup.idmap["team_slug01"]

		vcrRef01DataResult, err := vcrRef01Ent.Create(vcrRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		vcrRef01Data = core.ToMapAny(entityData(vcrRef01DataResult))
		if vcrRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if vcrRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		vcrRef01Match := map[string]any{
			"project_slug": setup.idmap["project_slug01"],
			"repository_name": setup.idmap["repository_name01"],
			"team_slug": setup.idmap["team_slug01"],
		}

		vcrRef01ListResult, err := vcrRef01Ent.List(vcrRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		vcrRef01List, vcrRef01ListOk := vcrRef01ListResult.([]any)
		if !vcrRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", vcrRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(vcrRef01List), map[string]any{"id": vcrRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		vcrRef01DataUp0Up := map[string]any{
			"id": vcrRef01Data["id"],
			"project_slug": setup.idmap["project_slug"],
			"repository_name": setup.idmap["repository_name"],
			"team_slug": setup.idmap["team_slug"],
		}

		vcrRef01MarkdefUp0Name := "arch"
		vcrRef01MarkdefUp0Value := fmt.Sprintf("Mark01-vcr_ref01_%d", setup.now)
		vcrRef01DataUp0Up[vcrRef01MarkdefUp0Name] = vcrRef01MarkdefUp0Value

		vcrRef01ResdataUp0Result, err := vcrRef01Ent.Update(vcrRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		vcrRef01ResdataUp0 := core.ToMapAny(entityData(vcrRef01ResdataUp0Result))
		if vcrRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if vcrRef01ResdataUp0["id"] != vcrRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if vcrRef01ResdataUp0[vcrRef01MarkdefUp0Name] != vcrRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", vcrRef01MarkdefUp0Name, vcrRef01ResdataUp0[vcrRef01MarkdefUp0Name])
		}

		// LOAD
		vcrRef01MatchDt0 := map[string]any{
			"id": vcrRef01Data["id"],
		}
		vcrRef01DataDt0Loaded, err := vcrRef01Ent.Load(vcrRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		vcrRef01DataDt0LoadResult := core.ToMapAny(entityData(vcrRef01DataDt0Loaded))
		if vcrRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if vcrRef01DataDt0LoadResult["id"] != vcrRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		vcrRef01MatchRm0 := map[string]any{
			"id": vcrRef01Data["id"],
		}
		_, err = vcrRef01Ent.Remove(vcrRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		vcrRef01MatchRt0 := map[string]any{
			"project_slug": setup.idmap["project_slug01"],
			"repository_name": setup.idmap["repository_name01"],
			"team_slug": setup.idmap["team_slug01"],
		}

		vcrRef01ListRt0Result, err := vcrRef01Ent.List(vcrRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		vcrRef01ListRt0, vcrRef01ListRt0Ok := vcrRef01ListRt0Result.([]any)
		if !vcrRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", vcrRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(vcrRef01ListRt0), map[string]any{"id": vcrRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func vcrBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "vcr", "VcrTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read vcr test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse vcr test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"vcr01", "vcr02", "vcr03", "repository01", "repository02", "repository03", "v201", "v202", "v203", "image01", "image02", "image03", "tag01", "tag02", "tag03", "upload01", "upload02", "upload03", "blob01", "blob02", "blob03", "manifest01", "manifest02", "manifest03", "id_or_name01", "project_slug01", "repository_name01", "team_slug01"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_VCR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_VCR_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_VCR_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add project_slug alias for update test.
	if idmapResolved["project_slug"] == nil {
		idmapResolved["project_slug"] = idmapResolved["project_slug01"]
	}
	// Add repository_name alias for update test.
	if idmapResolved["repository_name"] == nil {
		idmapResolved["repository_name"] = idmapResolved["repository_name01"]
	}
	// Add team_slug alias for update test.
	if idmapResolved["team_slug"] == nil {
		idmapResolved["team_slug"] = idmapResolved["team_slug01"]
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
