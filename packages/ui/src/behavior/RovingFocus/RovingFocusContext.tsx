/**
 * ============================================================================
 * Ascend UI
 * Roving Focus Context
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    RovingFocusContextValue,
} from "./RovingFocus.types";

/**
 * Internal context.
 */
const RovingFocusContext =
createContext<
    RovingFocusContextValue | null
>(
    null,
);

/**
 * Context hook.
 */
export function useRovingFocusContext()
: RovingFocusContextValue {

    const context =
        useContext(
            RovingFocusContext,
        );

    if (!context) {

        throw new Error(

            "RovingFocus components must be used inside <RovingFocus>.",

        );

    }

    return context;

}

/**
 * Provider.
 */
export const RovingFocusProvider =
    RovingFocusContext.Provider;

/**
 * Context.
 */
export default RovingFocusContext;
