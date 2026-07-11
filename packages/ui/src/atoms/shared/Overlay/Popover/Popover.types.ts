/**
 * ============================================================================
 * Ascend UI
 * Popover Types
 * ============================================================================
 */

import type {
    Dispatch,
    ReactNode,
    RefObject,
    SetStateAction,
} from "react";

export type PopoverPlacement =
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

export interface PopoverProps {

    children: ReactNode;

    /**
     * Controlled state.
     */
    open?: boolean;

    /**
     * Uncontrolled state.
     */
    defaultOpen?: boolean;

    /**
     * Open state callback.
     */
    onOpenChange?(
        open: boolean,
    ): void;

    /**
     * Render in Portal.
     */
    portal?: boolean;

    /**
     * Placement.
     */
    placement?: PopoverPlacement;

    /**
     * Gap between trigger and content.
     */
    offset?: number;

}
export interface PopoverContextValue {

    open: boolean;

    setOpen: Dispatch<
        SetStateAction<boolean>
    >;

    openPopover(): void;

    closePopover(): void;

    togglePopover(): void;

    portal: boolean;

    placement: PopoverPlacement;

    offset: number;

    triggerRef: RefObject<HTMLElement>;

    anchorRef: RefObject<HTMLElement>;

    contentRef: RefObject<HTMLDivElement>;

}
