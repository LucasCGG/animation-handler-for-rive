<?php
/**
 * Elementor widget — Animation Handler for Rive
 *
 * @package Animation_Handler_For_Rive
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

use Elementor\Widget_Base;
use WP_Error;

if ( class_exists( 'Elementor\Widget_Base' ) ) {


    class AHFR_Main_Controller extends Widget_Base {
        public function get_name(): string {
            return 'animation_handler_for_rive';
        }

        public function get_title(): string {
            return esc_html__( 'Animation Handler for Rive', 'animation-handler-for-rive' );
        }

        public function get_icon(): string {
            return 'eicon-animation';
        }

        public function get_categories(): array {
            return [ 'general' ];
        }

        protected function _register_controls(): void {
            $this->start_controls_section(
                'section_content',
                [
                    'label' => esc_html__( 'Content', 'animation-handler-for-rive' ),
                ]
            );

            $this->add_control(
                'canvas_id',
                [
                    'label'       => esc_html__( 'Canvas ID', 'animation-handler-for-rive' ),
                    'type'        => \Elementor\Controls_Manager::TEXT,
                    'default'     => 'rive-canvas-{unique_id}', // Placeholder for unique ID.
                    'description' => sprintf( esc_html__( 'ID of the <canvas> element. "%1$s" will be replaced by a unique value if left in place.', 'animation-handler-for-rive' ), '{unique_id}' ),
                ]
            );

            $this->add_control(
                'rive_file',
                [
                    'label'       => esc_html__( 'Select Rive File', 'animation-handler-for-rive' ),
                    'type'        => \Elementor\Controls_Manager::MEDIA,
                    'media_type'  => 'application/octet-stream', //.riv files.
                    'description' => esc_html__( 'Choose the .riv animation file.', 'animation-handler-for-rive' ),
                ]
            );

            $this->add_control(
                'state_machine',
                [
                    'label'       => esc_html__( 'State Machine Name', 'animation-handler-for-rive' ),
                    'type'        => \Elementor\Controls_Manager::TEXT,
                    'default'     => 'State Machine 1',
                ]
            );

            $this->add_control(
                'viewport',
                [
                    'label'       => esc_html__( 'Viewport (CSS Selector)', 'animation-handler-for-rive' ),
                    'type'        => \Elementor\Controls_Manager::TEXT,
                    'placeholder' => 'null',
                    'description' => esc_html__( 'Optional CSS selector for custom viewport. Leave empty or set to "null" to use the browser viewport.', 'animation-handler-for-rive' ),
                ]
            );

            $this->add_control(
                'threshold',
                [
                    'label'       => esc_html__( 'Observer Threshold', 'animation-handler-for-rive' ),
                    'type'        => \Elementor\Controls_Manager::NUMBER,
                    'default'     => 0.7,
                    'step'        => 0.01,
                    'min'         => 0,
                    'max'         => 1,
                    'description' => esc_html__( 'How much of the canvas must be visible before the animation starts (0–1).', 'animation-handler-for-rive' ),
                ]
            );

            $this->add_control(
                'layout_fit',
                [
                    'label'   => esc_html__( 'Layout Fit', 'animation-handler-for-rive' ),
                    'type'    => \Elementor\Controls_Manager::SELECT,
                    'default' => 'contain',
                    'options' => [
                        'contain'   => 'contain',
                        'cover'     => 'cover',
                        'fill'      => 'fill',
                        'fitWidth'  => 'fitWidth',
                        'fitHeight' => 'fitHeight',
                        'none'      => 'none',
                        'scaleDown' => 'scaleDown',
                    ],
                ]
            );

            $this->end_controls_section();
        }

      
        protected function render(): void {
            $settings = $this->get_settings_for_display();

            $canvas_id = empty( $settings['canvas_id'] ) ? '' : (string) $settings['canvas_id'];
            if ( str_contains( $canvas_id, '{unique_id}' ) ) {
                $canvas_id = str_replace( '{unique_id}', wp_unique_id(), $canvas_id );
            }
            $canvas_id = sanitize_html_class( $canvas_id );

            $rive_file_url = ! empty( $settings['rive_file']['url'] ) ? esc_url_raw( $settings['rive_file']['url'] ) : '';
            if ( empty( $rive_file_url ) ) {
                return;
            }

            $state_machine = sanitize_text_field( $settings['state_machine'] ?? '' );

            $viewport_raw = $settings['viewport'] ?? '';
            $viewport     = ( '' === $viewport_raw || 'null' === trim( $viewport_raw ) ) ? null : sanitize_text_field( $viewport_raw );
            $threshold    = isset( $settings['threshold'] ) ? (float) $settings['threshold'] : 0.7;
            $layout_fit   = sanitize_text_field( $settings['layout_fit'] ?? 'contain' );

            printf(
                '<canvas id="%1$s" class="rive-canvas" style="width:100%%;height:100%%;"></canvas>',
                esc_attr( $canvas_id )
            );

            wp_enqueue_script(
                'animation-handler-for-rive',
                plugins_url( 'assets/js/rive-handler.js', __DIR__ ),
                [ 'rive-web-library' ],
                '1.0.0',
                true
            );

            $data = [
                'canvasId'     => $canvas_id,
                'src'          => $rive_file_url,
                'stateMachine' => $state_machine,
                'threshold'    => $threshold,
                'viewport'     => $viewport,
                'layoutFit'    => $layout_fit,
            ];

            wp_add_inline_script(
                'animation-handler-for-rive',
                'window.riveAnimations = window.riveAnimations || []; window.riveAnimations.push(' . wp_json_encode( $data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) . ');',
                'before'
            );
        }
    }
}
