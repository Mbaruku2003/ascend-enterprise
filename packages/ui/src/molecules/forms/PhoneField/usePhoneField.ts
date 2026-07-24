/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: usePhoneField.ts
 *
 * Main PhoneField hook.
 *
 * Handles:
 * - value
 * - selected country
 * - search
 * - validation
 * * ============================================================================
 */

import {

    useCallback,

    useEffect,

    useMemo,

    useState,

} from "react";

import type {

    PhoneCountry,

    PhoneFieldProps,

} from "./PhoneField.types";

import {

    DEFAULT_PHONE_COUNTRIES,

} from "./countries";

import {

    findCountryFromPhoneNumber,

    formatInternationalNumber,

    getInitialCountry,

    isCompletePhoneNumber,

    isPossiblePhoneNumber,

    sanitizePhoneInput,

    searchCountries,

    toNationalPhoneNumber,

} from "./PhoneField.utils";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface UsePhoneFieldResult {

    country: PhoneCountry;

    countries: readonly PhoneCountry[];

    value: string;

    nationalNumber: string;

    search: string;

    filteredCountries: readonly PhoneCountry[];

    isPossible: boolean;

    isComplete: boolean;

    setCountry(
        country: PhoneCountry,
    ): void;

    setSearch(
        value: string,
    ): void;

    setValue(
        value: string,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function usePhoneField(

    props: PhoneFieldProps,

): UsePhoneFieldResult {

    const {

        value: controlledValue,

        defaultValue = "",

        defaultCountry = "US",

        countries = DEFAULT_PHONE_COUNTRIES,

        onChange,

        onCountryChange,

    } = props;

    /* ---------------------------------------------------------------------- */
    /* Controlled / Uncontrolled                                              */
    /* ---------------------------------------------------------------------- */

    const controlled =

        controlledValue !== undefined;

    const [

        uncontrolledValue,

        setUncontrolledValue,

    ] = useState(

        defaultValue,

    );

    const value =

        controlled

            ? controlledValue

            : uncontrolledValue;

    /* ---------------------------------------------------------------------- */
    /* Country                                                                 */
    /* ---------------------------------------------------------------------- */

    const [

        country,

        setCountryState,

    ] = useState<PhoneCountry>(

        () =>

            getInitialCountry(

                value,

                defaultCountry,

            ),

    );

    /* ---------------------------------------------------------------------- */
    /* Search                                                                   */
    /* ---------------------------------------------------------------------- */

    const [

        search,

        setSearch,

    ] = useState("");
    /* ---------------------------------------------------------------------- */
    /* Derived Values                                                         */
    /* ---------------------------------------------------------------------- */

    const nationalNumber = useMemo(

        () =>

            toNationalPhoneNumber(

                value,

                country,

            ),

        [

            value,

            country,

        ],

    );

    const internationalNumber = useMemo(

        () =>

            formatInternationalNumber(

                country.dialCode,

                nationalNumber,

            ),

        [

            country,

            nationalNumber,

        ],

    );

    const digits = useMemo(

        () =>

            sanitizePhoneInput(

                nationalNumber,

            ),

        [

            nationalNumber,

        ],

    );

    const filteredCountries = useMemo(

        () =>

            searchCountries(

                search,

            ),

        [

            search,

        ],

    );

    const isPossible = useMemo(

        () =>

            isPossiblePhoneNumber(

                digits,

                country,

            ),

        [

            digits,

            country,

        ],

    );

    const isComplete = useMemo(

        () =>

            isCompletePhoneNumber(

                digits,

                country,

            ),

        [

            digits,

            country,

        ],

    );

    /* ---------------------------------------------------------------------- */
    /* Synchronize Country                                                    */
    /* ---------------------------------------------------------------------- */

    useEffect(

        () => {

            const detected =

                findCountryFromPhoneNumber(

                    value,

                );

            if (

                detected &&

                detected.code !==
                country.code

            ) {

                setCountryState(

                    detected,

                );

            }

        },

        [

            value,

            country.code,

        ],

    );

    /* ---------------------------------------------------------------------- */
    /* Synchronize Value                                                      */
    /* ---------------------------------------------------------------------- */

    useEffect(

        () => {

            if (

                controlled

            ) {

                return;

            }

            setUncontrolledValue(

                defaultValue,

            );

        },

        [

            controlled,

            defaultValue,

        ],

    );
    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    const setValue = useCallback(

        (nextValue: string) => {

            if (!controlled) {

                setUncontrolledValue(

                    nextValue,

                );

            }

            onChange?.(

                nextValue,

            );

        },

        [

            controlled,

            onChange,

        ],

    );

    const setCountry = useCallback(

        (nextCountry: PhoneCountry) => {

            if (

                nextCountry.code ===

                country.code

            ) {

                return;

            }

            setCountryState(

                nextCountry,

            );

            onCountryChange?.(

                nextCountry,

            );

            /* -------------------------------------------------------------- */
            /* Preserve National Number                                       */
            /* -------------------------------------------------------------- */

            const national =

                toNationalPhoneNumber(

                    value,

                    country,

                );

            const formatted =

                formatInternationalNumber(

                    nextCountry.dialCode,

                    national,

                );

            if (!controlled) {

                setUncontrolledValue(

                    formatted,

                );

            }

            onChange?.(

                formatted,

            );

        },

        [

            controlled,

            country,

            value,

            onChange,

            onCountryChange,

        ],

    );

    /* ---------------------------------------------------------------------- */
    /* Convenience                                                             */
    /* ---------------------------------------------------------------------- */

    const resetSearch = useCallback(

        () => {

            setSearch("");

        },

        [],

    );

    const clear = useCallback(

        () => {

            setValue("");

        },

        [

            setValue,

        ],

    );

    const selectCountryByCode = useCallback(

        (

            code: string,

        ) => {

            const next =

                countries.find(

                    (

                        country,

                    ) =>

                        country.code ===

                        code,

                );

            if (

                next

            ) {

                setCountry(

                    next,

                );

            }

        },

        [

            countries,

            setCountry,

        ],

    );
    /* ---------------------------------------------------------------------- */
    /* Return                                                                 */
    /* ---------------------------------------------------------------------- */

    return {

        /* ------------------------------------------------------------------ */
        /* State                                                              */
        /* ------------------------------------------------------------------ */

        country,

        countries,

        value,

        nationalNumber,

        search,

        filteredCountries,

        /* ------------------------------------------------------------------ */
        /* Derived                                                            */
        /* ------------------------------------------------------------------ */

        internationalNumber,

        digits,

        isPossible,

        isComplete,

        /* ------------------------------------------------------------------ */
        /* Actions                                                            */
        /* ------------------------------------------------------------------ */

        setValue,

        setCountry,

        setSearch,

        clear,

        resetSearch,

        selectCountryByCode,

    };

}

export default usePhoneField;
