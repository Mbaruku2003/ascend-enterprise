/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: PhoneField.utils.ts
 *
 * Shared utilities for PhoneField.
 *
 * ============================================================================
 */

import type {
    PhoneCountry,
} from "./PhoneField.types";

import {
    DEFAULT_PHONE_COUNTRIES,
} from "./countries";

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const NON_DIGIT_REGEX =
    /\D+/g;

const LEADING_PLUS_REGEX =
    /^\+/;

/* -------------------------------------------------------------------------- */
/* Sanitization                                                               */
/* -------------------------------------------------------------------------- */

export function sanitizePhoneInput(
    value: string,
): string {

    if (!value) {

        return "";

    }

    return value.replace(
        NON_DIGIT_REGEX,
        "",
    );

}

export function normalizeDialCode(
    dialCode: string,
): string {

    if (!dialCode) {

        return "";

    }

    return dialCode.startsWith("+")
        ? dialCode
        : `+${dialCode}`;

}

/* -------------------------------------------------------------------------- */
/* Formatting                                                                 */
/* -------------------------------------------------------------------------- */

export function formatInternationalNumber(
    dialCode: string,
    number: string,
): string {

    const cleanNumber =
        sanitizePhoneInput(number);

    if (!cleanNumber) {

        return normalizeDialCode(
            dialCode,
        );

    }

    return `${normalizeDialCode(
        dialCode,
    )} ${cleanNumber}`;

}

export function stripDialCode(
    phoneNumber: string,
    dialCode: string,
): string {

    const normalizedDialCode =
        normalizeDialCode(dialCode);

    if (
        phoneNumber.startsWith(
            normalizedDialCode,
        )
    ) {

        return phoneNumber
            .slice(
                normalizedDialCode.length,
            )
            .trim();

    }

    return phoneNumber;

}

/* -------------------------------------------------------------------------- */
/* Number Extraction                                                          */
/* -------------------------------------------------------------------------- */

export function extractDigits(
    value: string,
): string {

    return sanitizePhoneInput(
        value,
    );

}

export function extractDialCode(
    value: string,
): string | undefined {

    if (!value) {

        return undefined;

    }

    const normalized =
        value.trim();

    for (const country of DEFAULT_PHONE_COUNTRIES) {

        if (
            normalized.startsWith(
                country.dialCode,
            )
        ) {

            return country.dialCode;

        }

    }

    return undefined;

}
/* -------------------------------------------------------------------------- */
/* Country Lookup                                                             */
/* -------------------------------------------------------------------------- */

export function findCountryByDialCode(
    dialCode: string,
): PhoneCountry | undefined {

    const normalized =
        normalizeDialCode(dialCode);

    return DEFAULT_PHONE_COUNTRIES.find(

        (country) =>

            country.dialCode ===
            normalized,

    );

}

export function findCountryFromPhoneNumber(
    phoneNumber: string,
): PhoneCountry | undefined {

    if (!phoneNumber) {

        return undefined;

    }

    const normalized =
        phoneNumber.trim();

    /*
     * Longest dial code wins.
     *
     * Example:
     * +1
     * +1-340
     * +1-441
     */

    const countries =

        [...DEFAULT_PHONE_COUNTRIES]

            .sort(

                (a, b) =>

                    b.dialCode.length -

                    a.dialCode.length,

            );

    return countries.find(

        (country) =>

            normalized.startsWith(
                country.dialCode,
            ),

    );

}

/* -------------------------------------------------------------------------- */
/* Split                                                                      */
/* -------------------------------------------------------------------------- */

export interface SplitPhoneNumberResult {

    country?: PhoneCountry;

    dialCode: string;

    nationalNumber: string;

}

export function splitDialCodeAndNumber(
    phoneNumber: string,
): SplitPhoneNumberResult {

    const country =
        findCountryFromPhoneNumber(
            phoneNumber,
        );

    if (!country) {

        return {

            dialCode: "",

            nationalNumber:
                sanitizePhoneInput(
                    phoneNumber,
                ),

        };

    }

    return {

        country,

        dialCode:
            country.dialCode,

        nationalNumber:
            sanitizePhoneInput(

                stripDialCode(

                    phoneNumber,

                    country.dialCode,

                ),

            ),

    };

}

