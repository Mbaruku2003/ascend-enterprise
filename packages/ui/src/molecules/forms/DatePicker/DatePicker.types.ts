/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: DatePicker.types.ts
 *
 * Shared types for the enterprise DatePicker component.
 *
 * ============================================================================
 */

import type {
    Dispatch,
    InputHTMLAttributes,
    ReactNode,
    RefObject,
    SetStateAction,
} from "react";

/* -------------------------------------------------------------------------- */
/* Core Types                                                                 */
/* -------------------------------------------------------------------------- */

export type DateValue = Date | null;

export type DateParser = (
    value: string,
) => DateValue;

export type DateFormatter = (
    value: DateValue,
) => string;

export type DateMatcher =
    | Date
    | ((date: Date) => boolean);

/* -------------------------------------------------------------------------- */
/* Shared Options                                                             */
/* -------------------------------------------------------------------------- */

export interface DatePickerOptions {

    /**
     * Controlled value.
     */
    value?: DateValue;

    /**
     * Initial uncontrolled value.
     */
    defaultValue?: DateValue;

    /**
     * Called whenever the selected date changes.
     */
    onValueChange?(
        value: DateValue,
    ): void;

    /**
     * Earliest selectable date.
     */
    minDate?: Date;

    /**
     * Latest selectable date.
     */
    maxDate?: Date;

    /**
     * Disabled dates.
     */
    disabledDates?: DateMatcher[];

    /**
     * Locale used for formatting.
     *
     * @default "en-US"
     */
    locale?: string;

    /**
     * First day of week.
     *
     * 0 = Sunday
     * 1 = Monday
     *
     * @default 0
     */
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * Close calendar after selecting a date.
     *
     * @default true
     */
    closeOnSelect?: boolean;

    /**
     * Allow clearing the value.
     *
     * @default true
     */
    clearable?: boolean;

    /**
     * Custom parser.
     */
    parse?: DateParser;

    /**
     * Custom formatter.
     */
    format?: DateFormatter;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface DatePickerProps
    extends DatePickerOptions {

    children?: ReactNode;

    className?: string;

    disabled?: boolean;

    readOnly?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface DatePickerProviderProps
    extends DatePickerOptions {

    children?: ReactNode;

    disabled?: boolean;

    readOnly?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime State                                                              */
/* -------------------------------------------------------------------------- */

export interface DatePickerState {

    value: DateValue;

    /**
     * Current month being viewed.
     */
    visibleMonth: Date;

    /**
     * Calendar open state.
     */
    open: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime Configuration                                                      */
/* -------------------------------------------------------------------------- */

export interface DatePickerConfiguration {

    locale: string;

    weekStartsOn: number;

    minDate?: Date;

    maxDate?: Date;

    disabledDates: DateMatcher[];

    closeOnSelect: boolean;

    clearable: boolean;

    disabled: boolean;

    readOnly: boolean;

}

/* -------------------------------------------------------------------------- */
/* Runtime Actions                                                            */
/* -------------------------------------------------------------------------- */

export interface DatePickerActions {

    setValue: Dispatch<
        SetStateAction<DateValue>
    >;

    setOpen(
        open: boolean,
    ): void;

    openCalendar(): void;

    closeCalendar(): void;

    toggleCalendar(): void;

    nextMonth(): void;

    previousMonth(): void;

    setVisibleMonth(
        month: Date,
    ): void;

    isDateDisabled(
        date: Date,
    ): boolean;

    parse: DateParser;

    format: DateFormatter;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface DatePickerContextValue
    extends
        DatePickerState,
        DatePickerConfiguration,
        DatePickerActions {

    inputRef: RefObject<HTMLInputElement | null>;

    buttonRef: RefObject<HTMLButtonElement | null>;

    popoverRef: RefObject<HTMLDivElement | null>;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface DateInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        | "value"
        | "defaultValue"
        | "type"
        | "onChange"
    > {}

/* -------------------------------------------------------------------------- */
/* Calendar Button                                                            */
/* -------------------------------------------------------------------------- */

export interface CalendarButtonProps {

    className?: string;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Calendar Popover                                                           */
/* -------------------------------------------------------------------------- */

export interface CalendarPopoverProps {

    className?: string;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Calendar Grid                                                              */
/* -------------------------------------------------------------------------- */

export interface CalendarGridProps {

    className?: string;

}

/* -------------------------------------------------------------------------- */
/* Calendar Header                                                            */
/* -------------------------------------------------------------------------- */

export interface CalendarHeaderProps {

    className?: string;

}

/* -------------------------------------------------------------------------- */
/* Calendar Day                                                               */
/* -------------------------------------------------------------------------- */

export interface CalendarDayProps {

    date: Date;

    className?: string;

}
