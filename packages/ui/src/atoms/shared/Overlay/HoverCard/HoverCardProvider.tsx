/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: HoverCardProvider.tsx
 *
 * Provides shared HoverCard timing configuration.
 *
 * ============================================================================
 */

import {
    createContext,
    useContext,
    type ReactNode,
} from "react";

import {
    DEFAULT_HOVERCARD_OPEN_DELAY,
    DEFAULT_HOVERCARD_CLOSE_DELAY,
} from "./HoverCard.constants";

import type {
    HoverCardProviderProps,
} from "./HoverCard.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                     */
/* -------------------------------------------------------------------------- */

interface HoverCardProviderContextValue {

    openDelay: number;

    closeDelay: number;

}

const HoverCardProviderContext =
createContext<HoverCardProviderContextValue>({

    openDelay:
        DEFAULT_HOVERCARD_OPEN_DELAY,

    closeDelay:
        DEFAULT_HOVERCARD_CLOSE_DELAY,

});

/* -------------------------------------------------------------------------- */
/* Provider                                                                    */
/* -------------------------------------------------------------------------- */

export function HoverCardProvider({

    children,

    openDelay =
        DEFAULT_HOVERCARD_OPEN_DELAY,

    closeDelay =
        DEFAULT_HOVERCARD_CLOSE_DELAY,

}: HoverCardProviderProps) {

    return (

        <HoverCardProviderContext.Provider

            value={{

                openDelay,

                closeDelay,

            }}

        >

            {children}

        </HoverCardProviderContext.Provider>

    );

}

/* -------------------------------------------------------------------------- */
/* Hook                                                                        */
/* -------------------------------------------------------------------------- */

export function useHoverCardProvider() {

    return useContext(

        HoverCardProviderContext,

    );

}

export default HoverCardProvider;
