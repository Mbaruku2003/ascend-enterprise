/**
 * ============================================================================
 * Ascend UI
 * Drawer Types
 * ============================================================================
 */

import type {
    Dispatch,
    ReactNode,
    RefObject,
    SetStateAction,
} from "react";

export type DrawerPlacement =
    | "left"
    | "right"
    | "top"
    | "bottom";

export type DrawerSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "full";

export interface DrawerProps {

    children: ReactNode;

    /**
     * Controlled open state.
     */
    open?: boolean;

    /**
     * Uncontrolled default state.
     */
    defaultOpen?: boolean;

    /**
     * Fired when the open state changes.
     */
    onOpenChange?(
        open: boolean,
    ): void;

    /**
     * Render inside a portal.
     */
    portal?: boolean;

    /**
     * Drawer placement.
     */
    placement?: DrawerPlacement;

    /**
     * Drawer size.
     */
    size?: DrawerSize;

}

export interface DrawerContextValue {

    open: boolean;

    setOpen: Dispatch<
        SetStateAction<boolean>
    >;

    openDrawer(): void;

    closeDrawer(): void;

    toggleDrawer(): void;

    portal: boolean;

    placement: DrawerPlacement;

    size: DrawerSize;

    triggerRef: RefObject<HTMLElement>;

    contentRef: RefObject<HTMLDivElement>;

    titleId: string;

    descriptionId: string;

}
