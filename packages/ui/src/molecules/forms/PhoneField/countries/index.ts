/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: index.ts
 *
 * Global country registry.
 *
 * Exposes:
 * - Regional datasets
 * - ALL_COUNTRIES
 * - Lookup maps
 * - Helper functions
 *
 * ============================================================================
 */

import type {
    PhoneCountry,
} from "../PhoneField.types";

import {
    AFRICAN_COUNTRIES,
} from "./africa";

import {
    ASIAN_COUNTRIES,
} from "./asia";

import {
    EUROPEAN_COUNTRIES,
} from "./europe";

import {
    NORTH_AMERICAN_COUNTRIES,
} from "./northAmerica";

import {
    SOUTH_AMERICAN_COUNTRIES,
} from "./southAmerica";

import {
    OCEANIA_COUNTRIES,
} from "./oceania";

import {
    TERRITORIES,
} from "./territories";

/* -------------------------------------------------------------------------- */
/* Regional Exports                                                           */
/* -------------------------------------------------------------------------- */

export {
    AFRICAN_COUNTRIES,
    ASIAN_COUNTRIES,
    EUROPEAN_COUNTRIES,
    NORTH_AMERICAN_COUNTRIES,
    SOUTH_AMERICAN_COUNTRIES,
    OCEANIA_COUNTRIES,
    TERRITORIES,
};

/* -------------------------------------------------------------------------- */
/* Complete Dataset                                                           */
/* -------------------------------------------------------------------------- */

export const ALL_COUNTRIES: readonly PhoneCountry[] = [

    ...AFRICAN_COUNTRIES,

    ...ASIAN_COUNTRIES,

    ...EUROPEAN_COUNTRIES,

    ...NORTH_AMERICAN_COUNTRIES,

    ...SOUTH_AMERICAN_COUNTRIES,

    ...OCEANIA_COUNTRIES,

    ...TERRITORIES,

] as const;

/* -------------------------------------------------------------------------- */
/* Count                                                                      */
/* -------------------------------------------------------------------------- */

export const COUNTRY_COUNT =
    ALL_COUNTRIES.length;
/* -------------------------------------------------------------------------- */
/* Lookup Maps                                                                */
/* -------------------------------------------------------------------------- */

export const COUNTRIES_BY_CODE = new Map<
    string,
    PhoneCountry
>();

export const COUNTRIES_BY_ALPHA3 = new Map<
    string,
    PhoneCountry
>();

export const COUNTRIES_BY_NUMERIC_CODE = new Map<
    string,
    PhoneCountry
>();

export const COUNTRIES_BY_DIAL_CODE = new Map<
    string,
    readonly PhoneCountry[]
>();

export const COUNTRIES_BY_REGION = new Map<
    string,
    readonly PhoneCountry[]
>();

export const COUNTRIES_BY_SUBREGION = new Map<
    string,
    readonly PhoneCountry[]
>();

/* -------------------------------------------------------------------------- */
/* Build Lookup Maps                                                          */
/* -------------------------------------------------------------------------- */

const dialCodeMap =
    new Map<string, PhoneCountry[]>();

const regionMap =
    new Map<string, PhoneCountry[]>();

const subregionMap =
    new Map<string, PhoneCountry[]>();

for (const country of ALL_COUNTRIES) {

    /* ---------------------------------------------------------------------- */
    /* ISO Alpha-2                                                            */
    /* ---------------------------------------------------------------------- */

    COUNTRIES_BY_CODE.set(
        country.code,
        country,
    );

    /* ---------------------------------------------------------------------- */
    /* ISO Alpha-3                                                            */
    /* ---------------------------------------------------------------------- */

    COUNTRIES_BY_ALPHA3.set(
        country.alpha3,
        country,
    );

    /* ---------------------------------------------------------------------- */
    /* ISO Numeric                                                            */
    /* ---------------------------------------------------------------------- */

    COUNTRIES_BY_NUMERIC_CODE.set(
        country.numericCode,
        country,
    );

    /* ---------------------------------------------------------------------- */
    /* Dial Code                                                              */
    /* ---------------------------------------------------------------------- */

    const dialCountries =
        dialCodeMap.get(country.dialCode);

    if (dialCountries) {

        dialCountries.push(country);

    } else {

        dialCodeMap.set(
            country.dialCode,
            [country],
        );

    }

    /* ---------------------------------------------------------------------- */
    /* Region                                                                 */
    /* ---------------------------------------------------------------------- */

    const regionCountries =
        regionMap.get(country.region);

    if (regionCountries) {

        regionCountries.push(country);

    } else {

        regionMap.set(
            country.region,
            [country],
        );

    }

    /* ---------------------------------------------------------------------- */
    /* Subregion                                                              */
    /* ---------------------------------------------------------------------- */

    const subregionCountries =
        subregionMap.get(country.subregion);

    if (subregionCountries) {

        subregionCountries.push(country);

    } else {

        subregionMap.set(
            country.subregion,
            [country],
        );

    }

}

