<?php
declare(strict_types=1);

// FlagsSdkKeyWithSecret entity test

require_once __DIR__ . '/../vercel_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class FlagsSdkKeyWithSecretEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = VercelSDK::test(null, null);
        $ent = $testsdk->FlagsSdkKeyWithSecret(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = flags_sdk_key_with_secret_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "flags_sdk_key_with_secret." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $flags_sdk_key_with_secret_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.flags_sdk_key_with_secret")));
        $flags_sdk_key_with_secret_ref01_data = null;
        if (count($flags_sdk_key_with_secret_ref01_data_raw) > 0) {
            $flags_sdk_key_with_secret_ref01_data = Helpers::to_map($flags_sdk_key_with_secret_ref01_data_raw[0][1]);
        }

        // UPDATE
        $flags_sdk_key_with_secret_ref01_ent = $client->FlagsSdkKeyWithSecret(null);
        $flags_sdk_key_with_secret_ref01_data_up0_up = [
        ];

        $flags_sdk_key_with_secret_ref01_markdef_up0_name = "createdBy";
        $flags_sdk_key_with_secret_ref01_markdef_up0_value = "Mark01-flags_sdk_key_with_secret_ref01_" . $setup["now"];
        $flags_sdk_key_with_secret_ref01_data_up0_up[$flags_sdk_key_with_secret_ref01_markdef_up0_name] = $flags_sdk_key_with_secret_ref01_markdef_up0_value;

        $flags_sdk_key_with_secret_ref01_resdata_up0_result = $flags_sdk_key_with_secret_ref01_ent->update($flags_sdk_key_with_secret_ref01_data_up0_up, null);
        $flags_sdk_key_with_secret_ref01_resdata_up0 = Helpers::to_map(is_object($flags_sdk_key_with_secret_ref01_resdata_up0_result) && method_exists($flags_sdk_key_with_secret_ref01_resdata_up0_result, 'data_get') ? $flags_sdk_key_with_secret_ref01_resdata_up0_result->data_get() : $flags_sdk_key_with_secret_ref01_resdata_up0_result);
        $this->assertNotNull($flags_sdk_key_with_secret_ref01_resdata_up0);
        $this->assertEquals($flags_sdk_key_with_secret_ref01_resdata_up0[$flags_sdk_key_with_secret_ref01_markdef_up0_name], $flags_sdk_key_with_secret_ref01_markdef_up0_value);

    }
}

function flags_sdk_key_with_secret_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/flags_sdk_key_with_secret/FlagsSdkKeyWithSecretTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = VercelSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["flags_sdk_key_with_secret01", "flags_sdk_key_with_secret02", "flags_sdk_key_with_secret03", "project01", "project02", "project03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID" => $idmap,
        "VERCEL_TEST_LIVE" => "FALSE",
        "VERCEL_TEST_EXPLAIN" => "FALSE",
        "VERCEL_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID"]);
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
