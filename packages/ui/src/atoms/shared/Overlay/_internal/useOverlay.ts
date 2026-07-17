/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: useOverlay.ts
 *
 * React hook for consuming the Overlay Engine.
 *
 * This hook provides a stable API over OverlayContext and exposes commonly
 * used derived values while keeping the underlying context implementation
 * flexible.
 * ============================================================================
 */

import {
    useContext,
    useMemo,
} from "react";

import {
    OverlayContext,
} from "./OverlayContext";

import type {
    OverlayContextValue,
} from "./OverlayContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Provides access to the shared Overlay Engine.
 *
 * Must be used within an OverlayProvider.
 */
export function useOverlay(): OverlayContextValue & {

    /**
     * Convenience alias for state.overlays.
     */
    readonly overlays: readonly ReturnType<
        OverlayContextValue["store"]["getAll"]
    >;

    /**
     * Current top-most overlay.
     */
    readonly topOverlay: ReturnType<
        OverlayContextValue["store"]["getTop"]
    >;

    /**
     * True when at least one overlay is registered.
     */
    readonly hasOverlays: boolean;

} {

    const context = useContext(OverlayContext);

    if (context === null) {

        throw new Error(
            "[Ascend UI] useOverlay() must be used within an <OverlayProvider>."
        );

    }

    const {
        state,
        store,
    } = context;

    return useMemo(() => ({

        state,

        store,

        overlays: state.overlays,

        topOverlay: state.topOverlay,

        hasOverlays: state.overlays.length > 0,

    }), [

        state,
        store,

    ]);

}

export default useOverlay;
