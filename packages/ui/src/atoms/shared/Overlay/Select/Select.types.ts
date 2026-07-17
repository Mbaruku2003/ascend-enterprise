/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * Select Types
 * ============================================================================
 */

import type {
    ReactNode,
    RefObject,
} from "react";

import type {
    FloatingPlacement,
} from "../Floating/FloatingPosition.types";

import type {
    SelectCollection,
} from "./SelectCollection";

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export interface SelectOption {

    value: string;

    label: ReactNode;

    disabled?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface SelectProps {

    children?: ReactNode;

    value?: string;

    defaultValue?: string;

    onValueChange?(
        value: string,
    ): void;

    open?: boolean;

    defaultOpen?: boolean;

    onOpenChange?(
        open: boolean,
    ): void;

    placement?: FloatingPlacement;

    offset?: number;

    portal?: boolean;

    disabled?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface SelectContextValue {

    value?: string;

    setValue(
        value: string,
    ): void;

    open: boolean;

    setOpen(
        open: boolean,
    ): void;

    triggerRef:
        RefObject<HTMLElement | null>;

    contentRef:
        RefObject<HTMLDivElement | null>;

    placement: FloatingPlacement;

    offset: number;

    portal: boolean;

    disabled: boolean;
    collection: SelectCollection;
}
