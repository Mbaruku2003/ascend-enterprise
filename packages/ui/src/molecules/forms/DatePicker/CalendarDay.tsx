/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: CalendarDay.tsx
 *
 * Individual calendar day cell.
 *
 * ============================================================================
 */

import {
    useMemo,
} from "react";

import {
    Button,
} from "@/atoms/forms/Button";

import {
    cn,
} from "@/utils";

import {
    useDatePicker,
} from "./useDatePicker";

import type {
    CalendarDayProps,
} from "./DatePicker.types";

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

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function CalendarDay({

    date,

    className,

}: CalendarDayProps) {

    const {

        value,

        visibleMonth,

        disabled,

        readOnly,

        closeOnSelect,

        isDateDisabled,

        setValue,

        closeCalendar,

    } = useDatePicker();

    const today =
        useMemo(
            () => new Date(),
            [],
        );

    const selected =

        value !== null &&

        isSameDay(
            value,
            date,
        );

    const isToday =
        isSameDay(
            today,
            date,
        );

    const outsideMonth =

        date.getMonth() !==

        visibleMonth.getMonth();

    const unavailable =

        disabled ||

        readOnly ||

        isDateDisabled(
            date,
        );

    function handleClick() {

        if (

            unavailable

        ) {

            return;

        }

        setValue(
            date,
        );

        if (

            closeOnSelect

        ) {

            closeCalendar();

        }

    }

    return (

        <Button

            type="button"

            variant={
                selected
                    ? "default"
                    : "ghost"
            }

            size="icon"

            disabled={unavailable}

            aria-selected={selected}

            aria-current={
                isToday
                    ? "date"
                    : undefined
            }

            className={cn(

                "h-9",

                "w-9",

                "rounded-md",

                "font-normal",

                outsideMonth &&

                    "text-muted-foreground opacity-50",

                isToday &&

                    !selected &&

                    "border border-primary",

                className,

            )}

            onClick={handleClick}

        >

            {date.getDate()}

        </Button>

    );

}

CalendarDay.displayName =
    "CalendarDay";

export default CalendarDay;
