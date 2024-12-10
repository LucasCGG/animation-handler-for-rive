<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

use Elementor\Widget_Base;
use WP_Error;

if ( class_exists( 'Elementor\Widget_Base' ) ) {

    class Main_Controller extends Widget_Base {

        public function get_name(): string {
            return 'rive_animation';
        }

        public function get_title(): string {
            return __( 'Rive Animation', 'rive-animation-handler' );
        }

        public function get_icon(): string {
            return 'eicon-animation';
        }

        public function get_categories(): array {
            return [ 'general' ];
        }

        protected function _register_controls() {
            $this->start_controls_section(
                'section_content',
                [
                    'label' => __( 'Content', 'rive-animation-handler' ),
                ]
            );

            $this->add_control(
                'canvas_id',
                [
                    'label'       => __( 'Canvas ID', 'rive-animation-handler' ),
                    'type'        => \Elementor\Controls_Manager::TEXT,
                    'default'     => 'rive-canvas-{unique_id}', // Placeholder for unique ID.
                    'description' => __( 'The ID of the canvas element where the Rive animation will be rendered. A unique ID will be auto-generated if left with "{unique_id}".', 'rive-animation-handler' ),
                ]
            );

            $this->add_control(
                'rive_file',
                [
                    'label'       => __( 'Select Rive File', 'rive-animation-handler' ),
                    'type'        => \Elementor\Controls_Manager::MEDIA,
                    'media_type'  => 'application/octet-stream', // For .riv files.
                    'default'     => [
                        'url' => '',
                    ],
                    'description' => __( 'The Rive file to be used for the animation.', 'rive-animation-handler' ),
                ]
            );

            $this->add_control(
                'state_machine',
                [
                    'label'       => __( 'State Machine Name', 'rive-animation-handler' ),
                    'type'        => \Elementor\Controls_Manager::TEXT,
                    'default'     => 'State Machine 1',
                    'description' => __( 'The name of the state machine to control the animation.', 'rive-animation-handler' ),
                ]
            );

            $this->add_control(
                'viewport',
                [
                    'label'       => __( 'Viewport', 'rive-animation-handler' ),
                    'type'        => \Elementor\Controls_Manager::TEXT,
                    'default'     => 'null',
                    'description' => __( 'The viewport object.', 'rive-animation-handler' ),
                ]
            );

            $this->add_control(
                'threshold',
                [
                    'label'       => __( 'Observer Threshold', 'rive-animation-handler' ),
                    'type'        => \Elementor\Controls_Manager::NUMBER,
                    'default'     => 0.7,
                    'step'        => 0.01,
                    'min'         => 0,
                    'max'         => 1,
                    'description' => __( 'The threshold value for the IntersectionObserver. This parameter determines how much of the canvas element must be visible in the viewport before the animation starts. A value of `0.0` means the animation will start as soon as any part of the element is visible, while a value of `1.0` means the entire element must be visible', 'rive-animation-handler' ),
                ]
            );

            $this->add_control(
                'layout_fit',
                [
                    'label'       => __( 'Layout Fit', 'rive-animation-handler' ),
                    'type'        => \Elementor\Controls_Manager::SELECT,
                    'default'     => 'contain',
                    'options'     => [
                        'contain'   => 'Contain',
                        'cover'     => 'Cover',
                        'fill'      => 'Fill',
                        'fitWidth'  => 'Fit Width',
                        'fitHeight' => 'Fit Height',
                        'none'      => 'None',
                        'scaleDown' => 'Scale Down',
                    ],
                    'description' => __( 'The layout fit value for the Rive animation.', 'rive-animation-handler' ),
                ]
            );
            $this->end_controls_section();
        }

        protected function render() {
            $settings = $this->get_settings_for_display();

            // Get and sanitize settings
            $canvas_id     = esc_attr( $settings['canvas_id'] );
            $rive_file_url = esc_url( $settings['rive_file']['url'] );
            $state_machine = esc_attr( $settings['state_machine'] );
            $viewport      = esc_attr( $settings['viewport'] );
            $threshold     = floatval( $settings['threshold'] );
            $layout_fit    = esc_attr( $settings['layout_fit'] );

            // Handle placeholder replacement
            if ( strpos( $canvas_id, '{unique_id}' ) !== false ) {
                $canvas_id = str_replace( '{unique_id}', uniqid(), $canvas_id );
            }

            // Ensure a Rive file is selected before rendering
            if ( empty( $rive_file_url ) ) {
                return new WP_Error( 'missing_url', __( 'The Rive file URL is required.', 'rive-animation-handler' ) );
            }

            // Render the canvas element
            echo "<canvas id='{$canvas_id}' class='rive-canvas' style='width: 100%; height: 100%;'></canvas>";

            // Enqueue necessary JavaScript
            wp_enqueue_script( 'rive-animation-handler', plugins_url( 'assets/js/rive-handler.js', __FILE__ ), [], '1.0.0', true );

            // Inline script to initialize the Rive animation
            $inline_script = "
                document.addEventListener('DOMContentLoaded', () => {
                    document.querySelectorAll('[id*=\"rive-canvas-{unique_id}\"]').forEach((element) => {
                        element.id = 'rive-canvas-' + Math.random().toString(36).substr(2, 9);
                    });

                    const canvasId = '{$canvas_id}';
                    const src = '{$rive_file_url}';
                    const stateMachine = '{$state_machine}';
                    const threshold = {$threshold};
                    const viewport = {$viewport};

                    if (typeof observeRiveAnimation !== 'undefined') {
                        observeRiveAnimation(
                            canvasId,
                            {
                                src: src,
                                stateMachine: stateMachine,
                            },
                            viewport,
                            threshold
                        );
                    } else {
                        console.error('observeRiveAnimation is not defined. Ensure the external script is loaded.');
                    }
                });
            ";

            wp_add_inline_script( 'rive-animation-handler', $inline_script );
        }
    }
}
