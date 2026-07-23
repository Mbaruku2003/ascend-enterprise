/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: CalendarHeader.tsx
 *
 * Calendar navigation header.
 *
 * ============================================================================
 */

import {
    useMemo,
} from "react";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

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
    CalendarHeaderProps,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function CalendarHeader({

    className,

}: CalendarHeaderProps) {

    const {

        visibleMonth,

        locale,

        previousMonth,

        nextMonth,

        disabled,

        readOnly,

    } = useDatePicker();

    const monthLabel =
        useMemo(

            () =>

                new Intl.DateTimeFormat(

                    locale,

                    {

                        month: "long",

                        year: "numeric",

                    },

                ).format(

                    visibleMonth,

                ),

            [

                locale,

                visibleMonth,

            ],

        );

    const controlsDisabled =
        disabled ||
        readOnly;

    return (

        <div

            className={cn(

                "flex",

                "items-center",

                "justify-between",

                "gap-2",

                className,

            )}

        >

            <Button

                type="button"

                variant="ghost"

                size="icon"

                aria-label="Previous month"

                disabled={controlsDisabled}

                onClick={previousMonth}

            >

                <ChevronLeft

                    className="h-4 w-4"

                    aria-hidden="true"

                />

            </Button>

            <div

                className="
                    flex-1
                    text-center
                    text-sm
                    font-semibold
                    select-none
                "

                aria-live="polite"

            >

                {monthLabel}

            </div>

            <Button

                type="button"

                variant="ghost"

                size="icon"

                aria-label="Next month"

                disabled={controlsDisabled}

                onClick={nextMonth}

            >

                <ChevronRight

                    className="h-4 w-4"

                    aria-hidden="true"

                />

            </Button>

        </div>

    );

}

CalendarHeader.displayName =
    "CalendarHeader";

export default CalendarHeader;
