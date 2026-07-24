/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: CountryItem.tsx
 *
 * Country option used throughout PhoneField.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    Check,
} from "lucide-react";

import {
    cn,
} from "../../../lib";

import type {
    PhoneCountry,
} from "./PhoneField.types";

import {
    CountryFlag,
} from "./CountryFlag";

import {
    DialCode,
} from "./DialCode";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface CountryItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    country: PhoneCountry;

    selected?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CountryItem = forwardRef<

    HTMLButtonElement,

    CountryItemProps

>(

    (

        {

            country,

            selected = false,

            className,

            disabled,

            ...props

        },

        ref,

    ) => {

        return (

            <button

                ref={ref}

                type="button"

                disabled={disabled}

                className={cn(

                    "flex",

                    "w-full",

                    "items-center",

                    "gap-3",

                    "rounded-md",

                    "px-3",

                    "py-2",

                    "text-left",

                    "transition-colors",

                    "hover:bg-accent",

                    "focus:outline-none",

                    "focus-visible:ring-2",

                    "focus-visible:ring-ring",

                    "disabled:pointer-events-none",

                    "disabled:opacity-50",

                    className,

                )}

                {...props}

            >

                {/* ---------------------------------------------------------- */}
                {/* Flag                                                       */}
                {/* ---------------------------------------------------------- */}

                <CountryFlag

                    country={country}

                    size={20}

                />

                {/* ---------------------------------------------------------- */}
                {/* Name                                                       */}
                {/* ---------------------------------------------------------- */}

                <div

                    className={cn(

                        "flex",

                        "min-w-0",

                        "flex-1",

                        "flex-col",

                    )}

                >

                    <span

                        className={cn(

                            "truncate",

                            "font-medium",

                        )}

                    >

                        {country.name}

                    </span>

                    <span

                        className={cn(

                            "truncate",

                            "text-xs",

                            "text-muted-foreground",

                        )}

                    >

                        {country.code}

                    </span>

                </div>

                {/* ---------------------------------------------------------- */}
                {/* Dial Code                                                  */}
                {/* ---------------------------------------------------------- */}

                <DialCode

                    country={country}

                    className="mr-2"

                />

                {/* ---------------------------------------------------------- */}
                {/* Selected                                                   */}
                {/* ---------------------------------------------------------- */}

                <Check

                    className={cn(

                        "h-4",

                        "w-4",

                        selected

                            ? "opacity-100"

                            : "opacity-0",

                    )}

                />

            </button>

        );

    },

);

CountryItem.displayName =
    "CountryItem";

export default CountryItem;
