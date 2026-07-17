/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: Tooltip.types.ts
 *
 * Public type definitions for Tooltip.
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

export type TooltipPlacement =
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

export interface TooltipRootProps {

    children?: ReactNode;

    /**
     * Controlled state.
     */
    open?: boolean;

    /**
     * Uncontrolled state.
     */
    defaultOpen?: boolean;

    /**
     * State callback.
     */
    onOpenChange?(
        open: boolean,
    ): void;

    /**
     * Delay before opening.
     */
    delay?: number;

    /**
     * Delay before closing.
     */
    closeDelay?: number;

}

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

export interface TooltipTriggerProps
    extends HTMLAttributes<HTMLElement> {

    asChild?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export interface TooltipContentProps
    extends HTMLAttributes<HTMLDivElement> {

    placement?: TooltipPlacement;

    offset?: number;

    collisionPadding?: number;

    forceMount?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Arrow                                                                      */
/* -------------------------------------------------------------------------- */

export interface TooltipArrowProps
    extends HTMLAttributes<HTMLDivElement> {

    size?: number;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface TooltipProviderProps {

    children?: ReactNode;

    delay?: number;

    closeDelay?: number;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface TooltipContextValue {

    open: boolean;

    setOpen(
        open: boolean,
    ): void;

    delay: number;

    closeDelay: number;

    triggerRef:
        RefObject<HTMLElement | null>;

    contentRef:
        RefObject<HTMLDivElement | null>;

    openTooltip(): void;

    closeTooltip(): void;

    toggleTooltip(): void;

}
