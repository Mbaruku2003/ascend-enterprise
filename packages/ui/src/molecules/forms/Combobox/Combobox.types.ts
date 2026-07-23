/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: Combobox.types.ts
 *
 * Enterprise Form Combobox types.
 *
 * This component composes the shared overlay primitives and provides
 * searchable, asynchronous, accessible form selection.
 *
 * ============================================================================
 */

import type {
    ComponentPropsWithoutRef,
    ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Primitive Types                                                            */
/* -------------------------------------------------------------------------- */

export type ComboboxValue = string;

export interface ComboboxOption {

    /**
     * Unique value.
     */
    value: ComboboxValue;

    /**
     * Display label.
     */
    label: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Optional icon/avatar.
     */
    icon?: ReactNode;

    /**
     * Disabled option.
     */
    disabled?: boolean;

    /**
     * Optional grouping.
     */
    group?: string;

    /**
     * Arbitrary metadata.
     */
    metadata?: Record<string, unknown>;

}

/* -------------------------------------------------------------------------- */
/* Search                                                                     */
/* -------------------------------------------------------------------------- */

export interface ComboboxFilterContext {

    search: string;

}

export type ComboboxFilter = (

    option: ComboboxOption,

    context: ComboboxFilterContext,

) => boolean;

export type ComboboxSearchHandler = (

    value: string,

) => void | Promise<void>;

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

export interface FormComboboxValidation {

    invalid?: boolean;

    error?: ReactNode;

    description?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormComboboxLabelOptions {

    label?: ReactNode;

    required?: boolean;

    labelSuffix?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface FormComboboxProps
    extends
        ComponentPropsWithoutRef<"div">,
        FormComboboxValidation,
        FormComboboxLabelOptions {

    /**
     * Current value.
     */
    value?: ComboboxValue;

    /**
     * Default value.
     */
    defaultValue?: ComboboxValue;

    /**
     * Available options.
     */
    options: readonly ComboboxOption[];

    /**
     * Value change callback.
     */
    onValueChange?(
        value: ComboboxValue,
    ): void;

    /**
     * Search callback.
     *
     * Used for async searching.
     */
    onSearch?: ComboboxSearchHandler;

    /**
     * Custom filtering.
     */
    filter?: ComboboxFilter;

    /**
     * Placeholder.
     */
    placeholder?: string;

    /**
     * Search placeholder.
     */
    searchPlaceholder?: string;

    /**
     * Empty state.
     */
    emptyMessage?: ReactNode;

    /**
     * Loading state.
     */
    loading?: boolean;

    /**
     * Disabled.
     */
    disabled?: boolean;

    /**
     * Read-only.
     */
    readOnly?: boolean;

    /**
     * Clearable.
     */
    clearable?: boolean;

    /**
     * Form name.
     */
    name?: string;

    /**
     * Input id.
     */
    id?: string;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface ComboboxInputProps
    extends ComponentPropsWithoutRef<"input"> {}

/* -------------------------------------------------------------------------- */
/* List                                                                       */
/* -------------------------------------------------------------------------- */

export interface ComboboxListProps
    extends ComponentPropsWithoutRef<"div"> {}

/* -------------------------------------------------------------------------- */
/* Option                                                                     */
/* -------------------------------------------------------------------------- */

export interface ComboboxOptionProps
    extends ComponentPropsWithoutRef<"button"> {

    option: ComboboxOption;

}

/* -------------------------------------------------------------------------- */
/* Empty                                                                      */
/* -------------------------------------------------------------------------- */

export interface ComboboxEmptyProps
    extends ComponentPropsWithoutRef<"div"> {}

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export interface ComboboxLoadingProps
    extends ComponentPropsWithoutRef<"div"> {}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormComboboxLabelProps
    extends ComponentPropsWithoutRef<"label"> {

    required?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Description                                                                */
/* -------------------------------------------------------------------------- */

export interface FormComboboxDescriptionProps
    extends ComponentPropsWithoutRef<"p"> {}

/* -------------------------------------------------------------------------- */
/* Error                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormComboboxErrorProps
    extends ComponentPropsWithoutRef<"p"> {}
