/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: List.types.ts
 *
 * Shared types used by every list-based component.
 *
 * Consumers:
 *
 * • Menu
 * • DropdownMenu
 * • ContextMenu
 * • Select
 * • Combobox
 * • Command Palette
 * • TreeView (future)
 * • File Explorer (future)
 *
 * ============================================================================
 */

import type {
    AriaRole,
    HTMLAttributes,
    ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Orientation                                                                */
/* -------------------------------------------------------------------------- */

export type ListOrientation =
    | "vertical"
    | "horizontal";

/* -------------------------------------------------------------------------- */
/* List                                                                       */
/* -------------------------------------------------------------------------- */

export interface ListProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * List contents.
     */
    children?: ReactNode;

    /**
     * Accessible role.
     *
     * Examples:
     * - menu
     * - listbox
     * - tree
     * - treegrid
     * - presentation
     *
     * @default "presentation"
     */
    role?: AriaRole;

    /**
     * Logical orientation.
     *
     * Used by keyboard navigation.
     *
     * @default "vertical"
     */
    orientation?: ListOrientation;

}

/* -------------------------------------------------------------------------- */
/* List Item                                                                  */
/* -------------------------------------------------------------------------- */

export interface ListItemProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Disabled state.
     */
    disabled?: boolean;

    /**
     * Highlighted (focused) item.
     */
    highlighted?: boolean;

    /**
     * Selected item.
     */
    selected?: boolean;

    /**
     * Additional leading indentation.
     */
    inset?: boolean;

    /**
     * Destructive styling.
     */
    destructive?: boolean;

    /**
     * Whether this item participates in keyboard navigation.
     *
     * @default true
     */
    focusable?: boolean;

    /**
     * Item content.
     */
    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* List Group                                                                 */
/* -------------------------------------------------------------------------- */

export interface ListGroupProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* List Label                                                                 */
/* -------------------------------------------------------------------------- */

export interface ListLabelProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Empty State                                                                */
/* -------------------------------------------------------------------------- */

export interface ListEmptyProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Loading State                                                              */
/* -------------------------------------------------------------------------- */

export interface ListLoadingProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Loading state.
     *
     * @default true
     */
    loading?: boolean;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

export interface ListSeparatorProps
    extends HTMLAttributes<HTMLHRElement> {}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export interface ListFooterProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}
