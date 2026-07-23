/**
 * ============================================================================
 * Ascend Enterprise UI
 * DatePicker
 * ----------------------------------------------------------------------------
 * File: DateInput.tsx
 *
 * Input component for DatePicker.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useEffect,
    useState,
} from "react";

import type {
    ChangeEvent,
    FocusEvent,
} from "react";

import {
    Input,
} from "@/atoms/forms/Input";

import {
    cn,
    composeRefs,
} from "@/utils";

import {
    useDatePicker,
} from "./useDatePicker";

import type {
    DateInputProps,
} from "./DatePicker.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const DateInput =
forwardRef<
HTMLInputElement,
DateInputProps
>(

function DateInput(

{

    className,

    onFocus,

    onBlur,

    onChange,

    disabled,

    readOnly,

    ...props

},

forwardedRef,

) {

    const {

        value,

        inputRef,

        parse,

        format,

        setValue,

        openCalendar,

        disabled: contextDisabled,

        readOnly: contextReadOnly,

    } = useDatePicker();

    const isDisabled =
        disabled ||
        contextDisabled;

    const isReadOnly =
        readOnly ||
        contextReadOnly;

    const [

        displayValue,

        setDisplayValue,

    ] = useState(

        format(value),

    );

    /* ---------------------------------------------------------------------- */
    /* Sync Display                                                           */
    /* ---------------------------------------------------------------------- */

    useEffect(

        () => {

            setDisplayValue(

                format(value),

            );

        },

        [

            value,

            format,

        ],

    );

    /* ---------------------------------------------------------------------- */
    /* Events                                                                 */
    /* ---------------------------------------------------------------------- */

    function handleFocus(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onFocus?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        openCalendar();

    }

    function handleBlur(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onBlur?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        setDisplayValue(

            format(value),

        );

    }

    function handleChange(

        event: ChangeEvent<HTMLInputElement>,

    ) {

        onChange?.(event);

        if (

            event.defaultPrevented ||

            isDisabled ||

            isReadOnly

        ) {

            return;

        }

        const text =
            event.target.value;

        setDisplayValue(

            text,

        );

        setValue(

            parse(text),

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <Input

            {...props}

            ref={composeRefs(

                forwardedRef,

                inputRef,

            )}

            type="text"

            autoComplete="off"

            spellCheck={false}

            value={displayValue}

            disabled={isDisabled}

            readOnly={isReadOnly}

            aria-label="Date"

            className={cn(

                "flex-1",

                className,

            )}

            onFocus={handleFocus}

            onBlur={handleBlur}

            onChange={handleChange}

        />

    );

},

);

DateInput.displayName =
    "DateInput";

export default DateInput;
