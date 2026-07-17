/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating Positioning Engine
 * ----------------------------------------------------------------------------
 * File: FloatingViewport.ts
 *
 * Browser viewport abstraction.
 *
 * Responsibilities:
 *
 * • Viewport size
 * • Viewport scroll
 * • Visible bounds
 *
 * No React.
 * ============================================================================
 */

export interface FloatingViewport {

    width: number;

    height: number;

    scrollX: number;

    scrollY: number;

}

export interface FloatingViewportBounds {

    top: number;

    left: number;

    right: number;

    bottom: number;

    width: number;

    height: number;

}

/* -------------------------------------------------------------------------- */
/* Viewport                                                                   */
/* -------------------------------------------------------------------------- */

export function getViewport(): FloatingViewport {

    return {

        width: window.innerWidth,

        height: window.innerHeight,

        scrollX: window.scrollX,

        scrollY: window.scrollY,

    };

}

/* -------------------------------------------------------------------------- */
/* Bounds                                                                     */
/* -------------------------------------------------------------------------- */

export function getViewportBounds(): FloatingViewportBounds {

    const viewport =
        getViewport();

    return {

        top: viewport.scrollY,

        left: viewport.scrollX,

        right:
            viewport.scrollX +
            viewport.width,

        bottom:
            viewport.scrollY +
            viewport.height,

        width:
            viewport.width,

        height:
            viewport.height,

    };

}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function isInsideViewport(

    x: number,

    y: number,

    width: number,

    height: number,

): boolean {

    const viewport =
        getViewport();

    return (

        x >= 0 &&

        y >= 0 &&

        x + width <= viewport.width &&

        y + height <= viewport.height

    );

}

export default getViewport;