/* -------------------------------------------------------------------------- */
/* Initial Country                                                            */
/* -------------------------------------------------------------------------- */

export function getInitialCountry(

    value?: string,

    fallbackCode = "US",

): PhoneCountry {

    if (value) {

        const detected =

            findCountryFromPhoneNumber(
                value,
            );

        if (detected) {

            return detected;

        }

    }

    return (

        DEFAULT_PHONE_COUNTRIES.find(

            (country) =>

                country.code ===
                fallbackCode,

        )

        ??

        DEFAULT_PHONE_COUNTRIES[0]

    );

}

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

export function isPossiblePhoneNumber(

    phoneNumber: string,

    country?: PhoneCountry,

): boolean {

    const digits =
        sanitizePhoneInput(
            phoneNumber,
        );

    if (!country) {

        return digits.length >= 4;

    }

    return (

        digits.length <=

        country.nationalNumberLength

    );

}

export function isCompletePhoneNumber(

    phoneNumber: string,

    country?: PhoneCountry,

): boolean {

    if (!country) {

        return false;

    }

    const digits =
        sanitizePhoneInput(
            phoneNumber,
        );

    return (

        digits.length ===

        country.nationalNumberLength

    );

}
/* -------------------------------------------------------------------------- */
/* Display                                                                    */
/* -------------------------------------------------------------------------- */

export function getCountryDisplayName(
    country: PhoneCountry,
): string {

    return `${country.flag} ${country.name}`;

}

export function getCountryDialLabel(
    country: PhoneCountry,
): string {

    return `${country.flag} ${country.dialCode}`;

}

export function getCountryFullLabel(
    country: PhoneCountry,
): string {

    return `${country.flag} ${country.name} (${country.dialCode})`;

}

/* -------------------------------------------------------------------------- */
/* Search                                                                     */
/* -------------------------------------------------------------------------- */

export function searchCountries(
    query: string,
): readonly PhoneCountry[] {

    const value =
        query
            .trim()
            .toLowerCase();

    if (!value) {

        return DEFAULT_PHONE_COUNTRIES;

    }

    return DEFAULT_PHONE_COUNTRIES.filter(

        (country) =>

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
                .includes(value),

    );

}

/* -------------------------------------------------------------------------- */
/* Country Lists                                                              */
/* -------------------------------------------------------------------------- */

export function getCountriesByRegion(
    region: string,
): readonly PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES.filter(

        (country) =>

            country.region ===
            region,

    );

}

export function getCountriesBySubregion(
    subregion: string,
): readonly PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES.filter(

        (country) =>

            country.subregion ===
            subregion,

    );

}

/* -------------------------------------------------------------------------- */
/* Equality                                                                   */
/* -------------------------------------------------------------------------- */

export function areCountriesEqual(
    a?: PhoneCountry,
    b?: PhoneCountry,
): boolean {

    if (!a || !b) {

        return false;

    }

    return a.code === b.code;

}

/* -------------------------------------------------------------------------- */
/* Conversion                                                                 */
/* -------------------------------------------------------------------------- */

export function toInternationalPhoneNumber(
    country: PhoneCountry,
    nationalNumber: string,
): string {

    return formatInternationalNumber(

        country.dialCode,

        nationalNumber,

    );

}

export function toNationalPhoneNumber(
    phoneNumber: string,
    country: PhoneCountry,
): string {

    return sanitizePhoneInput(

        stripDialCode(

            phoneNumber,

            country.dialCode,

        ),

    );

}

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export function getDefaultCountry(): PhoneCountry {

    return getInitialCountry();

}

export function getDefaultCountries(): readonly PhoneCountry[] {

    return DEFAULT_PHONE_COUNTRIES;

}
