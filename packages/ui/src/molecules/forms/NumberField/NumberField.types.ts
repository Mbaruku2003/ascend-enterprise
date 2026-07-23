/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberField.types.ts
 *
 * Shared types for the enterprise NumberField component.
 *
 * ============================================================================
 */

import type {
    ButtonHTMLAttributes,
    Dispatch,
    InputHTMLAttributes,
    ReactNode,
    RefObject,
    SetStateAction,
} from "react";

import type {
    InputProps,
} from "@/atoms/forms/Input";

/* -------------------------------------------------------------------------- */
/* Parser / Formatter                                                         */
/* -------------------------------------------------------------------------- */

export type NumberParser = (
    value: string,
) => number | null;

export type NumberFormatter = (
    value: number | null,
) => string;

/* -------------------------------------------------------------------------- */
/* Shared Configuration                                                       */
/* -------------------------------------------------------------------------- */

export interface NumberFieldOptions {

    /**
     * Controlled value.
     */
    value?: number | null;

    /**
     * Initial uncontrolled value.
     */
    defaultValue?: number | null;

    /**
     * Called whenever the value changes.
     */
    onValueChange?(
        value: number | null,
    ): void;

    /**
     * Minimum allowed value.
     */
    min?: number;

    /**
     * Maximum allowed value.
     */
    max?: number;

    /**
     * Increment / decrement amount.
     *
     * @default 1
     */
    step?: number;

    /**
     * Decimal precision.
     *
     * Undefined preserves full precision.
     */
    precision?: number;

    /**
     * Enables mouse wheel incrementing.
     *
     * @default false
     */
    enableWheel?: boolean;

    /**
     * Custom parser.
     */
    parse?: NumberParser;

    /**
     * Custom formatter.
     */
    format?: NumberFormatter;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface NumberFieldProps
    extends Omit<
        InputProps,
        | "type"
        | "value"
        | "defaultValue"
        | "onChange"
    >,
    NumberFieldOptions {

    /**
     * Displays increment/decrement controls.
     *
     * @default true
     */
    showControls?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface NumberFieldProviderProps
    extends NumberFieldOptions {

    children?: ReactNode;

    /**
     * Whether the field is disabled.
     */
    disabled?: boolean;

    /**
     * Whether the field is read-only.
     */
    readOnly?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime State                                                              */
/* -------------------------------------------------------------------------- */

export interface NumberFieldState {

    /**
     * Current numeric value.
     */
    value: number | null;

}

/* -------------------------------------------------------------------------- */
/* Runtime Configuration                                                      */
/* -------------------------------------------------------------------------- */

export interface NumberFieldConfiguration {

    /**
     * Minimum allowed value.
     */
    min?: number;

    /**
     * Maximum allowed value.
     */
    max?: number;

    /**
     * Increment / decrement amount.
     */
    step: number;

    /**
     * Decimal precision.
     */
    precision?: number;

    /**
     * Enables mouse wheel support.
     */
    enableWheel: boolean;

    /**
     * Disabled state.
     */
    disabled: boolean;

    /**
     * Read-only state.
     */
    readOnly: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime Actions                                                            */
/* -------------------------------------------------------------------------- */

export interface NumberFieldActions {

    /**
     * Increments the current value.
     */
    increment(): void;

    /**
     * Decrements the current value.
     */
    decrement(): void;

    /**
     * Clamps a value to the configured bounds.
     */
    clamp(
        value: number | null,
    ): number | null;

    /**
     * Parses a string into a numeric value.
     */
    parse(
        value: string,
    ): number | null;

    /**
     * Formats a numeric value for display.
     */
    format(
        value: number | null,
    ): string;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface NumberFieldContextValue
    extends
        NumberFieldState,
        NumberFieldConfiguration,
        NumberFieldActions {

    /**
     * Shared input reference.
     */
    inputRef: RefObject<HTMLInputElement | null>;

    /**
     * Updates the current value.
     */
    setValue: Dispatch<
        SetStateAction<number | null>
    >;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface NumberInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type"
    > {}

/* -------------------------------------------------------------------------- */
/* Increment                                                                  */
/* -------------------------------------------------------------------------- */

export interface NumberIncrementProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * Accessible label.
     */
    label?: string;

}

/* -------------------------------------------------------------------------- */
/* Decrement                                                                  */
/* -------------------------------------------------------------------------- */

export interface NumberDecrementProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * Accessible label.
     */
    label?: string;

}
