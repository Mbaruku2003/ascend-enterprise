/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating
 * ----------------------------------------------------------------------------
 * File: index.ts
 *
 * Public exports for the Floating positioning engine.
 *
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Runtime                                                                    */
/* -------------------------------------------------------------------------- */

export {
    useFloatingPosition,
} from "./useFloatingPosition";

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

export {
    createVirtualElement,
} from "./FloatingVirtualElement";

export {
    getViewportRect,
    isWithinViewport,
} from "./FloatingViewport";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {

    FloatingPlacement,

    FloatingPosition,

    FloatingRect,

    FloatingCoordinates,

    FloatingBoundary,

    FloatingMiddleware,

    FloatingStrategy,

    FloatingPositionOptions,

    FloatingVirtualElement,

} from "./FloatingPosition.types";

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

export {

    DEFAULT_OFFSET,

    DEFAULT_PADDING,

    DEFAULT_STRATEGY,

} from "./FloatingPosition.constants";
