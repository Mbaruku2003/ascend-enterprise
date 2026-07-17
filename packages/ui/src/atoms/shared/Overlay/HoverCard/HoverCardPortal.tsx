/**
 * ============================================================================
 * Ascend Enterprise UI
 * HoverCard Portal
 * ============================================================================
 */

import type {
    PropsWithChildren,
} from "react";

import {
    Portal,
} from "@/atoms/shared/Overlay";

import {
    DEFAULT_HOVERCARD_PORTAL,
} from "./HoverCard.constants";

export interface HoverCardPortalProps
extends PropsWithChildren {

    portal?: boolean;

    container?: HTMLElement | null;

}

export function HoverCardPortal({

    portal = DEFAULT_HOVERCARD_PORTAL,

    container,

    children,

}: HoverCardPortalProps) {

    if (!portal) {

        return <>{children}</>;

    }

    return (

        <Portal container={container}>

            {children}

        </Portal>

    );

}

export default HoverCardPortal;
