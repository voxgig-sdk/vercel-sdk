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

func TestFlagsSdkKeyWithSecretEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.FlagsSdkKeyWithSecret(nil)
		if ent == nil {
			t.Fatal("expected non-nil FlagsSdkKeyWithSecretEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := flags_sdk_key_with_secretBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "flags_sdk_key_with_secret." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		flagsSdkKeyWithSecretRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.flags_sdk_key_with_secret")))
		var flagsSdkKeyWithSecretRef01Data map[string]any
		if len(flagsSdkKeyWithSecretRef01DataRaw) > 0 {
			flagsSdkKeyWithSecretRef01Data = core.ToMapAny(flagsSdkKeyWithSecretRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = flagsSdkKeyWithSecretRef01Data

		// UPDATE
		flagsSdkKeyWithSecretRef01Ent := client.FlagsSdkKeyWithSecret(nil)
		flagsSdkKeyWithSecretRef01DataUp0Up := map[string]any{
		}

		flagsSdkKeyWithSecretRef01MarkdefUp0Name := "createdBy"
		flagsSdkKeyWithSecretRef01MarkdefUp0Value := fmt.Sprintf("Mark01-flags_sdk_key_with_secret_ref01_%d", setup.now)
		flagsSdkKeyWithSecretRef01DataUp0Up[flagsSdkKeyWithSecretRef01MarkdefUp0Name] = flagsSdkKeyWithSecretRef01MarkdefUp0Value

		flagsSdkKeyWithSecretRef01ResdataUp0Result, err := flagsSdkKeyWithSecretRef01Ent.Update(flagsSdkKeyWithSecretRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		flagsSdkKeyWithSecretRef01ResdataUp0 := core.ToMapAny(entityData(flagsSdkKeyWithSecretRef01ResdataUp0Result))
		if flagsSdkKeyWithSecretRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if flagsSdkKeyWithSecretRef01ResdataUp0[flagsSdkKeyWithSecretRef01MarkdefUp0Name] != flagsSdkKeyWithSecretRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", flagsSdkKeyWithSecretRef01MarkdefUp0Name, flagsSdkKeyWithSecretRef01ResdataUp0[flagsSdkKeyWithSecretRef01MarkdefUp0Name])
		}

	})
}

func flags_sdk_key_with_secretBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "flags_sdk_key_with_secret", "FlagsSdkKeyWithSecretTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read flags_sdk_key_with_secret test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse flags_sdk_key_with_secret test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"flags_sdk_key_with_secret01", "flags_sdk_key_with_secret02", "flags_sdk_key_with_secret03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID"])
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
