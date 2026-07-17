/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating Positioning Engine
 * ----------------------------------------------------------------------------
 * File: FloatingAlgorithms.ts
 *
 * Pure positioning algorithms.
 *
 * Responsibilities:
 * • Calculate initial position
 * • Flip placement
 * • Shift into viewport
 * • Clamp coordinates
 *
 * No React.
 * No DOM.
 * No browser globals.
 * ============================================================================
 */

import type {
    FloatingPlacement,
    FloatingPosition,
    FloatingStrategy,
} from "./FloatingPosition.types";

import {
    calculateFloatingPosition,
} from "./FloatingPosition.utils";

/* -------------------------------------------------------------------------- */
/* Shared Types                                                               */
/* -------------------------------------------------------------------------- */

export interface RectLike {

    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;

}

export interface Size {

    width: number;
    height: number;

}

export interface Viewport {

    width: number;
    height: number;

}

export interface ComputePositionOptions {

    anchor: RectLike;

    floating: Size;

    placement: FloatingPlacement;

    offset: number;

    crossOffset: number;

    strategy: FloatingStrategy;

    viewport: Viewport;

    padding: number;

}

/* -------------------------------------------------------------------------- */
/* Compute                                                                     */
/* -------------------------------------------------------------------------- */

export function computePosition(
    options: ComputePositionOptions,
): FloatingPosition {

    const initial =
        calculateFloatingPosition({

            anchor: options.anchor,

            floating: options.floating,

            placement: options.placement,

            offset: options.offset,

            crossOffset: options.crossOffset,

            strategy: options.strategy,

        });

    const shifted =
        shiftPosition({

            x: initial.x,

            y: initial.y,

            width: options.floating.width,

            height: options.floating.height,

            viewport: options.viewport,

            padding: options.padding,

        });

    return {

        ...initial,

        x: shifted.x,

        y: shifted.y,

    };

}

/* -------------------------------------------------------------------------- */
/* Shift                                                                       */
/* -------------------------------------------------------------------------- */

export function shiftPosition({

    x,

    y,

    width,

    height,

    viewport,

    padding,

}: {

    x: number;

    y: number;

    width: number;

    height: number;

    viewport: Viewport;

    padding: number;

}) {

    return {

        x: Math.min(
            Math.max(x, padding),
            viewport.width - width - padding,
        ),

        y: Math.min(
            Math.max(y, padding),
            viewport.height - height - padding,
        ),

    };

}

/* -------------------------------------------------------------------------- */
/* Flip                                                                        */
/* -------------------------------------------------------------------------- */

export function flipPlacement(
    placement: FloatingPlacement,
): FloatingPlacement {

    switch (placement) {

        case "top":
            return "bottom";

        case "top-start":
            return "bottom-start";

        case "top-end":
            return "bottom-end";

        case "bottom":
            return "top";

        case "bottom-start":
            return "top-start";

        case "bottom-end":
            return "top-end";

        case "left":
            return "right";

        case "left-start":
            return "right-start";

        case "left-end":
            return "right-end";

        case "right":
            return "left";

        case "right-start":
            return "left-start";

        case "right-end":
            return "left-end";

        default:
            return placement;

    }

}

/* -------------------------------------------------------------------------- */
/* Collision                                                                   */
/* -------------------------------------------------------------------------- */

export function shouldFlip({

    position,

    floating,

    viewport,

}: {

    position: FloatingPosition;

    floating: Size;

    viewport: Viewport;

}) {

    return (

        position.x < 0 ||

        position.y < 0 ||

        position.x + floating.width > viewport.width ||

        position.y + floating.height > viewport.height

    );

}
