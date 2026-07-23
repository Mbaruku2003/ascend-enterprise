/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInputProvider.tsx
 *
 * Enterprise runtime for OTPInput.
 *
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

import type {
    SetStateAction,
} from "react";

import OTPInputContext from "./OTPInputContext";

import type {
    OTPInputMode,
    OTPInputProviderProps,
    OTPValue,
} from "./OTPInput.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

const DEFAULT_LENGTH = 6;

const DEFAULT_MODE: OTPInputMode =
    "numeric";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function createOTPArray(
    length: number,
): OTPValue {

    return Array.from(

        {

            length,

        },

        () => "",

    );

}

function normalizeOTP(

    value: OTPValue | undefined,

    length: number,

): OTPValue {

    const normalized =
        createOTPArray(

            length,

        );

    if (

        !value

    ) {

        return normalized;

    }

    value
        .slice(

            0,

            length,

        )
        .forEach(

            (

                character,

                index,

            ) => {

                normalized[index] =
                    character;

            },

        );

    return normalized;

}

function isValidCharacter(

    value: string,

    mode: OTPInputMode,

): boolean {

    switch (

        mode

    ) {

        case "numeric":

            return /^[0-9]$/.test(

                value,

            );

        case "alphanumeric":

            return /^[a-z0-9]$/i.test(

                value,

            );

        case "text":

            return value.length === 1;

        default:

            return false;

    }

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function OTPInputProvider({

    children,

    value: controlledValue,

    defaultValue,

    onValueChange,

    length = DEFAULT_LENGTH,

    mode = DEFAULT_MODE,

    password = false,

    autoFocus = false,

    clearOnFocus = false,

    disabled = false,

    readOnly = false,

}: OTPInputProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Controlled / Uncontrolled                                              */
    /* ---------------------------------------------------------------------- */

    const isControlled =

        controlledValue !== undefined;

    const [

        uncontrolledValue,

        setUncontrolledValue,

    ] = useState<OTPValue>(

        normalizeOTP(

            defaultValue,

            length,

        ),

    );

    const value =

        isControlled

            ? normalizeOTP(

                controlledValue,

                length,

            )

            : uncontrolledValue;

    /* ---------------------------------------------------------------------- */
    /* Active Slot                                                            */
    /* ---------------------------------------------------------------------- */

    const [

        activeIndex,

        setActiveIndex,

    ] = useState(0);

    /* ---------------------------------------------------------------------- */
    /* Input Refs                                                             */
    /* ---------------------------------------------------------------------- */

    const inputRefs =
        useMemo(

            () =>

                Array.from(

                    {

                        length,

                    },

                    () =>

                        useRef<HTMLInputElement>(null),

                ),

            [

                length,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Runtime Setter                                                         */
    /* ---------------------------------------------------------------------- */

    const setValue =
        useCallback(

            (

                next: SetStateAction<OTPValue>,

            ) => {

                const resolved =

                    typeof next === "function"

                        ? next(

                            value,

                        )

                        : next;

                const normalized =
                    normalizeOTP(

                        resolved,

                        length,

                    );

                if (

                    !isControlled

                ) {

                    setUncontrolledValue(

                        normalized,

                    );

                }

                onValueChange?.(

                    normalized,

                );

            },

            [

                value,

                length,

                isControlled,

                onValueChange,

            ],

        );
    /* ---------------------------------------------------------------------- */
    /* Focus Management                                                       */
    /* ---------------------------------------------------------------------- */

    const focus =
        useCallback(

            (

                index: number,

            ) => {

                if (

                    disabled ||

                    readOnly

                ) {

                    return;

                }

                const clamped = Math.min(

                    Math.max(

                        index,

                        0,

                    ),

                    length - 1,

                );

                setActiveIndex(

                    clamped,

                );

                inputRefs[clamped]
                    ?.current
                    ?.focus();

            },

            [

                disabled,

                readOnly,

                length,

                inputRefs,

            ],

        );

    const focusNext =
        useCallback(

            () => {

                focus(

                    Math.min(

                        activeIndex + 1,

                        length - 1,

                    ),

                );

            },

            [

                activeIndex,

                focus,

                length,

            ],

        );

    const focusPrevious =
        useCallback(

            () => {

                focus(

                    Math.max(

                        activeIndex - 1,

                        0,

                    ),

                );

            },

            [

                activeIndex,

                focus,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Character Actions                                                      */
    /* ---------------------------------------------------------------------- */

    const setCharacter =
        useCallback(

            (

                index: number,

                character: string,

            ) => {

                if (

                    disabled ||

                    readOnly

                ) {

                    return;

                }

                if (

                    character.length === 0

                ) {

                    return;

                }

                character =
                    character.charAt(0);

                if (

                    !isValidCharacter(

                        character,

                        mode,

                    )

                ) {

                    return;

                }

                setValue(

                    previous => {

                        const next = [

                            ...previous,

                        ];

                        next[index] =
                            character;

                        return next;

                    },

                );

                if (

                    index < length - 1

                ) {

                    requestAnimationFrame(

                        () =>

                            focus(

                                index + 1,

                            ),

                    );

                }

            },

            [

                disabled,

                readOnly,

                mode,

                setValue,

                focus,

                length,

            ],

        );

    const clearCharacter =
        useCallback(

            (

                index: number,

            ) => {

                setValue(

                    previous => {

                        const next = [

                            ...previous,

                        ];

                        next[index] =
                            "";

                        return next;

                    },

                );

            },

            [

                setValue,

            ],

        );

    const clear =
        useCallback(

            () => {

                setValue(

                    createOTPArray(

                        length,

                    ),

                );

                requestAnimationFrame(

                    () =>

                        focus(

                            0,

                        ),

                );

            },

            [

                length,

                setValue,

                focus,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Paste                                                                  */
    /* ---------------------------------------------------------------------- */

    const paste =
        useCallback(

            (

                pasted: string,

            ) => {

                if (

                    disabled ||

                    readOnly

                ) {

                    return;

                }

                const characters =
                    pasted

                        .split("")

                        .filter(

                            character =>

                                isValidCharacter(

                                    character,

                                    mode,

                                ),

                        )

                        .slice(

                            0,

                            length,

                        );

                const next =
                    createOTPArray(

                        length,

                    );

                characters.forEach(

                    (

                        character,

                        index,

                    ) => {

                        next[index] =
                            character;

                    },

                );

                setValue(

                    next,

                );

                requestAnimationFrame(

                    () =>

                        focus(

                            Math.min(

                                characters.length,

                                length - 1,

                            ),

                        ),

                );

            },

            [

                disabled,

                readOnly,

                mode,

                length,

                setValue,

                focus,

            ],

        );


    /* ---------------------------------------------------------------------- */
    /* Context                                                                */
    /* ---------------------------------------------------------------------- */

    const context = useMemo(
        () => ({

            /* -------------------------------------------------------------- */
            /* State                                                          */
            /* -------------------------------------------------------------- */

            value,

            activeIndex,

            /* -------------------------------------------------------------- */
            /* Configuration                                                  */
            /* -------------------------------------------------------------- */

            length,

            mode,

            password,

            autoFocus,

            clearOnFocus,

            disabled,

            readOnly,

            /* -------------------------------------------------------------- */
            /* Runtime                                                        */
            /* -------------------------------------------------------------- */

            inputRefs,

            setValue,

            setActiveIndex,

            /* -------------------------------------------------------------- */
            /* Actions                                                        */
            /* -------------------------------------------------------------- */

            setCharacter,

            clearCharacter,

            clear,

            focus,

            focusNext,

            focusPrevious,

            paste,

        }),

        [

            value,

            activeIndex,

            length,

            mode,

            password,

            autoFocus,

            clearOnFocus,

            disabled,

            readOnly,

            inputRefs,

            setValue,

            setActiveIndex,

            setCharacter,

            clearCharacter,

            clear,

            focus,

            focusNext,

            focusPrevious,

            paste,

        ],

    );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <OTPInputContext.Provider
            value={context}
        >

            {children}

        </OTPInputContext.Provider>

    );

}

OTPInputProvider.displayName =
    "OTPInputProvider";

export default OTPInputProvider;
