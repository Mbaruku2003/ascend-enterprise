/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: CountryButton.tsx
 *
 * Trigger button for the country selector.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    ChevronDown,
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

export interface CountryButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    country: PhoneCountry;

    open?: boolean;

    showCountryName?: boolean;

    showDialCode?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CountryButton = forwardRef<

    HTMLButtonElement,

    CountryButtonProps

>(

    (

        {

            country,

            open = false,

            showCountryName = false,

            showDialCode = true,

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

                aria-haspopup="listbox"

                aria-expanded={open}

                className={cn(

                    "inline-flex",

                    "items-center",

                    "gap-2",

                    "rounded-md",

                    "border",

                    "border-input",

                    "bg-background",

                    "px-3",

                    "py-2",

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

                {/* ------------------------------------------------------ */}
                {/* Flag                                                   */}
                {/* ------------------------------------------------------ */}

                <CountryFlag

                    country={country}

                    size={18}

                />

                {/* ------------------------------------------------------ */}
                {/* Country Name                                           */}
                {/* ------------------------------------------------------ */}

                {

                    showCountryName && (

                        <span

                            className={cn(

                                "max-w-[140px]",

                                "truncate",

                                "text-sm",

                                "font-medium",

                            )}

                        >

                            {country.name}

                        </span>

                    )

                }

                {/* ------------------------------------------------------ */}
                {/* Dial Code                                              */}
                {/* ------------------------------------------------------ */}

                {

                    showDialCode && (

                        <DialCode

                            country={country}

                            className="text-sm"

                        />

                    )

                }

                {/* ------------------------------------------------------ */}
                {/* Chevron                                                */}
                {/* ------------------------------------------------------ */}

                <ChevronDown

                    className={cn(

                        "ml-1",

                        "h-4",

                        "w-4",

                        "text-muted-foreground",

                        "transition-transform",

                        open &&

                            "rotate-180",

                    )}

                />

            </button>

        );

    },

);

CountryButton.displayName =
    "CountryButton";

export default CountryButton;
