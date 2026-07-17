/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: OverlayContext.tsx
 *
 * React context for the Overlay Engine.
 *
 * This file intentionally contains very little logic.
 * The OverlayStack remains the single source of truth.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    OverlayState,
} from "./Overlay.types";

import type {
    OverlayStack,
} from "./OverlayStack";

/* -------------------------------------------------------------------------- */
/* Context Value                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Value exposed by the OverlayProvider.
 *
 * The provider exposes:
 *
 * • current immutable state
 * • shared OverlayStack instance
 *
 * Components should interact with the OverlayStack through this context
 * instead of constructing their own stores.
 */
export interface OverlayContextValue {

    /**
     * Immutable snapshot of the current overlay state.
     */
    readonly state: OverlayState;

    /**
     * Shared overlay store.
     */
    readonly store: OverlayStack;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Internal Overlay React Context.
 *
 * This context intentionally defaults to null so that useOverlay()
 * can provide a helpful developer error when used outside of an
 * OverlayProvider.
 */
export const OverlayContext =
    createContext<
        OverlayContextValue | null
    >(null);

/* -------------------------------------------------------------------------- */
/* Display Name                                                               */
/* -------------------------------------------------------------------------- */

if (process.env.NODE_ENV !== "production") {

    OverlayContext.displayName =
        "OverlayContext";

}

export default OverlayContext;
