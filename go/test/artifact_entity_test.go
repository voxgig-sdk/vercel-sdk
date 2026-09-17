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

func TestArtifactEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Artifact(nil)
		if ent == nil {
			t.Fatal("expected non-nil ArtifactEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := artifactBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "artifact." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_ARTIFACT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		artifactRef01Ent := client.Artifact(nil)
		artifactRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "artifact"}), "artifact_ref01"))

		artifactRef01DataResult, err := artifactRef01Ent.Create(artifactRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		artifactRef01Data = core.ToMapAny(entityData(artifactRef01DataResult))
		if artifactRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if artifactRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		artifactRef01DataUp0Up := map[string]any{
			"id": artifactRef01Data["id"],
		}

		artifactRef01ResdataUp0Result, err := artifactRef01Ent.Update(artifactRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		artifactRef01ResdataUp0 := core.ToMapAny(entityData(artifactRef01ResdataUp0Result))
		if artifactRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if artifactRef01ResdataUp0["id"] != artifactRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		artifactRef01MatchDt0 := map[string]any{
			"id": artifactRef01Data["id"],
		}
		artifactRef01DataDt0Loaded, err := artifactRef01Ent.Load(artifactRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		artifactRef01DataDt0LoadResult := core.ToMapAny(entityData(artifactRef01DataDt0Loaded))
		if artifactRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if artifactRef01DataDt0LoadResult["id"] != artifactRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		artifactRef01MatchRm0 := map[string]any{
			"id": artifactRef01Data["id"],
		}
		_, err = artifactRef01Ent.Remove(artifactRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func artifactBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "artifact", "ArtifactTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read artifact test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse artifact test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"artifact01", "artifact02", "artifact03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_ARTIFACT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_ARTIFACT_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_ARTIFACT_ENTID"])
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
