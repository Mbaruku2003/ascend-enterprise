/**
 * ============================================================================
 * Ascend Enterprise UI
 * Dismissable Layer
 * ----------------------------------------------------------------------------
 * File: DismissableLayer.tsx
 *
 * Thin React wrapper around useDismissableLayer().
 *
 * All overlay registration is delegated to the Overlay Engine.
 * All browser interaction is delegated to Overlay Runtime services.
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    useDismissableLayer,
} from "./useDismissableLayer";

import type {
    DismissableLayerProps,
} from "./DismissableLayer.types";

export const DismissableLayer =
    forwardRef<
        HTMLDivElement,
        DismissableLayerProps
    >(function DismissableLayer(

        props,

        forwardedRef,

    ) {

        const {

            children,

            ref,

            props: domProps,

        } =
            useDismissableLayer(

                props,

                forwardedRef,

            );

        return (

            <div

                ref={ref}

                {...domProps}

            >

                {children}

            </div>

        );

    });

DismissableLayer.displayName =
    "DismissableLayer";

export default DismissableLayer;
