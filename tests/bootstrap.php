<?php
// Load WordPress Test Framework.
$_tests_dir = getenv( 'WP_TESTS_DIR' );

if ( ! $_tests_dir ) {
    $_tests_dir = '/tmp/wordpress-tests-lib';
}

require_once $_tests_dir . '/includes/functions.php';

function manually_load_plugin() {
    require dirname( __FILE__ ) . '/../rive-animation-handler.php';
}

tests_add_filter( 'muplugins_loaded', 'manually_load_plugin' );

require $_tests_dir . '/includes/bootstrap.php';
