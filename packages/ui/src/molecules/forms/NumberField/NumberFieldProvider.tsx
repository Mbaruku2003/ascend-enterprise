/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberFieldProvider.tsx
 *
 * Enterprise runtime for NumberField.
 *
 * Owns:
 * • Controlled / uncontrolled state
 * • Parsing
 * • Formatting
 * • Precision
 * • Clamping
 * • Increment / decrement
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

import NumberFieldContext from "./NumberFieldContext";

import type {
    NumberFieldProviderProps,
} from "./NumberField.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

const DEFAULT_STEP = 1;

const DEFAULT_ENABLE_WHEEL = false;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function defaultParser(
    value: string,
): number | null {

    const trimmed =
        value.trim();

    if (

        trimmed.length === 0

    ) {

        return null;

    }

    const parsed =
        Number(trimmed);

    return Number.isFinite(parsed)

        ? parsed

        : null;

}

function defaultFormatter(
    value: number | null,
): string {

    if (

        value === null

    ) {

        return "";

    }

    return String(value);

}

function applyPrecision(

    value: number | null,

    precision?: number,

): number | null {

    if (

        value === null ||

        precision === undefined

    ) {

        return value;

    }

    return Number(

        value.toFixed(

            precision,

        ),

    );

}

function clampValue(

    value: number | null,

    min?: number,

    max?: number,

): number | null {

    if (

        value === null

    ) {

        return null;

    }

    if (

        min !== undefined &&

        value < min

    ) {

        return min;

    }

    if (

        max !== undefined &&

        value > max

    ) {

        return max;

    }

    return value;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function NumberFieldProvider({

    children,

    value: controlledValue,

    defaultValue = null,

    onValueChange,

    min,

    max,

    step = DEFAULT_STEP,

    precision,

    enableWheel = DEFAULT_ENABLE_WHEEL,

    parse,

    format,

    disabled = false,

    readOnly = false,

}: NumberFieldProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    const inputRef =
        useRef<HTMLInputElement>(null);

    /* ---------------------------------------------------------------------- */
    /* Controlled / Uncontrolled                                              */
    /* ---------------------------------------------------------------------- */

    const isControlled =

        controlledValue !== undefined;

    const [

        uncontrolledValue,

        setUncontrolledValue,

    ] = useState<number | null>(

        defaultValue,

    );

    const value =

        isControlled

            ? controlledValue

            : uncontrolledValue;

    /* ---------------------------------------------------------------------- */
    /* Runtime                                                                 */
    /* ---------------------------------------------------------------------- */

    const parser =
        parse ??

        defaultParser;

    const formatter =
        format ??

        defaultFormatter;

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                 */
    /* ---------------------------------------------------------------------- */

    const clamp =
        useCallback(

            (

                next: number | null,

            ) =>

                clampValue(

                    next,

                    min,

                    max,

                ),

            [

                min,

                max,

            ],

        );

    const parseValue =
        useCallback(

            (

                text: string,

            ) => {

                const parsed =

                    parser(

                        text,

                    );

                return clamp(

                    applyPrecision(

                        parsed,

                        precision,

                    ),

                );

            },

            [

                parser,

                precision,

                clamp,

            ],

        );

    const formatValue =
        useCallback(

            (

                number: number | null,

            ) =>

                formatter(

                    number,

                ),

            [

                formatter,

            ],

        );

    const setValue =
        useCallback(

            (

                next: SetStateAction<number | null>,

            ) => {

                const resolved =

                    typeof next === "function"

                        ? next(

                            value,

                        )

                        : next;

                const normalized =

                    clamp(

                        applyPrecision(

                            resolved,

                            precision,

                        ),

                    );

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

                precision,

                clamp,

                isControlled,

                onValueChange,

            ],

        );
/* ---------------------------------------------------------------------- */
/* Increment / Decrement                                                  */
/* ---------------------------------------------------------------------- */

    const increment =
        useCallback(

            () => {

                setValue(

                    previous =>

                        (

                            previous ?? 0

                        ) + step,

                );

            },

            [

                setValue,

                step,

            ],

        );

    const decrement =
        useCallback(

            () => {

                setValue(

                    previous =>

                        (

                            previous ?? 0

                        ) - step,

                );

            },

            [

                setValue,

                step,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Context                                                                */
    /* ---------------------------------------------------------------------- */

    const context =
        useMemo(

            () => ({

                /* ---------------------------------------------------------- */
                /* State                                                      */
                /* ---------------------------------------------------------- */

                value,

                /* ---------------------------------------------------------- */
                /* Configuration                                              */
                /* ---------------------------------------------------------- */

                min,

                max,

                step,

                precision,

                enableWheel,

                disabled,

                readOnly,

                /* ---------------------------------------------------------- */
                /* Runtime                                                    */
                /* ---------------------------------------------------------- */

                inputRef,

                setValue,

                /* ---------------------------------------------------------- */
                /* Actions                                                    */
                /* ---------------------------------------------------------- */

                increment,

                decrement,

                clamp,

                parse: parseValue,

                format: formatValue,

            }),

            [

                value,

                min,

                max,

                step,

                precision,

                enableWheel,

                disabled,

                readOnly,

                increment,

                decrement,

                clamp,

                parseValue,

                formatValue,

                setValue,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <NumberFieldContext.Provider

            value={context}

        >

            {children}

        </NumberFieldContext.Provider>

    );

}

NumberFieldProvider.displayName =
    "NumberFieldProvider";

export default NumberFieldProvider;
