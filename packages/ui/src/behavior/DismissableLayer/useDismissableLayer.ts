/**
 * ============================================================================
 * Ascend Enterprise UI
 * Dismissable Layer
 * ----------------------------------------------------------------------------
 * File: useDismissableLayer.ts
 *
 * React hook that connects DismissableLayer to the Overlay Engine.
 *
 * Responsibilities:
 *
 * • Register the layer with the Overlay Engine
 * • Unregister on unmount
 * • Merge refs
 * • Expose the DOM ref
 *
 * Browser interaction (Escape, pointer outside, focus outside) is handled by
 * Overlay Runtime services.
 * ============================================================================
 */

import {
    useEffect,
    useMemo,
    useRef,
    type Ref,
} from "react";

import { useMergedRefs } from "@/hooks";

import { useOverlay } from "@/atoms/shared/Overlay/_internal";

import type {
    DismissableLayerProps,
} from "./DismissableLayer.types";

export interface UseDismissableLayerResult {

    /**
     * Ref that should be attached to the root element.
     */
    ref: Ref<HTMLDivElement>;

    /**
     * Props to spread onto the root element.
     */
    props: React.HTMLAttributes<HTMLDivElement>;

    /**
     * Underlying DOM node.
     */
    element: HTMLDivElement | null;

}

export function useDismissableLayer(
    props: DismissableLayerProps,
    forwardedRef?: Ref<HTMLDivElement>,
): UseDismissableLayerResult {

    const {

        disabled = false,

        ...domProps

    } = props;

    const {

        store,

    } = useOverlay();

    const localRef =
        useRef<HTMLDivElement>(null);

    const ref =
        useMergedRefs(
            forwardedRef,
            localRef,
        );

    /**
     * Register with Overlay Engine.
     */
    useEffect(() => {

        if (disabled) {

            return;

        }

        const element =
            localRef.current;

        if (!element) {

            return;

        }

        /**
         * Temporary registration.
         *
         * This will later become:
         *
         * controller.register(...)
         *
         * once OverlayController exposes the public registration API for
         * DismissableLayer.
         */
        const overlay =
            store.register({

                element,

                type: "dismissable-layer",

                open: true,

            } as any);

        return () => {

            store.unregister(
                overlay.id,
            );

        };

    }, [

        disabled,
        store,

    ]);

    return useMemo(

        () => ({

            ref,

            props: domProps,

            element:
                localRef.current,

        }),

        [

            ref,
            domProps,

        ],

    );

}

export default useDismissableLayer;
