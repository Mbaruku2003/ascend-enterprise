/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordFieldProvider.tsx
 *
 * Provides the shared runtime for the PasswordField component.
 *
 * Owns:
 * • Visibility state
 * • Password value
 * • Password strength
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
    ReactNode,
} from "react";

import PasswordFieldContext from "./PasswordFieldContext";

import type {
    PasswordFieldProviderProps,
    PasswordStrength,
} from "./PasswordField.types";

/* -------------------------------------------------------------------------- */
/* Default Strength Evaluation                                                */
/* -------------------------------------------------------------------------- */

function defaultEvaluateStrength(
    value: string,
): PasswordStrength {

    if (!value) {

        return "empty";

    }

    let score = 0;

    if (value.length >= 8) {

        score++;

    }

    if (/[a-z]/.test(value)) {

        score++;

    }

    if (/[A-Z]/.test(value)) {

        score++;

    }

    if (/\d/.test(value)) {

        score++;

    }

    if (/[^A-Za-z0-9]/.test(value)) {

        score++;

    }

    switch (score) {

        case 0:
        case 1:
            return "weak";

        case 2:
            return "fair";

        case 3:
        case 4:
            return "good";

        case 5:
            return "strong";

        default:
            return "weak";

    }

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function PasswordFieldProvider({

    children,

}: PasswordFieldProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    const inputRef =
        useRef<HTMLInputElement>(null);

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    const [

        visible,

        setVisible,

    ] = useState(false);

    const [

        value,

        setValue,

    ] = useState("");

    const [

        strength,

        setStrength,

    ] = useState<PasswordStrength>("empty");

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    const evaluateStrength =
        useCallback(

            (

                password: string,

            ) => {

                const result =
                    defaultEvaluateStrength(
                        password,
                    );

                setStrength(
                    result,
                );

                return result;

            },

            [],

        );

    const toggleVisibility =
        useCallback(

            () => {

                setVisible(

                    previous => !previous,

                );

            },

            [],

        );

    /* ---------------------------------------------------------------------- */
    /* Context                                                                */
    /* ---------------------------------------------------------------------- */

    const context =
        useMemo(

            () => ({

                visible,

                strength,

                value,

                inputRef,

                setVisible,

                setStrength,

                setValue,

                toggleVisibility,

                evaluateStrength,

            }),

            [

                visible,

                strength,

                value,

                evaluateStrength,

                toggleVisibility,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <PasswordFieldContext.Provider
            value={context}
        >

            {children}

        </PasswordFieldContext.Provider>

    );

}

PasswordFieldProvider.displayName =
    "PasswordFieldProvider";

export default PasswordFieldProvider;
