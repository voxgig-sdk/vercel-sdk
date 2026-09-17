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

func TestDnsEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Dns(nil)
		if ent == nil {
			t.Fatal("expected non-nil DnsEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := dnsBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dns." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_DNS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dnsRef01Ent := client.Dns(nil)
		dnsRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dns"}), "dns_ref01"))
		dnsRef01Data["domain_id"] = setup.idmap["domain01"]

		dnsRef01DataResult, err := dnsRef01Ent.Create(dnsRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dnsRef01Data = core.ToMapAny(entityData(dnsRef01DataResult))
		if dnsRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dnsRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		dnsRef01DataUp0Up := map[string]any{
			"id": dnsRef01Data["id"],
		}

		dnsRef01MarkdefUp0Name := "comment"
		dnsRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dns_ref01_%d", setup.now)
		dnsRef01DataUp0Up[dnsRef01MarkdefUp0Name] = dnsRef01MarkdefUp0Value

		dnsRef01ResdataUp0Result, err := dnsRef01Ent.Update(dnsRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dnsRef01ResdataUp0 := core.ToMapAny(entityData(dnsRef01ResdataUp0Result))
		if dnsRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dnsRef01ResdataUp0["id"] != dnsRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dnsRef01ResdataUp0[dnsRef01MarkdefUp0Name] != dnsRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dnsRef01MarkdefUp0Name, dnsRef01ResdataUp0[dnsRef01MarkdefUp0Name])
		}

		// LOAD
		dnsRef01MatchDt0 := map[string]any{
			"id": dnsRef01Data["id"],
		}
		dnsRef01DataDt0Loaded, err := dnsRef01Ent.Load(dnsRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dnsRef01DataDt0LoadResult := core.ToMapAny(entityData(dnsRef01DataDt0Loaded))
		if dnsRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dnsRef01DataDt0LoadResult["id"] != dnsRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dnsRef01MatchRm0 := map[string]any{
			"id": dnsRef01Data["id"],
		}
		_, err = dnsRef01Ent.Remove(dnsRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func dnsBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dns", "DnsTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dns test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dns test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dns01", "dns02", "dns03", "domain01", "domain02", "domain03", "record01", "record02", "record03"},
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
	entidEnvRaw := os.Getenv("VERCEL_TEST_DNS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VERCEL_TEST_DNS_ENTID": idmap,
		"VERCEL_TEST_LIVE":      "FALSE",
		"VERCEL_TEST_EXPLAIN":   "FALSE",
		"VERCEL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VERCEL_TEST_DNS_ENTID"])
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
