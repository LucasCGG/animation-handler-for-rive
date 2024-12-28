/**
 * Animation Handler for Rive
 * Handles animations using Rive
 *
 * @documentation https://rive.app/community/doc
 * @since 1.0.0
 */

/**
 * Initialize and control a Rive Animation using an IntersectionObserver
 *
 * @param {string} canvasId - The ID of the canvas element where the Rive animation will be rendered.
 * @param {Object} riveOptions - Configuration options for the Rive animation.
 * @param {string} riveOptions.src - The full URL to the Rive animation file.
 * @param {string} riveOptions.stateMachine - The name of the state machine to control the animation.
 * @param {string} [riveOptions.layoutFit=contain] - The layout fit value for the Rive animation. Defaults to 'contain'. @documentation https://rive.app/community/doc/layout/docBl81zd1GB
 * @param {Object} [viewport] - The viewport object.
 * @param {number} [threshold=0.7] - The threshold value for the IntersectionObserver. Defaults to 0.7.
 */
function observeRiveAnimation(canvasId, riveOptions, viewport, threshold) {
    const observerThreshold = threshold || riveOptions.threshold || 0.5;
    const riveLayoutFit = riveOptions.layoutFit || 'contain';
    const riveCanvas = document.getElementById(canvasId);

    if (!riveCanvas) {
        console.error(`Canvas with ID '${canvasId}' not found.`);
        return;
    }

    // Validate required Rive options
    if (!riveOptions) {
        console.error('Invalid Rive options.');
        return;
    }

    if(!riveOptions.src) {
        console.error('Ensure src is provided.');
        return;
    }

    if(!riveOptions.stateMachine) {
        console.error('Ensure stateMachine is provided.');
        return;
    }

    // Initialize Rive instance
    const riveInstance = new rive.Rive({
        src: riveOptions.src,
        canvas: riveCanvas,
        autoplay: false, // Controlled by IntersectionObserver
        layout: new rive.Layout({
            fit: rive.Fit[riveLayoutFit], // Allowed values: [Layout, Cover, Contain, Fill, FitWidth, FitHeight, None, ScaleDown] 
        }),
        onLoad: () => {
            computeSize();
        }
    });

	/**
     * Compute and set the size of the canvas and drawing surface.
     */
    function computeSize() {
        Instance.resizeDrawingSurfaceToCanvas(0);
    }

    // Set up IntersectionObserver for viewport tracking
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                Instance.play(Options.stateMachine);
            } else {
                Instance.pause(Options.stateMachine);
            }
        });
    }, {
        root: viewport,
        threshold: observerThreshold,
    });

    // Start observing the canvas
    observer.observe(Canvas);
}

// Expose the function globally for WordPress inline script compatibility
window.observeAnimation = observeRiveAnimation;
