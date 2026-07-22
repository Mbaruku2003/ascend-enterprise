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
    HTMLAttributes,
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
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface NumberFieldProps
    extends Omit<
        InputProps,
        "type" | "value" | "defaultValue" | "onChange"
    > {

    /**
     * Controlled numeric value.
     */
    value?: number | null;

    /**
     * Uncontrolled initial value.
     */
    defaultValue?: number | null;

    /**
     * Value change callback.
     */
    onValueChange?(
        value: number | null,
    ): void;

    /**
     * Smallest allowed value.
     */
    min?: number;

    /**
     * Largest allowed value.
     */
    max?: number;

    /**
     * Increment/decrement amount.
     *
     * @default 1
     */
    step?: number;

    /**
     * Decimal precision.
     */
    precision?: number;

    /**
     * Displays increment/decrement controls.
     *
     * @default true
     */
    showControls?: boolean;

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
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface NumberFieldProviderProps {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface NumberFieldContextValue {

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    value: number | null;

    min?: number;

    max?: number;

    step: number;

    precision?: number;

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    inputRef: RefObject<HTMLInputElement | null>;

    /* ---------------------------------------------------------------------- */
    /* State Setters                                                          */
    /* ---------------------------------------------------------------------- */

    setValue: Dispatch<
        SetStateAction<number | null>
    >;

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    increment(): void;

    decrement(): void;

    clamp(
        value: number | null,
    ): number | null;

    parse(
        value: string,
    ): number | null;

    format(
        value: number | null,
    ): string;

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

    label?: string;

}

/* -------------------------------------------------------------------------- */
/* Decrement                                                                  */
/* -------------------------------------------------------------------------- */

export interface NumberDecrementProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    label?: string;

}

/* -------------------------------------------------------------------------- */
/* Controls                                                                   */
/* -------------------------------------------------------------------------- */

export interface NumberControlsProps
    extends HTMLAttributes<HTMLDivElement> {}
