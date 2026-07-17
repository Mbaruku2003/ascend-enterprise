/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip
 * ----------------------------------------------------------------------------
 * File: TooltipPortal.tsx
 *
 * Portal wrapper for Tooltip.
 *
 * ============================================================================
 */

import type {
    PropsWithChildren,
    ReactElement,
} from "react";

import {
    Portal,
} from "@/atoms/shared/Overlay";

import {
    DEFAULT_TOOLTIP_PORTAL,
} from "./Tooltip.constants";

export interface TooltipPortalProps
    extends PropsWithChildren {

    /**
     * Whether to render inside a Portal.
     */
    portal?: boolean;

    /**
     * Optional portal container.
     */
    container?: HTMLElement | null;

}

export function TooltipPortal({

    portal = DEFAULT_TOOLTIP_PORTAL,

    container,

    children,

}: TooltipPortalProps): ReactElement {

    if (!portal) {

        return <>{children}</>;

    }

    return (

        <Portal container={container}>

            {children}

        </Portal>

    );

}

TooltipPortal.displayName =
    "TooltipPortal";

export default TooltipPortal;
