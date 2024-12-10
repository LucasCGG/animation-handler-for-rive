=== Rive Animation Handler ===
Contributors: LucasCGG
Tags: rive, animation, elementor, canvas, intersectionobserver
Requires PHP: 7.0
Requires at least: 5.3
Tested up to: 6.7
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/licenses/MIT

Integrate Rive animations into WordPress with Elementor for dynamic, viewport-triggered animations.

== Description ==

Rive Animation Handler is a WordPress plugin that enables you to add Rive animations to your Elementor pages. It uses a canvas element and an IntersectionObserver to start animations when they enter the viewport, providing a seamless and interactive user experience.

== Installation ==

1. Download the plugin from the [GitHub repository](https://github.com/LucasCGG/rive-animation-handler).
2. Upload the `rive-animation-handler` directory to your `/wp-content/plugins` directory.
3. Activate the plugin in the WordPress admin.
4. Ensure Elementor is installed and activated. If not, you will see an admin notice prompting you to install and activate it.

== Usage ==

1. Edit a page with Elementor.
2. Search for the `Rive Animation` widget in the Elementor panel.
3. Drag and drop the widget onto your page.
4. Configure the widget settings:
   - **Canvas ID:** A unique identifier for the canvas element.
   - **Select Rive File:** Upload or select a `.riv` file from the media library.
   - **State Machine Name:** The name of the state machine to control the animation.
   - **Observer Threshold:** The threshold value for the IntersectionObserver.
   - **Layout Fit:** The layout fit value for the Rive animation.

== Frequently Asked Questions ==

= What is Rive? =

Rive is a real-time interactive design tool that allows you to create animations and integrate them into your applications. It provides a powerful way to add dynamic content to your WordPress site.

= Will this plugin work with my WordPress site? =

Yes, as long as you have Elementor installed and activated. The plugin is designed to work seamlessly with Elementor to provide an easy way to add Rive animations to your pages.

= How do I customize the animation settings? =

You can customize the animation settings directly within the Elementor editor by configuring the widget options such as Canvas ID, Rive File, State Machine Name, Viewport, Observer Threshold, and Layout Fit.

= Does this plugin cost money? =

The Rive Animation Handler plugin is free to use. As of 09.12.2024, creating and exporting Rive animations does not require a paid account. However, this may change in the future, so please check Rive's official website for the most up-to-date information.

= My animations are not starting as expected. What should I do? =

Ensure that the IntersectionObserver settings are configured correctly. The Observer Threshold determines how much of the canvas element must be visible in the viewport before the animation starts. Additionally, ensure that a Rive file was selected. If you have multiple objects, check if the Canvas IDs are all different. If you can see a preview but the animation is not starting, verify the State Machine name.

== License ==

This plugin is dual-licensed under the MIT License. You may choose to use either license. See the LICENSE file for more details.

== Additional Resources ==

- [Rive Animation Handler GitHub Repository](https://github.com/LucasCGG/rive-animation-handler)
- [Rive Official Website](https://rive.app/)

== Screenshots ==

1. Rive Animation Handler Elementor Widget Settings screen.
   [Screenshot 1](assets/screenshots/screenshot-1.png)
2. Example of a Rive animation being added to a page.
   [Screenshot 2](assets/screenshots/screenshot-2.png)
3. Example of a Rive animation inside a page.
   [Screenshot 3](assets/screenshots/screenshot-3.png)

== Changelog ==
= v1.0.0 =
* Initial release of the Rive Animation Handler plugin.
