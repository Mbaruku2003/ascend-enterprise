/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip Context
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    TooltipContextValue,
} from "./Tooltip.types";

export const TooltipContext =
    createContext<
        TooltipContextValue | null
    >(null);

export function useTooltipContext() {

    const context =
        useContext(
            TooltipContext,
        );

    if (!context) {

        throw new Error(

            "Tooltip components must be rendered inside <TooltipRoot>.",

        );

    }

    return context;

}

export default TooltipContext;
