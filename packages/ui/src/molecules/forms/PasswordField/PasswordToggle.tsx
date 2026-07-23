/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordToggle.tsx
 *
 * Visibility toggle for the enterprise PasswordField.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    MouseEvent,
} from "react";

import {
    cn,
} from "@/utils";

import {
    Button,
} from "@/atoms/forms/Button";

import {
    usePasswordField,
} from "./usePasswordField";

import type {
    PasswordToggleProps,
} from "./PasswordField.types";

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function EyeIcon() {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
        >

            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />

            <circle
                cx="12"
                cy="12"
                r="3"
            />

        </svg>

    );

}

function EyeOffIcon() {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
        >

            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.8 21.8 0 0 1 5.06-6.94" />

            <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.86 21.86 0 0 1-3.17 4.69" />

            <path d="M1 1l22 22" />

        </svg>

    );

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const PasswordToggle =
forwardRef<
HTMLButtonElement,
PasswordToggleProps
>(

function PasswordToggle(

{

    className,

    label,

    onClick,

    ...props

},

forwardedRef,

) {

    const {

        visible,

        toggleVisibility,

    } = usePasswordField();

    function handleClick(

        event: MouseEvent<HTMLButtonElement>,

    ) {

        onClick?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        toggleVisibility();

    }

    return (

        <Button

            {...props}

            ref={forwardedRef}

            type="button"

            variant="ghost"

            size="icon"

            aria-label={
                label ??

                (

                    visible

                        ? "Hide password"

                        : "Show password"

                )
            }

            aria-pressed={visible}

            onClick={handleClick}

            className={cn(

                "absolute",

                "right-2",

                "top-1/2",

                "-translate-y-1/2",

                className,

            )}

        >

            {

                visible

                    ? <EyeOffIcon />

                    : <EyeIcon />

            }

        </Button>

    );

},

);

PasswordToggle.displayName =
    "PasswordToggle";

export default PasswordToggle;
