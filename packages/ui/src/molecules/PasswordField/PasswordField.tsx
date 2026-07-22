/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordField.tsx
 *
 * Root component for the enterprise PasswordField.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

import {
    PasswordFieldProvider,
} from "./PasswordFieldProvider";

import {
    PasswordInput,
} from "./PasswordInput";

import {
    PasswordToggle,
} from "./PasswordToggle";

import {
    PasswordStrength,
} from "./PasswordStrength";

import type {
    PasswordFieldProps,
} from "./PasswordField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const PasswordField =
forwardRef<
HTMLDivElement,
PasswordFieldProps
>(

function PasswordField(

{

    className,

    showToggle = true,

    showStrength = false,

    children,

    ...inputProps

},

ref,

) {

    return (

        <PasswordFieldProvider>

            <div

                ref={ref}

                className={cn(

                    "relative",

                    "flex",

                    "w-full",

                    "flex-col",

                    "gap-2",

                    className,

                )}

            >

                <div

                    className="relative"

                >

                    <PasswordInput

                        {...inputProps}

                    />

                    {

                        showToggle && (

                            <PasswordToggle />

                        )

                    }

                </div>

                {

                    showStrength && (

                        <PasswordStrength />

                    )

                }

                {children}

            </div>

        </PasswordFieldProvider>

    );

},

);

PasswordField.displayName =
    "PasswordField";

export default PasswordField;
