/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencyField.types.ts
 *
 * Shared types for the enterprise CurrencyField component.
 *
 * ============================================================================
 */

import type {
    Dispatch,
    InputHTMLAttributes,
    ReactNode,
    RefObject,
    SetStateAction,
} from "react";

/* -------------------------------------------------------------------------- */
/* Core Types                                                                 */
/* -------------------------------------------------------------------------- */

export type CurrencyValue = number | null;

export type CurrencyParser = (
    value: string,
) => CurrencyValue;

export type CurrencyFormatter = (
    value: CurrencyValue,
) => string;

/* -------------------------------------------------------------------------- */
/* Shared Options                                                             */
/* -------------------------------------------------------------------------- */

export interface CurrencyFieldOptions {

    /**
     * Controlled value.
     */
    value?: CurrencyValue;

    /**
     * Initial uncontrolled value.
     */
    defaultValue?: CurrencyValue;

    /**
     * Called whenever the value changes.
     */
    onValueChange?(
        value: CurrencyValue,
    ): void;

    /**
     * ISO 4217 currency code.
     *
     * @default "USD"
     */
    currency?: string;

    /**
     * Locale used by Intl.NumberFormat.
     *
     * @default "en-US"
     */
    locale?: string;

    /**
     * Minimum allowed value.
     */
    min?: number;

    /**
     * Maximum allowed value.
     */
    max?: number;

    /**
     * Number of decimal places.
     *
     * @default 2
     */
    precision?: number;

    /**
     * Step used by increment/decrement.
     *
     * @default 1
     */
    step?: number;

    /**
     * Allow negative values.
     *
     * @default true
     */
    allowNegative?: boolean;

    /**
     * Enable mouse wheel increment/decrement.
     *
     * @default false
     */
    enableWheel?: boolean;

    /**
     * Custom parser.
     */
    parse?: CurrencyParser;

    /**
     * Custom formatter.
     */
    format?: CurrencyFormatter;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface CurrencyFieldProps
    extends CurrencyFieldOptions {

    children?: ReactNode;

    className?: string;

    disabled?: boolean;

    readOnly?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface CurrencyFieldProviderProps
    extends CurrencyFieldOptions {

    children?: ReactNode;

    disabled?: boolean;

    readOnly?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime State                                                              */
/* -------------------------------------------------------------------------- */

export interface CurrencyFieldState {

    value: CurrencyValue;

}

/* -------------------------------------------------------------------------- */
/* Runtime Configuration                                                      */
/* -------------------------------------------------------------------------- */

export interface CurrencyFieldConfiguration {

    currency: string;

    locale: string;

    min?: number;

    max?: number;

    precision: number;

    step: number;

    allowNegative: boolean;

    enableWheel: boolean;

    disabled: boolean;

    readOnly: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime Actions                                                            */
/* -------------------------------------------------------------------------- */

export interface CurrencyFieldActions {

    setValue: Dispatch<
        SetStateAction<CurrencyValue>
    >;

    increment(): void;

    decrement(): void;

    parse: CurrencyParser;

    format: CurrencyFormatter;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface CurrencyFieldContextValue
    extends
        CurrencyFieldState,
        CurrencyFieldConfiguration,
        CurrencyFieldActions {

    inputRef: RefObject<HTMLInputElement | null>;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface CurrencyInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        | "value"
        | "defaultValue"
        | "type"
        | "onChange"
    > {}

/* -------------------------------------------------------------------------- */
/* Prefix                                                                     */
/* -------------------------------------------------------------------------- */

export interface CurrencyPrefixProps {

    children?: ReactNode;

    className?: string;

}

/* -------------------------------------------------------------------------- */
/* Suffix                                                                     */
/* -------------------------------------------------------------------------- */

export interface CurrencySuffixProps {

    children?: ReactNode;

    className?: string;

}
