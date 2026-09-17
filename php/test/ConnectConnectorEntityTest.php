<?php
declare(strict_types=1);

// ConnectConnector entity test

require_once __DIR__ . '/../vercel_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ConnectConnectorEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = VercelSDK::test(null, null);
        $ent = $testsdk->ConnectConnector(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = connect_connector_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "connect_connector." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_CONNECT_CONNECTOR_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $connect_connector_ref01_ent = $client->ConnectConnector(null);
        $connect_connector_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.connect_connector"), "connect_connector_ref01"));

        $connect_connector_ref01_data_result = $connect_connector_ref01_ent->create($connect_connector_ref01_data, null);
        $connect_connector_ref01_data = Helpers::to_map(is_object($connect_connector_ref01_data_result) && method_exists($connect_connector_ref01_data_result, 'data_get') ? $connect_connector_ref01_data_result->data_get() : $connect_connector_ref01_data_result);
        $this->assertNotNull($connect_connector_ref01_data);
        $this->assertNotNull($connect_connector_ref01_data["id"]);

        // UPDATE
        $connect_connector_ref01_data_up0_up = [
            "id" => $connect_connector_ref01_data["id"],
        ];

        $connect_connector_ref01_markdef_up0_name = "accentColor";
        $connect_connector_ref01_markdef_up0_value = "Mark01-connect_connector_ref01_" . $setup["now"];
        $connect_connector_ref01_data_up0_up[$connect_connector_ref01_markdef_up0_name] = $connect_connector_ref01_markdef_up0_value;

        $connect_connector_ref01_resdata_up0_result = $connect_connector_ref01_ent->update($connect_connector_ref01_data_up0_up, null);
        $connect_connector_ref01_resdata_up0 = Helpers::to_map(is_object($connect_connector_ref01_resdata_up0_result) && method_exists($connect_connector_ref01_resdata_up0_result, 'data_get') ? $connect_connector_ref01_resdata_up0_result->data_get() : $connect_connector_ref01_resdata_up0_result);
        $this->assertNotNull($connect_connector_ref01_resdata_up0);
        $this->assertEquals($connect_connector_ref01_resdata_up0["id"], $connect_connector_ref01_data_up0_up["id"]);
        $this->assertEquals($connect_connector_ref01_resdata_up0[$connect_connector_ref01_markdef_up0_name], $connect_connector_ref01_markdef_up0_value);

        // LOAD
        $connect_connector_ref01_match_dt0 = [
            "id" => $connect_connector_ref01_data["id"],
        ];
        $connect_connector_ref01_data_dt0_loaded = $connect_connector_ref01_ent->load($connect_connector_ref01_match_dt0, null);
        $connect_connector_ref01_data_dt0_load_result = Helpers::to_map(is_object($connect_connector_ref01_data_dt0_loaded) && method_exists($connect_connector_ref01_data_dt0_loaded, 'data_get') ? $connect_connector_ref01_data_dt0_loaded->data_get() : $connect_connector_ref01_data_dt0_loaded);
        $this->assertNotNull($connect_connector_ref01_data_dt0_load_result);
        $this->assertEquals($connect_connector_ref01_data_dt0_load_result["id"], $connect_connector_ref01_data["id"]);

    }
}

function connect_connector_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/connect_connector/ConnectConnectorTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = VercelSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["connect_connector01", "connect_connector02", "connect_connector03", "connector01", "connector02", "connector03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("VERCEL_TEST_CONNECT_CONNECTOR_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "VERCEL_TEST_CONNECT_CONNECTOR_ENTID" => $idmap,
        "VERCEL_TEST_LIVE" => "FALSE",
        "VERCEL_TEST_EXPLAIN" => "FALSE",
        "VERCEL_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["VERCEL_TEST_CONNECT_CONNECTOR_ENTID"]);
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