/* -------------------------------------------------------------------------- */
/* Freeze Lookup Maps                                                         */
/* -------------------------------------------------------------------------- */

for (const [
    dialCode,
    countries,
] of dialCodeMap) {

    COUNTRIES_BY_DIAL_CODE.set(
        dialCode,
        Object.freeze(
            [...countries],
        ),
    );

}

for (const [
    region,
    countries,
] of regionMap) {

    COUNTRIES_BY_REGION.set(
        region,
        Object.freeze(
            [...countries],
        ),
    );

}

for (const [
    subregion,
    countries,
] of subregionMap) {

    COUNTRIES_BY_SUBREGION.set(
        subregion,
        Object.freeze(
            [...countries],
        ),
    );

}

/* -------------------------------------------------------------------------- */
/* Helper Functions                                                           */
/* -------------------------------------------------------------------------- */

export function getCountryByCode(
    code: string,
): PhoneCountry | undefined {

    return COUNTRIES_BY_CODE.get(
        code.toUpperCase(),
    );

}

export function getCountryByAlpha3(
    alpha3: string,
): PhoneCountry | undefined {

    return COUNTRIES_BY_ALPHA3.get(
        alpha3.toUpperCase(),
    );

}

export function getCountryByNumericCode(
    numericCode: string,
): PhoneCountry | undefined {

    return COUNTRIES_BY_NUMERIC_CODE.get(
        numericCode,
    );

}

export function getCountriesByDialCode(
    dialCode: string,
): readonly PhoneCountry[] {

    return (
        COUNTRIES_BY_DIAL_CODE.get(
            dialCode,
        ) ?? []
    );

}

export function getCountriesByRegion(
    region: string,
): readonly PhoneCountry[] {

    return (
        COUNTRIES_BY_REGION.get(
            region,
        ) ?? []
    );

}

export function getCountriesBySubregion(
    subregion: string,
): readonly PhoneCountry[] {

    return (
        COUNTRIES_BY_SUBREGION.get(
            subregion,
        ) ?? []
    );

}

export function isValidCountryCode(
    code: string,
): boolean {

    return COUNTRIES_BY_CODE.has(
        code.toUpperCase(),
    );

}

export function isValidAlpha3(
    alpha3: string,
): boolean {

    return COUNTRIES_BY_ALPHA3.has(
        alpha3.toUpperCase(),
    );

}

export function isValidNumericCode(
    numericCode: string,
): boolean {

    return COUNTRIES_BY_NUMERIC_CODE.has(
        numericCode,
    );

}

export function isValidDialCode(
    dialCode: string,
): boolean {

    return COUNTRIES_BY_DIAL_CODE.has(
        dialCode,
    );

}

/* -------------------------------------------------------------------------- */
/* Search                                                                     */
/* -------------------------------------------------------------------------- */

export function searchCountries(
    query: string,
): readonly PhoneCountry[] {

    const value =
        query.trim().toLowerCase();

    if (!value) {

        return ALL_COUNTRIES;

    }

    return ALL_COUNTRIES.filter(
        (country) => {

            return (

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
                    .includes(value)

                ||

                country.region
                    .toLowerCase()
                    .includes(value)

                ||

                country.subregion
                    .toLowerCase()
                    .includes(value)

            );

        },
    );

}

/* -------------------------------------------------------------------------- */
/* Default Export                                                             */
/* -------------------------------------------------------------------------- */

export default {

    ALL_COUNTRIES,

    COUNTRY_COUNT,

    AFRICAN_COUNTRIES,

    ASIAN_COUNTRIES,

    EUROPEAN_COUNTRIES,

    NORTH_AMERICAN_COUNTRIES,

    SOUTH_AMERICAN_COUNTRIES,

    OCEANIA_COUNTRIES,

    TERRITORIES,

    COUNTRIES_BY_CODE,

    COUNTRIES_BY_ALPHA3,

    COUNTRIES_BY_NUMERIC_CODE,

    COUNTRIES_BY_DIAL_CODE,

    COUNTRIES_BY_REGION,

    COUNTRIES_BY_SUBREGION,

    getCountryByCode,

    getCountryByAlpha3,

    getCountryByNumericCode,

    getCountriesByDialCode,

    getCountriesByRegion,

    getCountriesBySubregion,

    searchCountries,

    isValidCountryCode,

    isValidAlpha3,

    isValidNumericCode,

    isValidDialCode,

} as const;
