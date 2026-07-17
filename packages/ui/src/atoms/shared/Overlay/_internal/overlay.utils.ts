/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: overlay.utils.ts
 *
 * Shared utility functions for the Overlay Engine.
 *
 * This file intentionally contains no React code and no DOM manipulation.
 * It provides reusable helpers used by every overlay component.
 * ============================================================================
 */

import {
    DEFAULT_ID_PREFIX,
    DEFAULT_OVERLAY_Z_INDEX,
    OVERLAY_Z_INDEX_STEP,
} from "./overlay.constants";

import type {
    OverlayId,
    OverlayRecord,
    OverlayState,
    OverlayStatus,
} from "./Overlay.types";

/* -------------------------------------------------------------------------- */
/* Internal Counter                                                           */
/* -------------------------------------------------------------------------- */

let overlayCounter = 0;

/* -------------------------------------------------------------------------- */
/* ID Helpers                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Generates a unique overlay identifier.
 *
 * Example:
 *
 * overlay-1
 * overlay-2
 * overlay-3
 */
export function createOverlayId(
    prefix: string = DEFAULT_ID_PREFIX,
): OverlayId {

    overlayCounter += 1;

    return `${prefix}-${overlayCounter}`;

}

/**
 * Resets the internal id counter.
 *
 * Primarily intended for unit tests.
 */
export function resetOverlayIdCounter(): void {

    overlayCounter = 0;

}

/* -------------------------------------------------------------------------- */
/* Overlay State Helpers                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Returns true if the overlay is visible.
 */
export function isOverlayOpen(
    overlay: OverlayRecord,
): boolean {

    return overlay.open;

}

/**
 * Returns true if the overlay is currently opening.
 */
export function isOpening(
    status: OverlayStatus,
): boolean {

    return status === "opening";

}

/**
 * Returns true if the overlay is fully open.
 */
export function isOpened(
    status: OverlayStatus,
): boolean {

    return status === "open";

}

/**
 * Returns true if the overlay is closing.
 */
export function isClosing(
    status: OverlayStatus,
): boolean {

    return status === "closing";

}

/**
 * Returns true if the overlay is completely closed.
 */
export function isClosed(
    status: OverlayStatus,
): boolean {

    return status === "closed";

}

/* -------------------------------------------------------------------------- */
/* Z-Index Helpers                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Calculates the z-index for the next overlay.
 */
export function calculateOverlayZIndex(
    overlayCount: number,
): number {

    return (
        DEFAULT_OVERLAY_Z_INDEX +
        overlayCount * OVERLAY_Z_INDEX_STEP
    );

}

/* -------------------------------------------------------------------------- */
/* Collection Helpers                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Returns the top-most overlay.
 */
export function getTopOverlay(
    overlays: readonly OverlayRecord[],
): OverlayRecord | undefined {

    if (overlays.length === 0) {

        return undefined;

    }

    return overlays[overlays.length - 1];

}

/**
 * Finds an overlay by id.
 */
export function findOverlay(
    overlays: readonly OverlayRecord[],
    id: OverlayId,
): OverlayRecord | undefined {

    return overlays.find(
        overlay => overlay.id === id,
    );

}

/**
 * Returns true if an overlay exists.
 */
export function hasOverlay(
    overlays: readonly OverlayRecord[],
    id: OverlayId,
): boolean {

    return overlays.some(
        overlay => overlay.id === id,
    );

}

/* -------------------------------------------------------------------------- */
/* Immutable Update Helpers                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Updates an overlay immutably.
 */
export function updateOverlay(
    overlays: readonly OverlayRecord[],
    id: OverlayId,
    updates: Partial<OverlayRecord>,
): OverlayRecord[] {

    return overlays.map((overlay) =>

        overlay.id === id
            ? {
                  ...overlay,
                  ...updates,
              }
            : overlay,

    );

}

/**
 * Removes an overlay immutably.
 */
export function removeOverlay(
    overlays: readonly OverlayRecord[],
    id: OverlayId,
): OverlayRecord[] {

    return overlays.filter(
        overlay => overlay.id !== id,
    );

}

/* -------------------------------------------------------------------------- */
/* State Helpers                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Creates a new immutable OverlayState.
 */
export function createOverlayState(
    overlays: readonly OverlayRecord[],
): OverlayState {

    return {

        overlays,

        topOverlay: getTopOverlay(overlays),

    };

}

/* -------------------------------------------------------------------------- */
/* Debug Helpers                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns a readable string for debugging.
 */
export function formatOverlay(
    overlay: OverlayRecord,
): string {

    return `${overlay.type}(${overlay.id})`;

}
