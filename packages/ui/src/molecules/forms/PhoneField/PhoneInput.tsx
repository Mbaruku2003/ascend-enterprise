/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: PhoneInput.tsx
 *
 * Phone number input.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "../../../lib";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface PhoneInputProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "value" | "onChange"
    > {

    value: string;

    onChange(
        value: string,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const PhoneInput = forwardRef<

    HTMLInputElement,

    PhoneInputProps

>(

    (

        {

            value,

            onChange,

            className,

            disabled,

            placeholder = "Phone number",

            ...props

        },

        ref,

    ) => {

        return (

            <input

                ref={ref}

                type="tel"

                inputMode="tel"

                autoComplete="tel"

                spellCheck={false}

                disabled={disabled}

                value={value}

                placeholder={placeholder}

                className={cn(

                    "flex-1",

                    "min-w-0",

                    "border-0",

                    "bg-transparent",

                    "px-3",

                    "py-2",

                    "text-sm",

                    "outline-none",

                    "placeholder:text-muted-foreground",

                    "disabled:cursor-not-allowed",

                    "disabled:opacity-50",

                    className,

                )}

                onChange={(event) =>

                    onChange(

                        event.target.value,

                    )

                }

                {...props}

            />

        );

    },

);

PhoneInput.displayName =
    "PhoneInput";

export default PhoneInput;
