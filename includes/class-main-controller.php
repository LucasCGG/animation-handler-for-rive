<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

if ( class_exists( 'Elementor\Widget_Base' ) ) {

    class Main_Controller extends \Elementor\Widget_Base {

        public function get_name() {
            return 'rive_animation';
        }

        public function get_title() {
            return __( 'Rive Animation', 'rive' );
        }

        public function get_icon() {
            return 'eicon-animation';
        }

        public function get_categories() {
            return [ 'general' ];
        }

        protected function _register_controls() {
            $this->start_controls_section(
                'section_content',
                [
                    'label' => __( 'Content', 'rive' ),
                ]
            );

            $this->add_control(
                'canvas_id',
                [
                    'label'   => __( 'Canvas ID', 'rive' ),
                    'type'    => \Elementor\Controls_Manager::TEXT,
                    'default' => uniqid('rive-canvas-'),
                ]
            );

            $this->add_control(
                'rive_file',
                [
                    'label'   => __( 'Select Rive File', 'rive' ),
                    'type'    => \Elementor\Controls_Manager::MEDIA,
                    'media_type' => 'application/octet-stream', // For .riv files.
                    'default' => [
                        'url' => '',
                    ],
                ]
            );

            $this->add_control(
                'state_machine',
                [
                    'label'   => __( 'State Machine Name', 'rive' ),
                    'type'    => \Elementor\Controls_Manager::TEXT,
                    'default' => 'State Machine 1',
                ]
            );

            $this->add_control(
                'threshold',
                [
                    'label'   => __( 'Observer Threshold', 'rive' ),
                    'type'    => \Elementor\Controls_Manager::NUMBER,
                    'default' => 0.7,
                ]
            );

            $this->add_control(
                'layout_fit',
                [
                    'label'   => __( 'Layout Fit', 'rive' ),
                    'type'    => \Elementor\Controls_Manager::SELECT,
                    'default' => 'contain',
                    'options' => [
                        'contain' => 'Contain',
                        'cover' => 'Cover',
                        'fill' => 'Fill',
                        'fitWidth' => 'Fit Width',
                        'fitHeight' => 'Fit Height',
                        'none' => 'None',
                        'scaleDown' => 'Scale Down',
                    ],
                ]
            );
            $this->end_controls_section();
        }

        protected function render() {
            $settings = $this->get_settings_for_display();
        
            $canvas_id     = esc_attr( $settings['canvas_id'] );
            $rive_file_url = esc_url( $settings['rive_file']['url'] );
            $state_machine = esc_attr( $settings['state_machine'] );
            $threshold     = floatval( $settings['threshold'] );
            $layout_fit    = esc_attr( $settings['layout_fit'] );
        
            // Ensure a Rive file is selected before rendering the animation.
            if ( empty( $rive_file_url ) ) {
                error_log( 'Rive file URL is missing.' );
                return new WP_Error( 'missing_url', __( 'The Rive file URL is required.', 'rive-plugin' ) );
            }
            
            // Render the canvas element
            echo "<canvas id='{$canvas_id}' class='rive-canvas' style='width: 100%; height: 100%;'></canvas>";
        
            // Enqueue the necessary JavaScript
            wp_enqueue_script( 'rive-animation-handler', plugins_url( 'assets/js/rive-handler.js', __FILE__ ), [], '1.0.0', true );
        
            // Pass data to the JavaScript handler
            wp_localize_script( 'rive-animation-handler', 'RiveData', [
                'canvasId'     => $canvas_id,
                'src' => $rive_file_url,
                'stateMachine' => $state_machine,
                'layoutFit'    => $layout_fit,
                'threshold'    => $threshold,
            ] );
        }        
    }
}
