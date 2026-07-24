/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: DialCode.tsx
 *
 * Displays a country's international dialing code.
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

export interface DialCodeProps
    extends React.HTMLAttributes<HTMLSpanElement> {

    country: PhoneCountry;

    showPlus?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const DialCode = forwardRef<

    HTMLSpanElement,

    DialCodeProps

>(

    (

        {

            country,

            showPlus = true,

            className,

            children,

            ...props

        },

        ref,

    ) => {

        let dialCode =
            country.dialCode;

        if (

            !showPlus &&

            dialCode.startsWith("+")

        ) {

            dialCode =
                dialCode.slice(1);

        }

        return (

            <span

                ref={ref}

                className={cn(

                    "inline-flex",

                    "items-center",

                    "whitespace-nowrap",

                    "font-medium",

                    "text-muted-foreground",

                    className,

                )}

                {...props}

            >

                {children ?? dialCode}

            </span>

        );

    },

);

DialCode.displayName =
    "DialCode";

export default DialCode;
