/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: HoverCard.types.ts
 *
 * Public type definitions for HoverCard.
 *
 * ============================================================================
 */

import type {
    HTMLAttributes,
    ReactNode,
    RefObject,
} from "react";

/* -------------------------------------------------------------------------- */
/* Placement                                                                  */
/* -------------------------------------------------------------------------- */

export type HoverCardPlacement =
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface HoverCardRootProps {

    children?: ReactNode;

    open?: boolean;

    defaultOpen?: boolean;

    onOpenChange?(
        open: boolean,
    ): void;

    /**
     * Delay before opening.
     *
     * Default: 700ms
     */
    openDelay?: number;

    /**
     * Delay before closing.
     *
     * Default: 300ms
     */
    closeDelay?: number;

}

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

export interface HoverCardTriggerProps
    extends HTMLAttributes<HTMLElement> {

    asChild?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export interface HoverCardContentProps
    extends HTMLAttributes<HTMLDivElement> {

    placement?: HoverCardPlacement;

    offset?: number;

    collisionPadding?: number;

    forceMount?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Arrow                                                                      */
/* -------------------------------------------------------------------------- */

export interface HoverCardArrowProps
    extends HTMLAttributes<HTMLDivElement> {

    size?: number;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface HoverCardProviderProps {

    children?: ReactNode;

    openDelay?: number;

    closeDelay?: number;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface HoverCardContextValue {

    open: boolean;

    setOpen(
        open: boolean,
    ): void;

    openDelay: number;

    closeDelay: number;

    triggerRef:
        RefObject<HTMLElement | null>;

    contentRef:
        RefObject<HTMLDivElement | null>;

    openCard(): void;

    closeCard(): void;

    toggleCard(): void;

}
