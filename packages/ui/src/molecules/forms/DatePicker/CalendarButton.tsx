/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: CalendarButton.tsx
 *
 * Toggle button for the DatePicker calendar.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    Calendar,
} from "lucide-react";

import {
    Button,
} from "@/atoms/forms/Button";

import {
    cn,
    composeRefs,
} from "@/utils";

import {
    useDatePicker,
} from "./useDatePicker";

import type {
    CalendarButtonProps,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CalendarButton =
forwardRef<
HTMLButtonElement,
CalendarButtonProps
>(

function CalendarButton(

{

    className,

    children,

},

forwardedRef,

) {

    const {

        buttonRef,

        open,

        toggleCalendar,

        disabled,

        readOnly,

    } = useDatePicker();

    const isDisabled =
        disabled ||
        readOnly;

    return (

        <Button

            ref={composeRefs(

                forwardedRef,

                buttonRef,

            )}

            type="button"

            variant="ghost"

            size="icon"

            disabled={isDisabled}

            aria-label="Toggle calendar"

            aria-haspopup="dialog"

            aria-expanded={open}

            aria-controls="datepicker-calendar"

            className={cn(

                "shrink-0",

                className,

            )}

            onClick={toggleCalendar}

        >

            {

                children ??

                (

                    <Calendar

                        className="h-4 w-4"

                        aria-hidden="true"

                    />

                )

            }

        </Button>

    );

},

);

CalendarButton.displayName =
    "CalendarButton";

export default CalendarButton;
