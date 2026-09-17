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

func TestDomainsRegistrarEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DomainsRegistrar(nil)
		if ent == nil {
			t.Fatal("expected non-nil DomainsRegistrarEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := domains_registrarBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "domains_registrar." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_DOMAINS_REGISTRAR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		domainsRegistrarRef01Ent := client.DomainsRegistrar(nil)
		domainsRegistrarRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "domains_registrar"}), "domains_registrar_ref01"))

		domainsRegistrarRef01DataResult, err := domainsRegistrarRef01Ent.Create(domainsRegistrarRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		domainsRegistrarRef01Data = core.ToMapAny(entityData(domainsRegistrarRef01DataResult))
		if domainsRegistrarRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		domainsRegistrarRef01DataUp0Up := map[string]any{
		}

		domainsRegistrarRef01MarkdefUp0Name := "authCode"
		domainsRegistrarRef01MarkdefUp0Value := fmt.Sprintf("Mark01-domains_registrar_ref01_%d", setup.now)
		domainsRegistrarRef01DataUp0Up[domainsRegistrarRef01MarkdefUp0Name] = domainsRegistrarRef01MarkdefUp0Value

		domainsRegistrarRef01ResdataUp0Result, err := domainsRegistrarRef01Ent.Update(domainsRegistrarRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		domainsRegistrarRef01ResdataUp0 := core.ToMapAny(entityData(domainsRegistrarRef01ResdataUp0Result))
		if domainsRegistrarRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if domainsRegistrarRef01ResdataUp0[domainsRegistrarRef01MarkdefUp0Name] != domainsRegistrarRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", domainsRegistrarRef01MarkdefUp0Name, domainsRegistrarRef01ResdataUp0[domainsRegistrarRef01MarkdefUp0Name])
		}

		// LOAD
		domainsRegistrarRef01MatchDt0 := map[string]any{}
		domainsRegistrarRef01DataDt0Loaded, err := domainsRegistrarRef01Ent.Load(domainsRegistrarRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if domainsRegistrarRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func domains_registrarBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "domains_registrar", "DomainsRegistrarTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read domains_registrar test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse domains_registrar test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"domains_registrar01", "domains_registrar02", "domains_registrar03", "domain01", "domain02", "domain03", "order01", "order02", "order03", "tld01", "tld02", "tld03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_DOMAINS_REGISTRAR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_DOMAINS_REGISTRAR_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_DOMAINS_REGISTRAR_ENTID"])
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
