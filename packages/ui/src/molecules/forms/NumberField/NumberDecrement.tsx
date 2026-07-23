/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberDecrement.tsx
 *
 * Decrement control for NumberField.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    MouseEvent,
} from "react";

import {
    Button,
} from "@/atoms/forms/Button";

import {
    cn,
} from "@/utils";

import {
    useNumberField,
} from "./useNumberField";

import type {
    NumberDecrementProps,
} from "./NumberField.types";

/* -------------------------------------------------------------------------- */
/* Icon                                                                       */
/* -------------------------------------------------------------------------- */

function ChevronDownIcon() {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
            aria-hidden="true"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>

    );

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const NumberDecrement =
forwardRef<
HTMLButtonElement,
NumberDecrementProps
>(

function NumberDecrement(

{

    className,

    label,

    disabled,

    onMouseDown,

    onClick,

    ...props

},

forwardedRef,

) {

    const {

        decrement,

        value,

        min,

        disabled: contextDisabled,

        readOnly,

    } = useNumberField();

    const isDisabled =

        disabled ||

        contextDisabled ||

        readOnly ||

        (

            min !== undefined &&

            value !== null &&

            value <= min

        );

    function handleMouseDown(

        event: MouseEvent<HTMLButtonElement>,

    ) {

        onMouseDown?.(event);

        if (

            !event.defaultPrevented

        ) {

            event.preventDefault();

        }

    }

    function handleClick(

        event: MouseEvent<HTMLButtonElement>,

    ) {

        onClick?.(event);

        if (

            event.defaultPrevented ||

            isDisabled

        ) {

            return;

        }

        decrement();

    }

    return (

        <Button

            {...props}

            ref={forwardedRef}

            type="button"

            variant="ghost"

            size="icon"

            disabled={isDisabled}

            aria-label={

                label ??

                "Decrease value"

            }

            onMouseDown={handleMouseDown}

            onClick={handleClick}

            className={cn(

                "h-4",

                "w-4",

                "rounded-sm",

                "p-0",

                className,

            )}

        >

            <ChevronDownIcon />

        </Button>

    );

},

);

NumberDecrement.displayName =
    "NumberDecrement";

export default NumberDecrement;
