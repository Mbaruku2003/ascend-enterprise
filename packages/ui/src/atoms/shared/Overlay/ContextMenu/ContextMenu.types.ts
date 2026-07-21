/**
 * ============================================================================
 * Ascend Enterprise UI
 * Context Menu Types
 * ============================================================================
 */

import type { ReactNode } from "react";

import type {
    MenuContentProps,
    MenuTriggerProps,
    MenuItemProps,
    MenuCheckboxItemProps,
    MenuRadioGroupProps,
    MenuRadioItemProps,
    MenuSubProps,
} from "../../Navigation/Menu";

export interface ContextMenuRootProps {

    children?: ReactNode;

    open?: boolean;

    defaultOpen?: boolean;

    onOpenChange?(
        open: boolean,
    ): void;

}

export type ContextMenuTriggerProps =
    MenuTriggerProps;

export type ContextMenuContentProps =
    MenuContentProps;

export type ContextMenuItemProps =
    MenuItemProps;

export type ContextMenuCheckboxItemProps =
    MenuCheckboxItemProps;

export type ContextMenuRadioGroupProps =
    MenuRadioGroupProps;

export type ContextMenuRadioItemProps =
    MenuRadioItemProps;

export type ContextMenuSubProps =
    MenuSubProps;
