/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordField.types.ts
 *
 * Shared types for the enterprise PasswordField component.
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
/* Strength                                                                   */
/* -------------------------------------------------------------------------- */

export type PasswordStrength =

    | "empty"
    | "weak"
    | "fair"
    | "good"
    | "strong";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface PasswordFieldProps
    extends Omit<
        InputProps,
        "type"
    > {

    /**
     * Controlled visibility state.
     */
    visible?: boolean;

    /**
     * Default visibility.
     */
    defaultVisible?: boolean;

    /**
     * Visibility change callback.
     */
    onVisibleChange?(
        visible: boolean,
    ): void;

    /**
     * Displays the visibility toggle.
     *
     * @default true
     */
    showToggle?: boolean;

    /**
     * Displays the strength meter.
     *
     * @default false
     */
    showStrength?: boolean;

    /**
     * Optional custom strength calculator.
     */
    calculateStrength?(
        value: string,
    ): PasswordStrength;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface PasswordFieldProviderProps {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface PasswordFieldContextValue {

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    visible: boolean;

    strength: PasswordStrength;

    value: string;

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    inputRef: RefObject<HTMLInputElement | null>;

    /* ---------------------------------------------------------------------- */
    /* State Setters                                                          */
    /* ---------------------------------------------------------------------- */

    setVisible: Dispatch<
        SetStateAction<boolean>
    >;

    setStrength: Dispatch<
        SetStateAction<PasswordStrength>
    >;

    setValue: Dispatch<
        SetStateAction<string>
    >;

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    toggleVisibility(): void;

    evaluateStrength(
        value: string,
    ): PasswordStrength;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface PasswordInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type"
    > {}

/* -------------------------------------------------------------------------- */
/* Toggle                                                                     */
/* -------------------------------------------------------------------------- */

export interface PasswordToggleProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * Accessible label.
     */
    label?: string;

}

/* -------------------------------------------------------------------------- */
/* Strength Meter                                                             */
/* -------------------------------------------------------------------------- */

export interface PasswordStrengthProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Override calculated strength.
     */
    strength?: PasswordStrength;

    /**
     * Displays the textual label.
     *
     * @default true
     */
    showLabel?: boolean;

    /**
     * Optional custom labels.
     */
    labels?: Partial<
        Record<
            PasswordStrength,
            ReactNode
        >
    >;

}
