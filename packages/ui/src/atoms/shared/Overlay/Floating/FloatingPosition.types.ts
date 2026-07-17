/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating Positioning Engine
 * ----------------------------------------------------------------------------
 * File: FloatingPosition.types.ts
 *
 * Shared types used by every floating component.
 *
 * Consumers:
 *
 * • Popover
 * • Menu
 * • DropdownMenu
 * • Tooltip
 * • HoverCard
 * • Select
 * • Combobox
 *
 * ============================================================================
 */

import type {
    CSSProperties,
    RefObject,
} from "react";

import type {
    FloatingVirtualElement,
} from "./FloatingVirtualElement";

/* -------------------------------------------------------------------------- */
/* Placement                                                                  */
/* -------------------------------------------------------------------------- */

export type FloatingSide =
    | "top"
    | "right"
    | "bottom"
    | "left";

export type FloatingAlignment =
    | "start"
    | "center"
    | "end";

export type FloatingPlacement =
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";

/* -------------------------------------------------------------------------- */
/* Position Strategy                                                          */
/* -------------------------------------------------------------------------- */

export type FloatingStrategy =
    | "absolute"
    | "fixed";

/* -------------------------------------------------------------------------- */
/* Collision Handling                                                         */
/* -------------------------------------------------------------------------- */

export interface FloatingCollisionPadding {

    top?: number;

    right?: number;

    bottom?: number;

    left?: number;

}

export interface FloatingCollisionBoundary {

    element?: HTMLElement;

    padding?: number | FloatingCollisionPadding;

}

/* -------------------------------------------------------------------------- */
/* Hook Options                                                               */
/* -------------------------------------------------------------------------- */

export interface UseFloatingPositionOptions {

/**
 * Anchor element.
 *
 * Used for normal floating components such as
 * Popover, Menu, Tooltip, etc.
 */
anchorRef?: RefObject<HTMLElement>;

/**
 * Virtual anchor.
 *
 * Used by components that position relative to an
 * arbitrary point on the screen (ContextMenu,
 * text selection, canvas nodes, etc.).
 */
virtualAnchor?: FloatingVirtualElement;	
    /**
     * Floating element.
     */
    floatingRef: RefObject<HTMLElement>;

    /**
     * Placement.
     */
    placement?: FloatingPlacement;

    /**
     * Main axis offset.
     */
    offset?: number;

    /**
     * Cross-axis offset.
     */
    crossOffset?: number;

    /**
     * Position strategy.
     */
    strategy?: FloatingStrategy;

    /**
     * Automatically update position while mounted.
     */
    autoUpdate?: boolean;

    /**
     * Collision detection.
     */
    collisionBoundary?: FloatingCollisionBoundary;

}

/* -------------------------------------------------------------------------- */
/* Position                                                                   */
/* -------------------------------------------------------------------------- */

export interface FloatingPosition {

    x: number;

    y: number;

    placement: FloatingPlacement;

    strategy: FloatingStrategy;

}

/* -------------------------------------------------------------------------- */
/* Hook Result                                                                */
/* -------------------------------------------------------------------------- */

export interface UseFloatingPositionResult {

    /**
     * Inline style applied to the floating element.
     */
    style: CSSProperties;

    /**
     * Current computed position.
     */
    position: FloatingPosition;

    /**
     * Forces a recalculation.
     */
    update(): void;

}
