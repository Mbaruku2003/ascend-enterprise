/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: helpers.ts
 *
 * Country helper utilities.
 *
 * ============================================================================
 */

import type {
    PhoneCountry,
} from "../PhoneField.types";

import {
    DEFAULT_PHONE_COUNTRIES,
} from "./index";

/* -------------------------------------------------------------------------- */
/* Lookup                                                                     */
/* -------------------------------------------------------------------------- */

export function getCountryByCode(
    code: string,
): PhoneCountry | undefined {

    return DEFAULT_PHONE_COUNTRIES.find(

        country =>

            country.code ===
            code.toUpperCase(),

    );

}

export function getCountryByAlpha3(
    alpha3: string,
): PhoneCountry | undefined {

    return DEFAULT_PHONE_COUNTRIES.find(

        country =>

            country.alpha3 ===
            alpha3.toUpperCase(),

    );

}

export function getCountryByNumericCode(
    numericCode: string,
): PhoneCountry | undefined {

    return DEFAULT_PHONE_COUNTRIES.find(

        country =>

            country.numericCode ===
            numericCode,

    );

}

export function getCountryByDialCode(
    dialCode: string,
): PhoneCountry | undefined {

    return DEFAULT_PHONE_COUNTRIES.find(

        country =>

            country.dialCode ===
            dialCode,

    );

}

/* -------------------------------------------------------------------------- */
/* Region                                                                     */
/* -------------------------------------------------------------------------- */

export function getCountriesByRegion(

    region: PhoneCountry["region"],

): PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES.filter(

        country =>

            country.region ===
            region,

    );

}

export function getCountriesBySubregion(
    subregion: string,
): PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES.filter(

        country =>

            country.subregion
                .toLowerCase() ===

            subregion
                .toLowerCase(),

    );

}

/* -------------------------------------------------------------------------- */
/* Search                                                                     */
/* -------------------------------------------------------------------------- */

export function searchCountries(
    query: string,
): PhoneCountry[] {

    const value =

        query
            .trim()
            .toLowerCase();

    if (!value) {

        return [

            ...DEFAULT_PHONE_COUNTRIES,

        ];

    }

    return DEFAULT_PHONE_COUNTRIES.filter(

        country =>

            country.name
                .toLowerCase()
                .includes(value)

            ||

            country.englishName
                .toLowerCase()
                .includes(value)

            ||

            country.code
                .toLowerCase()
                .includes(value)

            ||

            country.alpha3
                .toLowerCase()
                .includes(value)

            ||

            country.dialCode
                .includes(value),

    );

}

/* -------------------------------------------------------------------------- */
/* Sorting                                                                    */
/* -------------------------------------------------------------------------- */

export function sortCountries(
    countries: readonly PhoneCountry[],
): PhoneCountry[] {

    return [...countries].sort(

        (a, b) =>

            a.name.localeCompare(

                b.name,

            ),

    );

}

/* -------------------------------------------------------------------------- */
/* Support                                                                    */
/* -------------------------------------------------------------------------- */

export function isSupportedCountry(
    code: string,
): boolean {

    return DEFAULT_PHONE_COUNTRIES.some(

        country =>

            country.code ===
            code.toUpperCase(),

    );

}

export function getDefaultCountry(): PhoneCountry {

    return (

        getCountryByCode("US") ??

        DEFAULT_PHONE_COUNTRIES[0]

    );

}

/* -------------------------------------------------------------------------- */
/* Flags                                                                      */
/* -------------------------------------------------------------------------- */

export function getCountryFlag(
    code: string,
): string {

    return (

        getCountryByCode(
            code,
        )?.flag ??

        "🏳️"

    );

}

/* -------------------------------------------------------------------------- */
/* Dial Codes                                                                 */
/* -------------------------------------------------------------------------- */

export function getCountriesByDialCode(
    dialCode: string,
): PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES.filter(

        country =>

            country.dialCode ===
            dialCode,

    );

}

/* -------------------------------------------------------------------------- */
/* Independent Countries                                                      */
/* -------------------------------------------------------------------------- */

export function getIndependentCountries(): PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES.filter(

        country =>

            country.independent,

    );

}

export function getTerritories(): PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES.filter(

        country =>

            !country.independent,

    );

}
