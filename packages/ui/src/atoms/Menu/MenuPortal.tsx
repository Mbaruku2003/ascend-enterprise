/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuPortal.tsx
 *
 * Portal wrapper for Menu.
 *
 * This component delegates rendering to the shared Portal primitive while
 * preserving the Menu API.
 *
 * ============================================================================
 */

import type {
    ReactNode,
} from "react";

import {
    Portal,
} from "@/atoms/shared/Portal";

export interface MenuPortalProps {

    /**
     * Menu content.
     */
    children?: ReactNode;

    /**
     * Whether the portal should be rendered.
     *
     * Defaults to true.
     */
    forceMount?: boolean;

    /**
     * Optional container.
     */
    container?: HTMLElement | null;

}

export function MenuPortal({

    children,

    forceMount = true,

    container,

}: MenuPortalProps) {

    if (!forceMount) {

        return null;

    }

    return (

        <Portal
            container={container}
        >

            {children}

        </Portal>

    );

}

MenuPortal.displayName =
    "MenuPortal";

export default MenuPortal;
