/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInput.types.ts
 *
 * Shared types for the enterprise OTPInput component.
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
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type OTPInputMode =
    | "numeric"
    | "alphanumeric"
    | "text";

export type OTPValue = string[];

/* -------------------------------------------------------------------------- */
/* Shared Options                                                             */
/* -------------------------------------------------------------------------- */

export interface OTPInputOptions {

    /**
     * Controlled OTP value.
     */
    value?: OTPValue;

    /**
     * Initial uncontrolled value.
     */
    defaultValue?: OTPValue;

    /**
     * Called whenever the OTP changes.
     */
    onValueChange?(
        value: OTPValue,
    ): void;

    /**
     * Number of OTP slots.
     *
     * @default 6
     */
    length?: number;

    /**
     * Input mode.
     *
     * @default "numeric"
     */
    mode?: OTPInputMode;

    /**
     * Masks entered characters.
     *
     * @default false
     */
    password?: boolean;

    /**
     * Automatically focus the first slot.
     *
     * @default false
     */
    autoFocus?: boolean;

    /**
     * Clears a slot when it receives focus.
     *
     * @default false
     */
    clearOnFocus?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface OTPInputProps
    extends OTPInputOptions {

    children?: ReactNode;

    className?: string;

    disabled?: boolean;

    readOnly?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface OTPInputProviderProps
    extends OTPInputOptions {

    children?: ReactNode;

    disabled?: boolean;

    readOnly?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime State                                                              */
/* -------------------------------------------------------------------------- */

export interface OTPInputState {

    value: OTPValue;

    activeIndex: number;

}

/* -------------------------------------------------------------------------- */
/* Runtime Configuration                                                      */
/* -------------------------------------------------------------------------- */

export interface OTPInputConfiguration {

    length: number;

    mode: OTPInputMode;

    password: boolean;

    autoFocus: boolean;

    clearOnFocus: boolean;

    disabled: boolean;

    readOnly: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime Actions                                                            */
/* -------------------------------------------------------------------------- */

export interface OTPInputActions {

    setValue: Dispatch<
        SetStateAction<OTPValue>
    >;

    setActiveIndex: Dispatch<
        SetStateAction<number>
    >;

    setCharacter(
        index: number,
        value: string,
    ): void;

    clearCharacter(
        index: number,
    ): void;

    clear(): void;

    focus(
        index: number,
    ): void;

    focusNext(): void;

    focusPrevious(): void;

    paste(
        value: string,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface OTPInputContextValue
    extends
        OTPInputState,
        OTPInputConfiguration,
        OTPInputActions {

    inputRefs: RefObject<HTMLInputElement>[];

}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

export interface OTPInputGroupProps {

    children?: ReactNode;

    className?: string;

}

/* -------------------------------------------------------------------------- */
/* Slot                                                                       */
/* -------------------------------------------------------------------------- */

export interface OTPInputSlotProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "value"
        | "defaultValue"
        | "onChange"
        | "type"
    > {

    /**
     * Slot index.
     */
    index: number;

}

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

export interface OTPInputSeparatorProps {

    children?: ReactNode;

    className?: string;

}
