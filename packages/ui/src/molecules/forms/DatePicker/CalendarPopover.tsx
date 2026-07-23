/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: CalendarPopover.tsx
 *
 * Calendar popover container.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
    composeRefs,
} from "@/utils";

import {
    useDatePicker,
} from "./useDatePicker";

import type {
    CalendarPopoverProps,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CalendarPopover =
forwardRef<
HTMLDivElement,
CalendarPopoverProps
>(

function CalendarPopover(

{

    children,

    className,

},

forwardedRef,

) {

    const {

        open,

        popoverRef,

    } = useDatePicker();

    if (

        !open

    ) {

        return null;

    }

    return (

        <div

            ref={composeRefs(

                forwardedRef,

                popoverRef,

            )}

            id="datepicker-calendar"

            role="dialog"

            aria-modal="false"

            className={cn(

                "absolute",

                "top-full",

                "left-0",

                "z-50",

                "mt-2",

                "min-w-[18rem]",

                "rounded-lg",

                "border",

                "border-border",

                "bg-background",

                "shadow-lg",

                "p-3",

                "animate-in",

                "fade-in-0",

                "zoom-in-95",

                className,

            )}

        >

            {children}

        </div>

    );

},

);

CalendarPopover.displayName =
    "CalendarPopover";

export default CalendarPopover;
