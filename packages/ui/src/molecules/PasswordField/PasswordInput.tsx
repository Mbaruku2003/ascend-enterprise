/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordInput.tsx
 *
 * Password input for the enterprise PasswordField.
 *
 * Wraps the shared Input component while synchronizing with the
 * PasswordField runtime.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ChangeEvent,
    FocusEvent,
} from "react";

import {
    composeRefs,
} from "@/utils";

import {
    Input,
} from "@/atoms/forms/Input";

import {
    usePasswordField,
} from "./usePasswordField";

import type {
    PasswordInputProps,
} from "./PasswordField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const PasswordInput =
forwardRef<
HTMLInputElement,
PasswordInputProps
>(

function PasswordInput(

{

    onChange,

    onFocus,

    ...props

},

forwardedRef,

) {

    const {

        visible,

        value,

        inputRef,

        setValue,

        evaluateStrength,

    } = usePasswordField();

    /* ---------------------------------------------------------------------- */
    /* Events                                                                 */
    /* ---------------------------------------------------------------------- */

    function handleChange(

        event: ChangeEvent<HTMLInputElement>,

    ) {

        onChange?.(

            event,

        );

        if (

            event.defaultPrevented

        ) {

            return;

        }

        const password =
            event.target.value;

        setValue(

            password,

        );

        evaluateStrength(

            password,

        );

    }

    function handleFocus(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onFocus?.(

            event,

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <Input

            {...props}

            ref={composeRefs(

                forwardedRef,

                inputRef,

            )}

            type={

                visible

                    ? "text"

                    : "password"

            }

            autoComplete={
		props.autoComplete ??
		"current-password"
            }
            spellCheck={false}

            value={value}

            onChange={handleChange}

            onFocus={handleFocus}

        />

    );

},

);

PasswordInput.displayName =
    "PasswordInput";

export default PasswordInput;
