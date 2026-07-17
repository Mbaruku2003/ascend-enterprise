/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating
 * ----------------------------------------------------------------------------
 * Virtual Reference
 *
 * Allows floating components to anchor to arbitrary screen coordinates.
 *
 * ============================================================================
 */

export interface FloatingVirtualElement {

    getBoundingClientRect(): DOMRect;

}

export interface FloatingPoint {

    x: number;

    y: number;

}

/**
 * Creates a virtual floating reference.
 */
export function createVirtualReference(
    point: FloatingPoint,
): FloatingVirtualElement {

    return {

        getBoundingClientRect() {

		return new DOMRect(
		    point.x,
		    point.y,
		    0,
		    0,
		);
        },

    };

}

export default createVirtualReference;
