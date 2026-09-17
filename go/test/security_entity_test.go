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

func TestSecurityEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Security(nil)
		if ent == nil {
			t.Fatal("expected non-nil SecurityEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"security": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Security(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Security(nil).Stream("list", nil, nil) {
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
		setup := securityBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "security." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_SECURITY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		securityRef01Ent := client.Security(nil)
		securityRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "security"}), "security_ref01"))
		securityRef01Data["config_version"] = setup.idmap["config_version01"]

		securityRef01DataResult, err := securityRef01Ent.Create(securityRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		securityRef01Data = core.ToMapAny(entityData(securityRef01DataResult))
		if securityRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if securityRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		securityRef01Match := map[string]any{}

		securityRef01ListResult, err := securityRef01Ent.List(securityRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		securityRef01List, securityRef01ListOk := securityRef01ListResult.([]any)
		if !securityRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", securityRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(securityRef01List), map[string]any{"id": securityRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		securityRef01DataUp0Up := map[string]any{
			"id": securityRef01Data["id"],
		}

		securityRef01MarkdefUp0Name := "Action"
		securityRef01MarkdefUp0Value := fmt.Sprintf("Mark01-security_ref01_%d", setup.now)
		securityRef01DataUp0Up[securityRef01MarkdefUp0Name] = securityRef01MarkdefUp0Value

		securityRef01ResdataUp0Result, err := securityRef01Ent.Update(securityRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		securityRef01ResdataUp0 := core.ToMapAny(entityData(securityRef01ResdataUp0Result))
		if securityRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if securityRef01ResdataUp0["id"] != securityRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if securityRef01ResdataUp0[securityRef01MarkdefUp0Name] != securityRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", securityRef01MarkdefUp0Name, securityRef01ResdataUp0[securityRef01MarkdefUp0Name])
		}

		// LOAD
		securityRef01MatchDt0 := map[string]any{
			"id": securityRef01Data["id"],
		}
		securityRef01DataDt0Loaded, err := securityRef01Ent.Load(securityRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		securityRef01DataDt0LoadResult := core.ToMapAny(entityData(securityRef01DataDt0Loaded))
		if securityRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if securityRef01DataDt0LoadResult["id"] != securityRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		securityRef01MatchRm0 := map[string]any{
			"id": securityRef01Data["id"],
		}
		_, err = securityRef01Ent.Remove(securityRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		securityRef01MatchRt0 := map[string]any{}

		securityRef01ListRt0Result, err := securityRef01Ent.List(securityRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		securityRef01ListRt0, securityRef01ListRt0Ok := securityRef01ListRt0Result.([]any)
		if !securityRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", securityRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(securityRef01ListRt0), map[string]any{"id": securityRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func securityBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "security", "SecurityTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read security test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse security test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"security01", "security02", "security03", "config01", "config02", "config03", "config_version01"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_SECURITY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_SECURITY_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_SECURITY_ENTID"])
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
