/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: CalendarGrid.tsx
 *
 * Calendar month grid.
 *
 * ============================================================================
 */

import {
    useMemo,
} from "react";

import {
    cn,
} from "@/utils";

import {
    useDatePicker,
} from "./useDatePicker";

import {
    CalendarDay,
} from "./CalendarDay";

import type {
    CalendarGridProps,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const WEEKDAY_NAMES = [

    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",

] as const;

function startOfGrid(
    month: Date,
    weekStartsOn: number,
): Date {

    const first = new Date(

        month.getFullYear(),
        month.getMonth(),
        1,

    );

    const offset =

        (

            first.getDay() -

            weekStartsOn +

            7

        ) % 7;

    first.setDate(

        first.getDate() - offset,

    );

    return first;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function CalendarGrid({

    className,

}: CalendarGridProps) {

    const {

        visibleMonth,
        weekStartsOn,

    } = useDatePicker();

    const weekdays =
        useMemo(

            () =>

                [

                    ...WEEKDAY_NAMES.slice(

                        weekStartsOn,

                    ),

                    ...WEEKDAY_NAMES.slice(

                        0,

                        weekStartsOn,

                    ),

                ],

            [

                weekStartsOn,

            ],

        );

    const days =
        useMemo(

            () => {

                const start =
                    startOfGrid(

                        visibleMonth,
                        weekStartsOn,

                    );

                return Array.from(

                    {

                        length: 42,

                    },

                    (

                        _,

                        index,

                    ) => {

                        const day =
                            new Date(

                                start,

                            );

                        day.setDate(

                            start.getDate() +

                            index,

                        );

                        return day;

                    },

                );

            },

            [

                visibleMonth,
                weekStartsOn,

            ],

        );

    return (

        <div
            className={cn(
                "space-y-2",
                className,
            )}
        >

            {/* Weekday Header */}

            <div
                className="
                    grid
                    grid-cols-7
                    gap-1
                "
            >

                {

                    weekdays.map(

                        weekday => (

                            <div

                                key={weekday}

                                className="
                                    flex
                                    items-center
                                    justify-center
                                    text-xs
                                    font-medium
                                    text-muted-foreground
                                    h-8
                                "

                            >

                                {weekday}

                            </div>

                        ),

                    )

                }

            </div>

            {/* Calendar Days */}

            <div
                className="
                    grid
                    grid-cols-7
                    gap-1
                "
            >

                {

                    days.map(

                        day => (

                            <CalendarDay

                                key={day.toISOString()}

                                date={day}

                            />

                        ),

                    )

                }

            </div>

        </div>

    );

}

CalendarGrid.displayName =
    "CalendarGrid";

export default CalendarGrid;
