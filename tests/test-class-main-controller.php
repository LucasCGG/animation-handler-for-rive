<?php
use PHPUnit\Framework\TestCase;

class Test_Main_Controller extends TestCase {
    public function test_plugin_loaded() {
        $this->assertTrue(defined('RIVE_PLUGIN_VERSION'), 'The plugin version constant should be defined.');
    }

    public function test_enqueue_scripts() {
        // Simulate script enqueue and ensure correct assets are loaded.
        do_action('wp_enqueue_scripts');
        $this->assertTrue(wp_script_is('rive-web-library', 'enqueued'), 'Rive web library should be enqueued.');
        $this->assertTrue(wp_script_is('rive-handler', 'enqueued'), 'Rive handler script should be enqueued.');
        $this->assertTrue(wp_script_is('rive-js', 'enqueued'), 'Rive JS script should be enqueued.');
    }

    public function test_validate_rive_url() {
        $valid_url = 'https://example.com/animation.riv';
        $invalid_url = 'https://example.com/animation.png';

        $this->assertEquals($valid_url, validate_rive_url($valid_url), 'Valid Rive URL should pass validation.');
        $this->assertFalse(validate_rive_url($invalid_url), 'Invalid Rive URL should fail validation.');
    }

    public function test_elementor_dependency() {
        $this->assertFalse(rive_check_elementor_loaded(), 'Elementor should not be loaded.');
        // Simulate admin notice action
        ob_start();
        do_action('admin_notices');
        $output = ob_get_clean();
        $this->assertStringContainsString('Rive Animation Handler requires Elementor to be installed and activated.', $output, 'Admin notice should be displayed if Elementor is not active.');
    }
}

