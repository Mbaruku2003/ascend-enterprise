/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: CountryList.tsx
 *
 * Scrollable country list.
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

import {
    CountryItem,
} from "./CountryItem";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface CountryListProps
    extends React.HTMLAttributes<HTMLDivElement> {

    countries: readonly PhoneCountry[];

    selectedCountry?: PhoneCountry;

    emptyMessage?: React.ReactNode;

    onSelect?(
        country: PhoneCountry,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CountryList = forwardRef<

    HTMLDivElement,

    CountryListProps

>(

    (

        {

            countries,

            selectedCountry,

            emptyMessage = "No countries found.",

            onSelect,

            className,

            ...props

        },

        ref,

    ) => {

        return (

            <div

                ref={ref}

                role="listbox"

                className={cn(

                    "max-h-80",

                    "overflow-y-auto",

                    "overscroll-contain",

                    "rounded-md",

                    className,

                )}

                {...props}

            >

                {

                    countries.length === 0 && (

                        <div

                            className={cn(

                                "flex",

                                "items-center",

                                "justify-center",

                                "px-4",

                                "py-8",

                                "text-sm",

                                "text-muted-foreground",

                            )}

                        >

                            {emptyMessage}

                        </div>

                    )

                }

                {

                    countries.map(

                        (

                            country,

                        ) => (

                            <CountryItem

                                key={

                                    country.code

                                }

                                country={

                                    country

                                }

                                selected={

                                    selectedCountry?.code ===

                                    country.code

                                }

                                onClick={() =>

                                    onSelect?.(

                                        country,

                                    )

                                }

                            />

                        ),

                    )

                }

            </div>

        );

    },

);

CountryList.displayName =
    "CountryList";

export default CountryList;
