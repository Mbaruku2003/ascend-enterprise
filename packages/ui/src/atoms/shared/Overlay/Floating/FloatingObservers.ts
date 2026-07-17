/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating Positioning Engine
 * ----------------------------------------------------------------------------
 * File: FloatingObservers.ts
 *
 * Shared observers used by all floating components.
 *
 * Responsibilities:
 *
 * • Window resize
 * • Window scroll
 * • Element resize
 * • Automatic cleanup
 *
 * No React.
 * ============================================================================
 */

export interface FloatingObserverOptions {

    anchor?: HTMLElement | null;

    floating?: HTMLElement | null;

    enabled?: boolean;

    observeResize?: boolean;

    observeScroll?: boolean;

    observeElementResize?: boolean;

    onUpdate(): void;

}

export interface FloatingObserver {

    start(): void;

    stop(): void;

}

class FloatingObserverImpl
    implements FloatingObserver {

    private readonly options: FloatingObserverOptions;

    private resizeObserver?: ResizeObserver;

    private started = false;

    constructor(
        options: FloatingObserverOptions,
    ) {

        this.options = options;

    }

    /* ---------------------------------------------------------------------- */
    /* Start                                                                  */
    /* ---------------------------------------------------------------------- */

    start() {

        if (
            this.started ||
            this.options.enabled === false
        ) {

            return;

        }

        this.started = true;

        const {

            anchor,

            floating,

            onUpdate,

            observeResize = true,

            observeScroll = true,

            observeElementResize = true,

        } = this.options;

        if (observeResize) {

            window.addEventListener(
                "resize",
                onUpdate,
                {
                    passive: true,
                },
            );

        }

        if (observeScroll) {

            window.addEventListener(
                "scroll",
                onUpdate,
                {
                    passive: true,
                    capture: true,
                },
            );

        }

        if (
            observeElementResize &&
            typeof ResizeObserver !==
                "undefined"
        ) {

            this.resizeObserver =
                new ResizeObserver(() => {

                    onUpdate();

                });

            if (anchor) {

                this.resizeObserver.observe(
                    anchor,
                );

            }

            if (
                floating &&
                floating !== anchor
            ) {

                this.resizeObserver.observe(
                    floating,
                );

            }

        }

        onUpdate();

    }

    /* ---------------------------------------------------------------------- */
    /* Stop                                                                   */
    /* ---------------------------------------------------------------------- */

    stop() {

        if (!this.started) {

            return;

        }

        this.started = false;

        const {

            onUpdate,

        } = this.options;

        window.removeEventListener(
            "resize",
            onUpdate,
        );

        window.removeEventListener(
            "scroll",
            onUpdate,
            true,
        );

        this.resizeObserver?.disconnect();

        this.resizeObserver =
            undefined;

    }

}

/* -------------------------------------------------------------------------- */
/* Factory                                                                    */
/* -------------------------------------------------------------------------- */

export function createFloatingObserver(
    options: FloatingObserverOptions,
): FloatingObserver {

    return new FloatingObserverImpl(
        options,
    );

}

export default createFloatingObserver;
