/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating Positioning Engine
 * ----------------------------------------------------------------------------
 * File: FloatingPosition.constants.ts
 *
 * Shared defaults for all floating UI components.
 *
 * ============================================================================
 */

import type {
    FloatingCollisionPadding,
    FloatingPlacement,
    FloatingStrategy,
} from "./FloatingPosition.types";

/* -------------------------------------------------------------------------- */
/* Placement                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Default placement used by all floating components.
 */
export const DEFAULT_FLOATING_PLACEMENT: FloatingPlacement =
    "bottom";

/**
 * Default positioning strategy.
 */
export const DEFAULT_FLOATING_STRATEGY: FloatingStrategy =
    "fixed";

/* -------------------------------------------------------------------------- */
/* Offsets                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Distance between anchor and floating element.
 */
export const DEFAULT_FLOATING_OFFSET = 8;

/**
 * Cross-axis offset.
 */
export const DEFAULT_FLOATING_CROSS_OFFSET = 0;

/* -------------------------------------------------------------------------- */
/* Auto Update                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Automatically reposition on scroll/resize.
 */
export const DEFAULT_FLOATING_AUTO_UPDATE = true;

/* -------------------------------------------------------------------------- */
/* Collision Detection                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Default viewport padding.
 */
export const DEFAULT_COLLISION_PADDING = 8;

/**
 * Expanded collision padding.
 */
export const DEFAULT_COLLISION_PADDING_OBJECT: Readonly<FloatingCollisionPadding> =
    Object.freeze({

        top: DEFAULT_COLLISION_PADDING,

        right: DEFAULT_COLLISION_PADDING,

        bottom: DEFAULT_COLLISION_PADDING,

        left: DEFAULT_COLLISION_PADDING,

    });

/* -------------------------------------------------------------------------- */
/* Z-Index                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Base z-index for floating components.
 *
 * Individual components may override this value.
 */
export const DEFAULT_FLOATING_Z_INDEX = 50;

/* -------------------------------------------------------------------------- */
/* Animation                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Default transform origin.
 */
export const DEFAULT_TRANSFORM_ORIGIN = "center";

/**
 * Default animation duration.
 */
export const DEFAULT_ANIMATION_DURATION = 150;

/**
 * Default animation timing.
 */
export const DEFAULT_ANIMATION_EASING =
    "cubic-bezier(0.16, 1, 0.3, 1)";

/* -------------------------------------------------------------------------- */
/* Observers                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Observe window resize.
 */
export const OBSERVE_WINDOW_RESIZE = true;

/**
 * Observe window scrolling.
 */
export const OBSERVE_WINDOW_SCROLL = true;

/**
 * Observe element resize.
 */
export const OBSERVE_ELEMENT_RESIZE = true;

/**
 * Observe layout changes.
 */
export const OBSERVE_LAYOUT_SHIFT = true;
