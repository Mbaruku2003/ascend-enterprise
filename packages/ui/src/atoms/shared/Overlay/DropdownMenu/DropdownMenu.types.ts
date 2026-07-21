/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * Dropdown Menu Types
 * ============================================================================
 */

import type {
    ReactNode,
} from "react";

import type {
    MenuContentProps,
    MenuTriggerProps,
    MenuItemProps,
    MenuCheckboxItemProps,
    MenuRadioGroupProps,
    MenuRadioItemProps,
    MenuSubProps,
} from "../../Navigation/Menu";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface DropdownMenuRootProps {

    children?: ReactNode;

    open?: boolean;

    defaultOpen?: boolean;

    onOpenChange?(
        open: boolean,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Aliases                                                                    */
/* -------------------------------------------------------------------------- */

export type DropdownMenuTriggerProps =
    MenuTriggerProps;

export type DropdownMenuContentProps =
    MenuContentProps;

export type DropdownMenuItemProps =
    MenuItemProps;

export type DropdownMenuCheckboxItemProps =
    MenuCheckboxItemProps;

export type DropdownMenuRadioGroupProps =
    MenuRadioGroupProps;

export type DropdownMenuRadioItemProps =
    MenuRadioItemProps;

export type DropdownMenuSubProps =
    MenuSubProps;
