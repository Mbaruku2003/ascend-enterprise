/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating Positioning Engine
 * ----------------------------------------------------------------------------
 * File: FloatingPosition.utils.ts
 *
 * Pure geometry utilities.
 *
 * No React.
 * No hooks.
 * No side effects.
 *
 * ============================================================================
 */

import type {
    FloatingPlacement,
    FloatingPosition,
    FloatingStrategy,
} from "./FloatingPosition.types";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
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

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function getAnchorRect(
    element: HTMLElement | null,
): DOMRect | null {

    if (!element) {

        return null;

    }

    return element.getBoundingClientRect();

}

export function getElementSize(
    element: HTMLElement | null,
): Size {

    if (!element) {

        return {

            width: 0,
            height: 0,

        };

    }

    return {

        width: element.offsetWidth,
        height: element.offsetHeight,

    };

}

export function parsePlacement(
    placement: FloatingPlacement,
) {

    const [side, alignment = "center"] =
        placement.split("-");

    return {

        side,

        alignment,

    };

}

/* -------------------------------------------------------------------------- */
/* Position Calculation                                                       */
/* -------------------------------------------------------------------------- */

export function calculateFloatingPosition({

    anchor,

    floating,

    placement,

    offset,

    crossOffset,

    strategy,

}: {

    anchor: RectLike;

    floating: Size;

    placement: FloatingPlacement;

    offset: number;

    crossOffset: number;

    strategy: FloatingStrategy;

}): FloatingPosition {

    const {

        side,

        alignment,

    } = parsePlacement(
        placement,
    );

    let x = 0;

    let y = 0;

    switch (side) {

        case "top":

            y =
                anchor.top -
                floating.height -
                offset;

            break;

        case "bottom":

            y =
                anchor.bottom +
                offset;

            break;

        case "left":

            x =
                anchor.left -
                floating.width -
                offset;

            break;

        case "right":

            x =
                anchor.right +
                offset;

            break;

    }

    switch (side) {

        case "top":
        case "bottom":

            switch (alignment) {

                case "start":

                    x =
                        anchor.left +
                        crossOffset;

                    break;

                case "end":

                    x =
                        anchor.right -
                        floating.width +
                        crossOffset;

                    break;

                default:

                    x =
                        anchor.left +
                        (
                            anchor.width -
                            floating.width
                        ) / 2 +
                        crossOffset;

            }

            break;

        case "left":
        case "right":

            switch (alignment) {

                case "start":

                    y =
                        anchor.top +
                        crossOffset;

                    break;

                case "end":

                    y =
                        anchor.bottom -
                        floating.height +
                        crossOffset;

                    break;

                default:

                    y =
                        anchor.top +
                        (
                            anchor.height -
                            floating.height
                        ) / 2 +
                        crossOffset;

            }

            break;

    }

    return {

        x,

        y,

        placement,

        strategy,

    };

}

/* -------------------------------------------------------------------------- */
/* Viewport                                                                   */
/* -------------------------------------------------------------------------- */

export function clampToViewport({

    x,

    y,

    width,

    height,

    padding,

}: {

    x: number;

    y: number;

    width: number;

    height: number;

    padding: number;

}) {

    const maxX =
        window.innerWidth -
        width -
        padding;

    const maxY =
        window.innerHeight -
        height -
        padding;

    return {

        x: Math.min(
            Math.max(
                x,
                padding,
            ),
            maxX,
        ),

        y: Math.min(
            Math.max(
                y,
                padding,
            ),
            maxY,
        ),

    };

}

/* -------------------------------------------------------------------------- */
/* Collision                                                                  */
/* -------------------------------------------------------------------------- */

export function isOutOfViewport({

    x,

    y,

    width,

    height,

}: {

    x: number;

    y: number;

    width: number;

    height: number;

}) {

    return (

        x < 0 ||

        y < 0 ||

        x + width >
            window.innerWidth ||

        y + height >
            window.innerHeight

    );

}

/* -------------------------------------------------------------------------- */
/* Transform Origin                                                           */
/* -------------------------------------------------------------------------- */

export function getTransformOrigin(
    placement: FloatingPlacement,
): string {

    const {

        side,

        alignment,

    } = parsePlacement(
        placement,
    );

    switch (side) {

        case "top":

            return `${alignment} bottom`;

        case "bottom":

            return `${alignment} top`;

        case "left":

            return `right ${alignment}`;

        case "right":

            return `left ${alignment}`;

        default:

            return "center center";

    }

}
