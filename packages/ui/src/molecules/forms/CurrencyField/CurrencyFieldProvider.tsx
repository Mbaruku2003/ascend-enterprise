/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencyFieldProvider.tsx
 *
 * Enterprise runtime for CurrencyField.
 *
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

import type {
    SetStateAction,
} from "react";

import CurrencyFieldContext from "./CurrencyFieldContext";

import type {
    CurrencyFieldProviderProps,
    CurrencyFormatter,
    CurrencyParser,
    CurrencyValue,
} from "./CurrencyField.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

const DEFAULT_CURRENCY = "USD";

const DEFAULT_LOCALE = "en-US";

const DEFAULT_PRECISION = 2;

const DEFAULT_STEP = 1;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function clamp(

    value: number,

    min?: number,

    max?: number,

): number {

    let result = value;

    if (

        min !== undefined

    ) {

        result = Math.max(

            result,

            min,

        );

    }

    if (

        max !== undefined

    ) {

        result = Math.min(

            result,

            max,

        );

    }

    return result;

}

function round(

    value: number,

    precision: number,

): number {

    const factor =
        Math.pow(

            10,

            precision,

        );

    return (

        Math.round(

            value * factor,

        ) / factor

    );

}

/* -------------------------------------------------------------------------- */
/* Default Parser                                                             */
/* -------------------------------------------------------------------------- */

const defaultParser: CurrencyParser = (

    input,

) => {

    if (

        input.trim() === ""

    ) {

        return null;

    }

    const normalized =
        input.replace(

            /[^0-9.-]/g,

            "",

        );

    const parsed =
        Number(

            normalized,

        );

    if (

        Number.isNaN(

            parsed,

        )

    ) {

        return null;

    }

    return parsed;

};

/* -------------------------------------------------------------------------- */
/* Default Formatter                                                          */
/* -------------------------------------------------------------------------- */

function createFormatter(

    locale: string,

    currency: string,

    precision: number,

): CurrencyFormatter {

    const formatter =
        new Intl.NumberFormat(

            locale,

            {

                style: "currency",

                currency,

                minimumFractionDigits:
                    precision,

                maximumFractionDigits:
                    precision,

            },

        );

    return (

        value,

    ) => {

        if (

            value === null

        ) {

            return "";

        }

        return formatter.format(

            value,

        );

    };

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function CurrencyFieldProvider({

    children,

    value: controlledValue,

    defaultValue = null,

    onValueChange,

    currency = DEFAULT_CURRENCY,

    locale = DEFAULT_LOCALE,

    min,

    max,

    precision = DEFAULT_PRECISION,

    step = DEFAULT_STEP,

    allowNegative = true,

    enableWheel = false,

    parse,

    format,

    disabled = false,

    readOnly = false,

}: CurrencyFieldProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Controlled / Uncontrolled                                              */
    /* ---------------------------------------------------------------------- */

    const isControlled =

        controlledValue !== undefined;

    const [

        uncontrolledValue,

        setUncontrolledValue,

    ] = useState<CurrencyValue>(

        defaultValue,

    );

    const value =

        isControlled

            ? controlledValue

            : uncontrolledValue;

    /* ---------------------------------------------------------------------- */
    /* Input Ref                                                              */
    /* ---------------------------------------------------------------------- */

    const inputRef =
        useRef<HTMLInputElement>(

            null,

        );

    /* ---------------------------------------------------------------------- */
    /* Runtime Parser / Formatter                                             */
    /* ---------------------------------------------------------------------- */

    const runtimeParser =
        parse ??

        defaultParser;

    const runtimeFormatter =
        useMemo(

            () =>

                format ??

                createFormatter(

                    locale,

                    currency,

                    precision,

                ),

            [

                format,

                locale,

                currency,

                precision,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Runtime Setter                                                         */
    /* ---------------------------------------------------------------------- */

    const setValue =
        useCallback(

            (

                next: SetStateAction<CurrencyValue>,

            ) => {

                const resolved =

                    typeof next === "function"

                        ? next(

                            value,

                        )

                        : next;

                let normalized =
                    resolved;

                if (

                    normalized !== null

                ) {

                    if (

                        !allowNegative &&

                        normalized < 0

                    ) {

                        normalized = 0;

                    }

                    normalized = round(

                        normalized,

                        precision,

                    );

                    normalized = clamp(

                        normalized,

                        min,

                        max,

                    );

                }

                if (

                    !isControlled

                ) {

                    setUncontrolledValue(

                        normalized,

                    );

                }

                onValueChange?.(

                    normalized,

                );

            },

            [

                value,

                isControlled,

                allowNegative,

                precision,

                min,

                max,

                onValueChange,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Increment / Decrement                                                  */
    /* ---------------------------------------------------------------------- */

    const increment =
        useCallback(

            () => {

                if (

                    disabled ||

                    readOnly

                ) {

                    return;

                }

                const current =
                    value ?? 0;

                setValue(

                    current + step,

                );

            },

            [

                disabled,

                readOnly,

                value,

                step,

                setValue,

            ],

        );

    const decrement =
        useCallback(

            () => {

                if (

                    disabled ||

                    readOnly

                ) {

                    return;

                }

                const current =
                    value ?? 0;

                setValue(

                    current - step,

                );

            },

            [

                disabled,

                readOnly,

                value,

                step,

                setValue,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Public Runtime                                                         */
    /* ---------------------------------------------------------------------- */

    const parser: CurrencyParser =
        useCallback(

            (

                input,

            ) =>
                runtimeParser(

                    input,

                ),


            [

                runtimeParser,


            ],

        );

    const formatter: CurrencyFormatter =

        useCallback(


            (

                input,


            ) =>


                runtimeFormatter(

                    input,


                ),


            [


                runtimeFormatter,

            ],


        );
    /* ---------------------------------------------------------------------- */
    /* Context                                                                */
    /* ---------------------------------------------------------------------- */

    const context = useMemo(
        () => ({

            /* -------------------------------------------------------------- */
            /* State                                                          */
            /* -------------------------------------------------------------- */

            value,

            /* -------------------------------------------------------------- */
            /* Configuration                                                  */
            /* -------------------------------------------------------------- */

            currency,

            locale,

            min,

            max,

            precision,

            step,

            allowNegative,

            enableWheel,

            disabled,

            readOnly,

            /* -------------------------------------------------------------- */
            /* Runtime                                                        */
            /* -------------------------------------------------------------- */

            inputRef,

            /* -------------------------------------------------------------- */
            /* Actions                                                        */
            /* -------------------------------------------------------------- */

            setValue,

            increment,

            decrement,

            parse: parser,

            format: formatter,

        }),

        [

            value,

            currency,

            locale,

            min,

            max,

            precision,

            step,

            allowNegative,

            enableWheel,

            disabled,

            readOnly,

            inputRef,

            setValue,

            increment,

            decrement,

            parser,

            formatter,

        ],

    );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <CurrencyFieldContext.Provider
            value={context}
        >

            {children}

        </CurrencyFieldContext.Provider>

    );

}

CurrencyFieldProvider.displayName =
    "CurrencyFieldProvider";

export default CurrencyFieldProvider;
