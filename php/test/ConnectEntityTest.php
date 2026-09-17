<?php
declare(strict_types=1);

// Connect entity test

require_once __DIR__ . '/../vercel_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ConnectEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = VercelSDK::test(null, null);
        $ent = $testsdk->Connect(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = connect_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "connect." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_CONNECT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $connect_ref01_ent = $client->Connect(null);
        $connect_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.connect"), "connect_ref01"));
        $connect_ref01_data["connector"] = $setup["idmap"]["connector01"];
        $connect_ref01_data["connector_id"] = $setup["idmap"]["connector01"];

        $connect_ref01_data_result = $connect_ref01_ent->create($connect_ref01_data, null);
        $connect_ref01_data = Helpers::to_map(is_object($connect_ref01_data_result) && method_exists($connect_ref01_data_result, 'data_get') ? $connect_ref01_data_result->data_get() : $connect_ref01_data_result);
        $this->assertNotNull($connect_ref01_data);
        $this->assertNotNull($connect_ref01_data["id"]);

        // REMOVE
        $connect_ref01_match_rm0 = [
            "id" => $connect_ref01_data["id"],
        ];
        $connect_ref01_ent->remove($connect_ref01_match_rm0, null);

    }
}

function connect_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/connect/ConnectTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = VercelSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["connect01", "connect02", "connect03", "authorize01", "authorize02", "authorize03", "connector01", "connector02", "connector03", "token01", "token02", "token03", "project01", "project02", "project03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("VERCEL_TEST_CONNECT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "VERCEL_TEST_CONNECT_ENTID" => $idmap,
        "VERCEL_TEST_LIVE" => "FALSE",
        "VERCEL_TEST_EXPLAIN" => "FALSE",
        "VERCEL_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["VERCEL_TEST_CONNECT_ENTID"]);
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
