/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip Root
 * ============================================================================
 */

import type {
    JSX,
} from "react";

import TooltipContext from "./TooltipContext";

import {
    useTooltip,
} from "./useTooltip";

import type {
    TooltipRootProps,
} from "./Tooltip.types";

export function TooltipRoot({

    children,

    ...props

}: TooltipRootProps): JSX.Element {

    const value =
        useTooltip(
            props,
        );

    return (

        <TooltipContext.Provider
            value={value}
        >

            {children}

        </TooltipContext.Provider>

    );

}

TooltipRoot.displayName =
    "TooltipRoot";

export default TooltipRoot;
