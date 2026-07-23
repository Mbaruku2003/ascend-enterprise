/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: DatePickerProvider.tsx
 *
 * Enterprise runtime for DatePicker.
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

import DatePickerContext from "./DatePickerContext";

import type {
    DateFormatter,
    DateParser,
    DatePickerProviderProps,
    DateValue,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

const DEFAULT_LOCALE = "en-US";

const DEFAULT_WEEK_START = 0;

const DEFAULT_CLOSE_ON_SELECT = true;

const DEFAULT_CLEARABLE = true;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function isSameDay(
    left: Date,
    right: Date,
): boolean {

    return (

        left.getFullYear() === right.getFullYear() &&

        left.getMonth() === right.getMonth() &&

        left.getDate() === right.getDate()

    );

}

function startOfMonth(
    date: Date,
): Date {

    return new Date(

        date.getFullYear(),

        date.getMonth(),

        1,

    );

}

function addMonths(
    date: Date,
    amount: number,
): Date {

    return new Date(

        date.getFullYear(),

        date.getMonth() + amount,

        1,

    );

}

/* -------------------------------------------------------------------------- */
/* Default Parser                                                             */
/* -------------------------------------------------------------------------- */

const defaultParser: DateParser = (

    input,

) => {

    if (

        input.trim() === ""

    ) {

        return null;

    }

    const parsed =
        new Date(

            input,

        );

    if (

        Number.isNaN(

            parsed.getTime(),

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

): DateFormatter {

    const formatter =
        new Intl.DateTimeFormat(

            locale,

            {

                year: "numeric",

                month: "2-digit",

                day: "2-digit",

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

export function DatePickerProvider({

    children,

    value: controlledValue,

    defaultValue = null,

    onValueChange,

    minDate,

    maxDate,

    disabledDates = [],

    locale = DEFAULT_LOCALE,

    weekStartsOn = DEFAULT_WEEK_START,

    closeOnSelect = DEFAULT_CLOSE_ON_SELECT,

    clearable = DEFAULT_CLEARABLE,

    parse,

    format,

    disabled = false,

    readOnly = false,

}: DatePickerProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Controlled / Uncontrolled                                              */
    /* ---------------------------------------------------------------------- */

    const isControlled =

        controlledValue !== undefined;

    const [

        uncontrolledValue,

        setUncontrolledValue,

    ] = useState<DateValue>(

        defaultValue,

    );

    const value =

        isControlled

            ? controlledValue

            : uncontrolledValue;

    /* ---------------------------------------------------------------------- */
    /* Calendar State                                                         */
    /* ---------------------------------------------------------------------- */

    const [

        open,

        setOpen,

    ] = useState(

        false,

    );

    const [

        visibleMonth,

        setVisibleMonth,

    ] = useState<Date>(

        startOfMonth(

            value ??

            new Date(),

        ),

    );

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    const inputRef =
        useRef<HTMLInputElement>(

            null,

        );

    const buttonRef =
        useRef<HTMLButtonElement>(

            null,

        );

    const popoverRef =
        useRef<HTMLDivElement>(

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

                ),

            [

                format,

                locale,

            ],

        );
    /* ---------------------------------------------------------------------- */
    /* Runtime Setter                                                         */
    /* ---------------------------------------------------------------------- */

    const setValue =
        useCallback(

            (

                next: SetStateAction<DateValue>,

            ) => {

                const resolved =

                    typeof next === "function"

                        ? next(

                            value,

                        )

                        : next;

                if (

                    !isControlled

                ) {

                    setUncontrolledValue(

                        resolved,

                    );

                }

                onValueChange?.(

                    resolved,

                );

            },

            [

                value,

                isControlled,

                onValueChange,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Validation                                                             */
    /* ---------------------------------------------------------------------- */

    const isDateDisabled =
        useCallback(

            (

                date: Date,

            ) => {

                if (

                    minDate &&

                    date < minDate

                ) {

                    return true;

                }

                if (

                    maxDate &&

                    date > maxDate

                ) {

                    return true;

                }

                for (

                    const matcher of disabledDates

                ) {

                    if (

                        matcher instanceof Date

                    ) {

                        if (

                            isSameDay(

                                matcher,

                                date,

                            )

                        ) {

                            return true;

                        }

                    }

                    else if (

                        matcher(

                            date,

                        )

                    ) {

                        return true;

                    }

                }

                return false;

            },

            [

                minDate,

                maxDate,

                disabledDates,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Calendar Controls                                                      */
    /* ---------------------------------------------------------------------- */

    const openCalendar =
        useCallback(

            () => {

                if (

                    disabled ||

                    readOnly

                ) {

                    return;

                }

                setOpen(

                    true,

                );

            },

            [

                disabled,

                readOnly,

            ],

        );

    const closeCalendar =
        useCallback(

            () => {

                setOpen(

                    false,

                );

            },

            [],

        );

    const toggleCalendar =
        useCallback(

            () => {

                if (

                    disabled ||

                    readOnly

                ) {

                    return;

                }

                setOpen(

                    previous =>

                        !previous,

                );

            },

            [

                disabled,

                readOnly,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Month Navigation                                                       */
    /* ---------------------------------------------------------------------- */

    const nextMonth =
        useCallback(

            () => {

                setVisibleMonth(

                    previous =>

                        addMonths(

                            previous,

                            1,

                        ),

                );

            },

            [],

        );

    const previousMonth =
        useCallback(

            () => {

                setVisibleMonth(

                    previous =>

                        addMonths(

                            previous,

                            -1,

                        ),

                );

            },

            [],

        );

    /* ---------------------------------------------------------------------- */
    /* Public Runtime                                                         */
    /* ---------------------------------------------------------------------- */

    const parser: DateParser =
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

    const formatter: DateFormatter =
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

            visibleMonth,

            open,

            /* -------------------------------------------------------------- */
            /* Configuration                                                  */
            /* -------------------------------------------------------------- */

            locale,

            weekStartsOn,

            minDate,

            maxDate,

            disabledDates,

            closeOnSelect,

            clearable,

            disabled,

            readOnly,

            /* -------------------------------------------------------------- */
            /* Refs                                                           */
            /* -------------------------------------------------------------- */

            inputRef,

            buttonRef,

            popoverRef,

            /* -------------------------------------------------------------- */
            /* Actions                                                        */
            /* -------------------------------------------------------------- */

            setValue,

            setOpen,

            openCalendar,

            closeCalendar,

            toggleCalendar,

            nextMonth,

            previousMonth,

            setVisibleMonth,

            isDateDisabled,

            parse: parser,

            format: formatter,

        }),

        [

            value,

            visibleMonth,

            open,

            locale,

            weekStartsOn,

            minDate,

            maxDate,

            disabledDates,

            closeOnSelect,

            clearable,

            disabled,

            readOnly,

            inputRef,

            buttonRef,

            popoverRef,

            setValue,

            setOpen,

            openCalendar,

            closeCalendar,

            toggleCalendar,

            nextMonth,

            previousMonth,

            setVisibleMonth,

            isDateDisabled,

            parser,

            formatter,

        ],

    );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <DatePickerContext.Provider
            value={context}
        >

            {children}

        </DatePickerContext.Provider>

    );

}

DatePickerProvider.displayName =
    "DatePickerProvider";

export default DatePickerProvider;
