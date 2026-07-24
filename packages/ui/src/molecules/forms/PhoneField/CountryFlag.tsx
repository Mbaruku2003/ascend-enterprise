/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: CountryFlag.tsx
 *
 * Displays a country's flag.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "../../../lib";

import type {
    PhoneCountry,
} from "./PhoneField.types";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface CountryFlagProps
    extends React.HTMLAttributes<HTMLSpanElement> {

    country: PhoneCountry;

    size?: number;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CountryFlag = forwardRef<

    HTMLSpanElement,

    CountryFlagProps

>(

    (

        {

            country,

            size = 18,

            className,

            style,

            ...props

        },

        ref,

    ) => {

        return (

            <span

                ref={ref}

                role="img"

                aria-label={country.name}

                title={country.name}

                className={cn(

                    "inline-flex",

                    "items-center",

                    "justify-center",

                    "select-none",

                    "shrink-0",

                    className,

                )}

                style={{

                    fontSize: size,

                    lineHeight: 1,

                    width: size,

                    height: size,

                    ...style,

                }}

                {...props}

            >

                {country.flag}

            </span>

        );

    },

);

CountryFlag.displayName =
    "CountryFlag";

export default CountryFlag;
