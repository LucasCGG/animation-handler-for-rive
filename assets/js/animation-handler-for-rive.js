/**
 * Animation Handler for Rive (AHFR)
 * Handles viewport-triggered Rive animations.
 *
 * @documentation https://rive.app/community/doc
 * @since 1.0.0
 */

/* global rive */ // Provided by rive.min.js

(function (w) {
	'use strict';

	/** Top-level namespace — everything lives under window.ahfr */
	const ns = (w.ahfr = w.ahfr || {});

	/**
	 * Create a single Intersection-observer-driven Rive instance.
	 *
	 * @param {Object} cfg - Configuration options for the Rive animation.
	 * @param {string} cfg.canvasId - The ID of the canvas element where the Rive animation will be rendererd.
	 * @param {string} cfg.src - Configuration options for the Rive animation.
	 * @param {string} cfg.stateMachine - The name of the state machine to control the animation.
	 * @param {number} [cfg.threshold=0.7] - The threshold value for the IntersectionObserver. Defaults to 0.7.
	 * @param {string|null} [cfg.viewport=null]  - The viewport object
	 * @param {string} [cfg.layoutFit='contain'] - The layout fit value for the Rive animation. Defaults to 'contain'. @documentation https://rive.app/community/doc/layout/docBl81zd1GB
	 */
	function initAnimation(cfg) {
		const {
			canvasId,
			src,
			stateMachine,
			threshold = 0.7,
			viewport = null,
			layoutFit = 'contain',
		} = cfg;

		const canvas = document.getElementById(canvasId);
		
		if (!canvas) {
        	console.error(`Canvas with ID '${canvasId}' not found.`);
			return;
		}

		if(!cfg)
		{
			console.error("Invalid Rive options.");
			return;
		}

		if (!src || !stateMachine) {
			console.error('AHFR: “src” and “stateMachine” are required.');
			return;
		}

		const fitEnum = rive.Fit[layoutFit] || rive.Fit.contain;

		const instance = new rive.Rive({
			src,
			canvas,
			autoplay: false,
			layout: new rive.Layout({ fit: fitEnum }),
			onLoad: resizeSurface,
		});

		function resizeSurface() {
			instance.resizeDrawingSurfaceToCanvas();
		}

		w.addEventListener('resize', resizeSurface);

		const rootElement =
			viewport && typeof viewport === 'string'
				? document.querySelector(viewport)
				: null;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						instance.play(stateMachine);
					} else {
						instance.pause(stateMachine);
					}
				});
			},
			{
				root: rootElement,
				threshold: threshold,
			}
		);

		observer.observe(canvas);
	}

	/**
	 * Process any items already pushed by PHP and watch for new pushes.
	 * PHP injects:  window.riveAnimations.push( { …config… } );
	 */
	function boot() {
		if (!Array.isArray(w.riveAnimations)) {
			return;
		}

		// Initialise existing configs.
		w.riveAnimations.forEach(initAnimation);

		// Monkey-patch push so later widgets initialise automatically.
		const push = w.riveAnimations.push;
		w.riveAnimations.push = function () {
			Array.prototype.forEach.call(arguments, initAnimation);
			return push.apply(this, arguments);
		};
	}

	// Kick off after DOM ready.
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', boot);
	} else {
		boot();
	}
})(window);
