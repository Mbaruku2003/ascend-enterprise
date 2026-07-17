/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: OverlayProvider.tsx
 * ============================================================================
 */

import {
    useMemo,
    useSyncExternalStore,
    type PropsWithChildren,
} from "react";

import {
    OverlayContext,
} from "./OverlayContext";

import {
    overlayStack,
} from "./OverlayStack";

export interface OverlayProviderProps
    extends PropsWithChildren {}

export function OverlayProvider({

    children,

}: OverlayProviderProps) {

    const state =
        useSyncExternalStore(

            overlayStack.subscribe.bind(
                overlayStack,
            ),

            overlayStack.getSnapshot.bind(
                overlayStack,
            ),

            overlayStack.getServerSnapshot.bind(
                overlayStack,
            ),

        );

    const value =
        useMemo(

            () => ({

                state,

                store: overlayStack,

            }),

            [state],

        );

    return (

        <OverlayContext.Provider
            value={value}
        >

            {children}

        </OverlayContext.Provider>

    );

}

OverlayProvider.displayName =
    "OverlayProvider";

export default OverlayProvider;
