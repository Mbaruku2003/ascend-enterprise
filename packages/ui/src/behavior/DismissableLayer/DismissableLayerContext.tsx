/**
 * ============================================================================
 * Ascend Enterprise UI
 * Dismissable Layer
 * ----------------------------------------------------------------------------
 * File: DismissableLayerContext.tsx
 *
 * Compatibility layer.
 *
 * Historically DismissableLayer managed its own layer stack through this
 * context. The Overlay Engine is now the single source of truth.
 *
 * This provider exists only to avoid breaking older components while they are
 * migrated to useDismissableLayer().
 *
 * New code should NOT depend on this context.
 * ============================================================================
 */

import {
    createContext,
    useContext,
    useMemo,
    type ReactNode,
} from "react";

import {
    useOverlay,
} from "@/atoms/shared/Overlay/_internal";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface DismissableLayerContextValue {

    /**
     * @deprecated
     * Registration is now handled automatically by useDismissableLayer().
     */
    registerLayer(
        element: HTMLElement,
    ): void;

    /**
     * @deprecated
     * Registration is now handled automatically by useDismissableLayer().
     */
    unregisterLayer(
        element: HTMLElement,
    ): void;

    /**
     * Returns true if the supplied element represents the current
     * top-most overlay.
     */
    isTopLayer(
        element: HTMLElement,
    ): boolean;

    /**
     * Returns the current top-most overlay element.
     */
    getTopLayer():
        | HTMLElement
        | undefined;

    /**
     * Number of registered overlays.
     */
    readonly layerCount: number;

    /**
     * Pointer-event disabling is now managed by Overlay Runtime.
     */
    readonly disableOutsidePointerEvents: boolean;

    /**
     * @deprecated
     * No-op. Managed by ScrollLockManager / PointerManager.
     */
    setDisableOutsidePointerEvents(
        value: boolean,
    ): void;

}

const DismissableLayerContext =
    createContext<
        DismissableLayerContextValue | undefined
    >(undefined);

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function DismissableLayerProvider({

    children,

}: {

    children: ReactNode;

}) {

    const {

        overlays,

        topOverlay,

    } = useOverlay();

    const value =
        useMemo<DismissableLayerContextValue>(() => ({

            registerLayer() {

                /**
                 * Compatibility no-op.
                 * Registration is handled by OverlayController.
                 */

            },

            unregisterLayer() {

                /**
                 * Compatibility no-op.
                 */

            },

            isTopLayer(element) {

                return (
                    topOverlay?.element === element
                );

            },

            getTopLayer() {

                return topOverlay?.element;

            },

            layerCount: overlays.length,

            disableOutsidePointerEvents: false,

            setDisableOutsidePointerEvents() {

                /**
                 * Runtime-managed.
                 */

            },

        }), [

            overlays,
            topOverlay,

        ]);

    return (

        <DismissableLayerContext.Provider
            value={value}
        >

            {children}

        </DismissableLayerContext.Provider>

    );

}

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useDismissableLayerContext() {

    const context =
        useContext(
            DismissableLayerContext,
        );

    if (!context) {

        throw new Error(

            "DismissableLayer must be used inside DismissableLayerProvider.",

        );

    }

    return context;

}

export default DismissableLayerContext;
