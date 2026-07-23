/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberInput.tsx
 *
 * Enterprise numeric input.
 *
 * Features
 * • Controlled by NumberFieldProvider
 * • Parser / Formatter support
 * • Arrow key increment/decrement
 * • Optional mouse wheel increment/decrement
 * • Accessible spinbutton
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    WheelEvent,
} from "react";

import {
    composeRefs,
} from "@/utils";

import {
    Input,
} from "@/atoms/forms/Input";

import {
    useNumberField,
} from "./useNumberField";

import type {
    NumberInputProps,
} from "./NumberField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const NumberInput =
forwardRef<
HTMLInputElement,
NumberInputProps
>(

function NumberInput(

{

    onChange,

    onBlur,

    onFocus,

    onKeyDown,

    onWheel,

    disabled,

    readOnly,

    ...props

},

forwardedRef,

) {

    const {

        value,

        min,

        max,

        enableWheel,

        inputRef,

        setValue,

        increment,

        decrement,

        parse,

        format,

        disabled: contextDisabled,

        readOnly: contextReadOnly,

    } = useNumberField();

    /* ---------------------------------------------------------------------- */
    /* Runtime                                                                */
    /* ---------------------------------------------------------------------- */

    const isDisabled =

        disabled ||

        contextDisabled;

    const isReadOnly =

        readOnly ||

        contextReadOnly;

    /* ---------------------------------------------------------------------- */
    /* Events                                                                 */
    /* ---------------------------------------------------------------------- */

    function handleChange(

        event: ChangeEvent<HTMLInputElement>,

    ) {

        onChange?.(

            event,

        );

        if (

            event.defaultPrevented ||

            isDisabled ||

            isReadOnly

        ) {

            return;

        }

        setValue(

            parse(

                event.target.value,

            ),

        );

    }

    function handleBlur(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onBlur?.(

            event,

        );

        if (

            event.defaultPrevented

        ) {

            return;

        }

        /**
         * Re-format after editing.
         */
        event.currentTarget.value =
            format(

                value,

            );

    }

    function handleFocus(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onFocus?.(

            event,

        );

    }

    function handleKeyDown(

        event: KeyboardEvent<HTMLInputElement>,

    ) {

        onKeyDown?.(

            event,

        );

        if (

            event.defaultPrevented ||

            isDisabled ||

            isReadOnly

        ) {

            return;

        }

        switch (

            event.key

        ) {

            case "ArrowUp":

                event.preventDefault();

                increment();

                break;

            case "ArrowDown":

                event.preventDefault();

                decrement();

                break;

            default:

                break;

        }

    }

    function handleWheel(

        event: WheelEvent<HTMLInputElement>,

    ) {

        onWheel?.(

            event,

        );

        if (

            event.defaultPrevented ||

            !enableWheel ||

            isDisabled ||

            isReadOnly ||

            document.activeElement !==
            event.currentTarget

        ) {

            return;

        }

        event.preventDefault();

        if (

            event.deltaY < 0

        ) {

            increment();

        }

        else if (

            event.deltaY > 0

        ) {

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

            role="spinbutton"

            value={format(

                value,

            )}

            disabled={isDisabled}

            readOnly={isReadOnly}

            aria-valuenow={

                value ?? undefined

            }

            aria-valuemin={min}

            aria-valuemax={max}

            aria-disabled={isDisabled}

            aria-readonly={isReadOnly}

            onChange={handleChange}

            onBlur={handleBlur}

            onFocus={handleFocus}

            onKeyDown={handleKeyDown}

            onWheel={handleWheel}

        />

    );

},

);

NumberInput.displayName =
    "NumberInput";

export default NumberInput;
