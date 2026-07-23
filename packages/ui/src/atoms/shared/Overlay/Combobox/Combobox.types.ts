/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: Combobox.types.ts
 *
 * Shared Combobox types.
 *
 * ============================================================================
 */

import type {
    HTMLAttributes,
    ReactNode,
    RefObject,
} from "react";

import type {
    FloatingPlacement,
} from "../Floating/FloatingPosition.types";

import type {
    SelectCollection,
} from "../Select/SelectCollection";

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export interface ComboboxOption {

    value: string;

    label: ReactNode;

    disabled?: boolean;
    textValue?: string;
    icon?: ReactNode;
    description?: ReactNode;
    group?: string;
    metadata?: Record<string, unknown>;

}

/* -------------------------------------------------------------------------- */
/* Filter                                                                     */
/* -------------------------------------------------------------------------- */

export type ComboboxFilterMode =
    | "prefix"
    | "contains"
    | "fuzzy";

/* -------------------------------------------------------------------------- */
/* Root Props                                                                 */
/* -------------------------------------------------------------------------- */

export interface ComboboxRootProps
    extends HTMLAttributes<HTMLDivElement> {

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

    placeholder?: string;

    disabled?: boolean;

    readOnly?: boolean;

    portal?: boolean;

    placement?: FloatingPlacement;

    offset?: number;

    filterMode?: ComboboxFilterMode;

    children?: ReactNode;
    clearable?: boolean;

    emptyMessage?: ReactNode;

    loading?: boolean;

    loadingMessage?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface ComboboxContextValue {

    value?: string;

    setValue(
        value: string,
    ): void;

    query: string;

    setQuery(
        value: string,
    ): void;

    open: boolean;

    setOpen(
        open: boolean,
    ): void;

    triggerRef:
        RefObject<HTMLElement | null>;

    inputRef:
        RefObject<HTMLInputElement | null>;

    contentRef:
        RefObject<HTMLDivElement | null>;

    placement: FloatingPlacement;

    offset: number;

    portal: boolean;

    disabled: boolean;

    readOnly: boolean;

    filterMode: ComboboxFilterMode;

    collection: SelectCollection;

}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface ComboboxOwnerState {

    open: boolean;

    disabled: boolean;

    readOnly: boolean;

}
