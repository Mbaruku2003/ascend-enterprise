/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencyInput.tsx
 *
 * Input component for CurrencyField.
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
    WheelEvent,
} from "react";

import {
    Input,
} from "@/atoms/forms/Input";

import {
    cn,
    composeRefs,
} from "@/utils";

import {
    useCurrencyField,
} from "./useCurrencyField";

import type {
    CurrencyInputProps,
} from "./CurrencyField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CurrencyInput =
forwardRef<
HTMLInputElement,
CurrencyInputProps
>(

function CurrencyInput(

{

    className,

    onChange,

    onFocus,

    onBlur,

    onWheel,

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

        increment,

        decrement,

        enableWheel,

        disabled: contextDisabled,

        readOnly: contextReadOnly,

    } = useCurrencyField();

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

        setDisplayValue(

            value === null

                ? ""

                : String(value),

        );

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

    function handleWheel(

        event: WheelEvent<HTMLInputElement>,

    ) {

        onWheel?.(event);

        if (

            event.defaultPrevented ||

            !enableWheel ||

            isDisabled ||

            isReadOnly

        ) {

            return;

        }

        event.preventDefault();

        if (

            event.deltaY < 0

        ) {

            increment();

        }

        else {

            decrement();

        }

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

            inputMode="decimal"

            autoComplete="off"

            spellCheck={false}

            value={displayValue}

            disabled={isDisabled}

            readOnly={isReadOnly}

            aria-label="Currency amount"

            className={cn(

                "min-w-0",

                "flex-1",

                className,

            )}

            onFocus={handleFocus}

            onBlur={handleBlur}

            onChange={handleChange}

            onWheel={handleWheel}

        />

    );

},

);

CurrencyInput.displayName =
    "CurrencyInput";

export default CurrencyInput;
