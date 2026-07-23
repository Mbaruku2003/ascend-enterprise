/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordStrength.tsx
 *
 * Displays the calculated password strength.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useMemo,
} from "react";

import {
    cn,
} from "@/utils";

import {
    usePasswordField,
} from "./usePasswordField";

import type {
    PasswordStrength as PasswordStrengthType,
    PasswordStrengthProps,
} from "./PasswordField.types";

/* -------------------------------------------------------------------------- */
/* Strength Configuration                                                     */
/* -------------------------------------------------------------------------- */

const STRENGTH_VALUE: Record<
    PasswordStrengthType,
    number
> = {

    empty: 0,

    weak: 25,

    fair: 50,

    good: 75,

    strong: 100,

};

const DEFAULT_LABELS: Record<
    PasswordStrengthType,
    string
> = {

    empty: "Enter a password",

    weak: "Weak",

    fair: "Fair",

    good: "Good",

    strong: "Strong",

};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const PasswordStrength =
forwardRef<
HTMLDivElement,
PasswordStrengthProps
>(

function PasswordStrength(

{

    strength,

    showLabel = true,

    labels,

    className,

    ...props

},

forwardedRef,

) {

    const {

        strength: contextStrength,

    } = usePasswordField();

    const currentStrength =
        strength ??
        contextStrength;

    const percentage =
        STRENGTH_VALUE[
            currentStrength
        ];

    const label =
        useMemo(

            () =>

                labels?.[
                    currentStrength
                ] ??

                DEFAULT_LABELS[
                    currentStrength
                ],

            [

                currentStrength,

                labels,

            ],

        );

    return (

        <div

            {...props}

            ref={forwardedRef}

            className={cn(

                "flex",

                "flex-col",

                "gap-2",

                className,

            )}

        >

            {/* ---------------------------------------------------------- */}
            {/* Progress Bar                                               */}
            {/* ---------------------------------------------------------- */}

            <div

                className="h-2 w-full overflow-hidden rounded-full bg-muted"

                aria-hidden="true"

            >

                <div

                    className={cn(

                        "h-full",

                        "transition-all",

                        "duration-300",

                        {

                            "w-0":
                                currentStrength ===
                                "empty",

                            "bg-destructive":
                                currentStrength ===
                                "weak",

                            "bg-warning":
                                currentStrength ===
                                "fair",

                            "bg-primary":
                                currentStrength ===
                                "good",

                            "bg-success":
                                currentStrength ===
                                "strong",

                        },

                    )}

                    style={{

                        width: `${percentage}%`,

                    }}

                />

            </div>

            {/* ---------------------------------------------------------- */}
            {/* Label                                                      */}
            {/* ---------------------------------------------------------- */}

            {

                showLabel && (

                    <div

                        className="flex items-center justify-between text-xs text-muted-foreground"

                    >

                        <span>

                            Password Strength

                        </span>

                        <span>

                            {label}

                        </span>

                    </div>

                )

            }

        </div>

    );

},

);

PasswordStrength.displayName =
    "PasswordStrength";

export default PasswordStrength;
