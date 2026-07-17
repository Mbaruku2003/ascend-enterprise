/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: Menu.types.ts
 *
 * Shared types used throughout the Menu system.
 *
 * Components:
 *
 * • MenuRoot
 * • MenuTrigger
 * • MenuContent
 * • MenuItem
 * • MenuCheckboxItem
 * • MenuRadioItem
 * • MenuRadioGroup
 * • MenuSeparator
 * • MenuLabel
 * • MenuGroup
 * • MenuShortcut
 * • MenuSub
 * • MenuSubTrigger
 * • MenuSubContent
 *
 * ============================================================================
 */

import type {
    Dispatch,
    HTMLAttributes,
    MutableRefObject,
    ReactNode,
    SetStateAction,
} from "react";

import type {
    FloatingPlacement,
} from "@/atoms/shared/Overlay/Floating/Floating.types";

/* -------------------------------------------------------------------------- */
/* Enums                                                                      */
/* -------------------------------------------------------------------------- */

export type MenuOrientation =
    | "vertical"
    | "horizontal";

export type MenuDirection =
    | "ltr"
    | "rtl";

export type MenuCheckState =
    | boolean
    | "indeterminate";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface MenuRootProps {

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
     * Called whenever the menu opens or closes.
     */
    onOpenChange?(open: boolean): void;

    /**
     * Whether the menu behaves modally.
     */
    modal?: boolean;

    /**
     * Whether keyboard navigation wraps.
     */
    loop?: boolean;

    /**
     * Menu orientation.
     */
    orientation?: MenuOrientation;

    /**
     * Text direction.
     */
    dir?: MenuDirection;

}

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

export interface MenuTriggerProps
    extends HTMLAttributes<HTMLElement> {

    asChild?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export interface MenuContentProps
    extends HTMLAttributes<HTMLDivElement> {

    placement?: FloatingPlacement;

    offset?: number;

    collisionPadding?: number;

    forceMount?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export interface MenuItemProps
    extends HTMLAttributes<HTMLDivElement> {

    disabled?: boolean;

    inset?: boolean;

    destructive?: boolean;

    onSelect?(): void;

}

/* -------------------------------------------------------------------------- */
/* Checkbox Item                                                              */
/* -------------------------------------------------------------------------- */

export interface MenuCheckboxItemProps
    extends Omit<MenuItemProps, "onSelect"> {

    checked?: MenuCheckState;

    onCheckedChange?(
        checked: MenuCheckState,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Radio                                                                      */
/* -------------------------------------------------------------------------- */

export interface MenuRadioGroupProps {

    children?: ReactNode;

    value?: string;

    onValueChange?(
        value: string,
    ): void;

}

export interface MenuRadioItemProps
    extends MenuItemProps {

    value: string;

}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

export interface MenuGroupProps {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface MenuLabelProps
    extends HTMLAttributes<HTMLDivElement> {

    inset?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

export interface MenuSeparatorProps
    extends HTMLAttributes<HTMLDivElement> {}

/* -------------------------------------------------------------------------- */
/* Shortcut                                                                   */
/* -------------------------------------------------------------------------- */

export interface MenuShortcutProps
    extends HTMLAttributes<HTMLSpanElement> {}

/* -------------------------------------------------------------------------- */
/* Sub Menu                                                                   */
/* -------------------------------------------------------------------------- */

export interface MenuSubProps {

    children?: ReactNode;

    open?: boolean;

    defaultOpen?: boolean;

    onOpenChange?(
        open: boolean,
    ): void;

}

export interface MenuSubTriggerProps
    extends MenuItemProps {}

export interface MenuSubContentProps
    extends MenuContentProps {}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface MenuContextValue {

    open: boolean;

    setOpen: Dispatch<
        SetStateAction<boolean>
    >;

    modal: boolean;

    loop: boolean;

    orientation: MenuOrientation;

    dir: MenuDirection;

    triggerRef:
        MutableRefObject<HTMLElement | null>;

    contentRef:
        MutableRefObject<HTMLDivElement | null>;

    openMenu(): void;

    closeMenu(): void;

    toggleMenu(): void;

}

/* -------------------------------------------------------------------------- */
/* Collection                                                                 */
/* -------------------------------------------------------------------------- */

export interface MenuItemData {

    id: string;

    disabled: boolean;

    ref:
        MutableRefObject<HTMLElement | null>;

}

/* -------------------------------------------------------------------------- */
/* Keyboard                                                                   */
/* -------------------------------------------------------------------------- */

export interface MenuKeyboardOptions {

    loop: boolean;

    orientation: MenuOrientation;

}

/* -------------------------------------------------------------------------- */
/* Selection                                                                  */
/* -------------------------------------------------------------------------- */

export interface MenuSelection {

    activeIndex: number;

    setActiveIndex(
        index: number,
    ): void;

}
