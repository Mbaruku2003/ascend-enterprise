/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: useDatePicker.ts
 *
 * Hook for accessing the DatePicker runtime.
 *
 * ============================================================================
 */

import {
    useContext,
} from "react";

import DatePickerContext from "./DatePickerContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useDatePicker() {

    const context =
        useContext(
            DatePickerContext,
        );

    if (

        context === null

    ) {

        throw new Error(

            "useDatePicker must be used within a DatePickerProvider.",

        );

    }

    return context;

}

export default useDatePicker;
