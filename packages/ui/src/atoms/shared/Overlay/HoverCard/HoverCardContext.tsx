/**
 * ============================================================================
 * Ascend Enterprise UI
 * HoverCard Context
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    HoverCardContextValue,
} from "./HoverCard.types";

const HoverCardContext =
createContext<HoverCardContextValue | null>(
    null,
);

export function useHoverCardContext() {

    const context =
        useContext(
            HoverCardContext,
        );

    if (!context) {

        throw new Error(

            "HoverCard components must be used inside <HoverCardRoot>.",

        );

    }

    return context;

}

export default HoverCardContext;
