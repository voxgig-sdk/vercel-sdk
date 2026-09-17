<?php
declare(strict_types=1);

// Dns entity test

require_once __DIR__ . '/../vercel_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DnsEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = VercelSDK::test(null, null);
        $ent = $testsdk->Dns(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = dns_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "dns." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_DNS_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $dns_ref01_ent = $client->Dns(null);
        $dns_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.dns"), "dns_ref01"));
        $dns_ref01_data["domain_id"] = $setup["idmap"]["domain01"];

        $dns_ref01_data_result = $dns_ref01_ent->create($dns_ref01_data, null);
        $dns_ref01_data = Helpers::to_map(is_object($dns_ref01_data_result) && method_exists($dns_ref01_data_result, 'data_get') ? $dns_ref01_data_result->data_get() : $dns_ref01_data_result);
        $this->assertNotNull($dns_ref01_data);
        $this->assertNotNull($dns_ref01_data["id"]);

        // UPDATE
        $dns_ref01_data_up0_up = [
            "id" => $dns_ref01_data["id"],
        ];

        $dns_ref01_markdef_up0_name = "comment";
        $dns_ref01_markdef_up0_value = "Mark01-dns_ref01_" . $setup["now"];
        $dns_ref01_data_up0_up[$dns_ref01_markdef_up0_name] = $dns_ref01_markdef_up0_value;

        $dns_ref01_resdata_up0_result = $dns_ref01_ent->update($dns_ref01_data_up0_up, null);
        $dns_ref01_resdata_up0 = Helpers::to_map(is_object($dns_ref01_resdata_up0_result) && method_exists($dns_ref01_resdata_up0_result, 'data_get') ? $dns_ref01_resdata_up0_result->data_get() : $dns_ref01_resdata_up0_result);
        $this->assertNotNull($dns_ref01_resdata_up0);
        $this->assertEquals($dns_ref01_resdata_up0["id"], $dns_ref01_data_up0_up["id"]);
        $this->assertEquals($dns_ref01_resdata_up0[$dns_ref01_markdef_up0_name], $dns_ref01_markdef_up0_value);

        // LOAD
        $dns_ref01_match_dt0 = [
            "id" => $dns_ref01_data["id"],
        ];
        $dns_ref01_data_dt0_loaded = $dns_ref01_ent->load($dns_ref01_match_dt0, null);
        $dns_ref01_data_dt0_load_result = Helpers::to_map(is_object($dns_ref01_data_dt0_loaded) && method_exists($dns_ref01_data_dt0_loaded, 'data_get') ? $dns_ref01_data_dt0_loaded->data_get() : $dns_ref01_data_dt0_loaded);
        $this->assertNotNull($dns_ref01_data_dt0_load_result);
        $this->assertEquals($dns_ref01_data_dt0_load_result["id"], $dns_ref01_data["id"]);

        // REMOVE
        $dns_ref01_match_rm0 = [
            "id" => $dns_ref01_data["id"],
        ];
        $dns_ref01_ent->remove($dns_ref01_match_rm0, null);

    }
}

function dns_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/dns/DnsTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = VercelSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["dns01", "dns02", "dns03", "domain01", "domain02", "domain03", "record01", "record02", "record03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("VERCEL_TEST_DNS_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "VERCEL_TEST_DNS_ENTID" => $idmap,
        "VERCEL_TEST_LIVE" => "FALSE",
        "VERCEL_TEST_EXPLAIN" => "FALSE",
        "VERCEL_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["VERCEL_TEST_DNS_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["VERCEL_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["VERCEL_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new VercelSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["VERCEL_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["VERCEL_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
