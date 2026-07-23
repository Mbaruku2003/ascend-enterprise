/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: DatePicker.tsx
 *
 * Root composition component.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import {
    DatePickerProvider,
} from "./DatePickerProvider";

import {
    DateInput,
} from "./DateInput";

import {
    CalendarButton,
} from "./CalendarButton";

import {
    CalendarPopover,
} from "./CalendarPopover";

import {
    CalendarHeader,
} from "./CalendarHeader";

import {
    CalendarGrid,
} from "./CalendarGrid";

import type {
    DatePickerProps,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const DatePicker =
forwardRef<
HTMLDivElement,
DatePickerProps
>(

function DatePicker(

{

    children,

    className,

    value,

    defaultValue,

    onValueChange,

    minDate,

    maxDate,

    disabledDates,

    locale = "en-US",

    weekStartsOn = 0,

    closeOnSelect = true,

    clearable = true,

    parse,

    format,

    disabled = false,

    readOnly = false,

},

forwardedRef,

) {

    return (

        <DatePickerProvider

            value={value}

            defaultValue={defaultValue}

            onValueChange={onValueChange}

            minDate={minDate}

            maxDate={maxDate}

            disabledDates={disabledDates}

            locale={locale}

            weekStartsOn={weekStartsOn}

            closeOnSelect={closeOnSelect}

            clearable={clearable}

            parse={parse}

            format={format}

            disabled={disabled}

            readOnly={readOnly}

        >

            <div

                ref={forwardedRef}

                className={cn(

                    "relative",

                    "inline-flex",

                    "items-center",

                    "gap-2",

                    className,

                )}

            >

                {

                    children ??

                    (

                        <>

                            <DateInput />

                            <CalendarButton />

                            <CalendarPopover>

                                <CalendarHeader />

                                <CalendarGrid />

                            </CalendarPopover>

                        </>

                    )

                }

            </div>

        </DatePickerProvider>

    );

},

);

DatePicker.displayName =
    "DatePicker";

export default DatePicker;
