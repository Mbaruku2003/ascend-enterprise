/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: DatePickerContext.tsx
 *
 * React context for the DatePicker runtime.
 *
 * Runtime logic belongs exclusively in DatePickerProvider.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    DatePickerContextValue,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const DatePickerContext =
    createContext<DatePickerContextValue | null>(
        null,
    );

DatePickerContext.displayName =
    "DatePickerContext";

export default DatePickerContext;
