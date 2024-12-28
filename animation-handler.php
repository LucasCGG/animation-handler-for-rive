<?php
/**
 * Plugin Name: Animation Handler for Rive
 * Description: A plugin to handle Rive animations to start on enter viewport with Elementor
 * Version: 1.0.0
 * Author: Lucas Colaco
 * GitHub: https://github.com/LucasCGG/animation-handler-for-rive
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define plugin constants.
define( 'RIVE_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

function rive_plugin_enqueue_scripts() {
    // Enqueue Rive Web Library from CDN
    wp_enqueue_script('rive-web-library', 'https://unpkg.com/@rive-app/canvas@latest', array(), null, true);

    // Enqueue the custom Rive handler script
    wp_enqueue_script('animation-handler-for-rive', plugins_url('assets/js/animation-handler.js', __FILE__), [], '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'rive_plugin_enqueue_scripts');

// Allow .riv files to be uploaded.
function rive_allow_riv_uploads( $mime_types ) {
    $mime_types['riv'] = 'application/octet-stream';
    return $mime_types;
}
add_filter( 'upload_mimes', 'rive_allow_riv_uploads' );

function validate_rive_url( $url ) {
    if ( filter_var( $url, FILTER_VALIDATE_URL ) && pathinfo( $url, PATHINFO_EXTENSION ) === 'riv' ) {
        return $url;
    }
    return false;
}

// Check if Elementor is active and loaded.
function rive_check_elementor_loaded() {
    if ( ! did_action( 'elementor/loaded' ) ) {
        add_action( 'admin_notices', 'rive_elementor_not_loaded_notice' );
        return false;
    }
    return true;
}

// Display admin notice if Elementor is not active.
function rive_elementor_not_loaded_notice() {
    ?>
    <div class="notice notice-error">
        <p><?php esc_html_e( 'Animation Handler requires Elementor to be installed and activated.', 'animation-handler-for-rive' ); ?></p>
    </div>
    <?php
}

// Register the Elementor widget.
function rive_register_elementor_widget() {
    if ( rive_check_elementor_loaded() ) {
        // Include the widget class.
        require_once RIVE_PLUGIN_PATH . 'includes/class-main-controller.php';

        // Register the widget.
        \Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Main_Controller() );
    }
}
add_action( 'elementor/widgets/widgets_registered', 'rive_register_elementor_widget' );
