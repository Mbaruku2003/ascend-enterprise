/**
 * ============================================================================
 * Ascend Enterprise UI
 * HoverCard Root
 * ============================================================================
 */

import type {
    JSX,
} from "react";

import HoverCardContext from "./HoverCardContext";

import {
    useHoverCard,
} from "./useHoverCard";

import type {
    HoverCardRootProps,
} from "./HoverCard.types";

export function HoverCardRoot({

    children,

    ...props

}: HoverCardRootProps): JSX.Element {

    const value =
        useHoverCard(
            props,
        );

    return (

        <HoverCardContext.Provider
            value={value}
        >

            {children}

        </HoverCardContext.Provider>

    );

}

HoverCardRoot.displayName =
    "HoverCardRoot";

export default HoverCardRoot;
