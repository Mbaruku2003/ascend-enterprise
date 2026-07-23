/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberIncrement.tsx
 *
 * Increment control for NumberField.
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
    NumberIncrementProps,
} from "./NumberField.types";

/* -------------------------------------------------------------------------- */
/* Icon                                                                       */
/* -------------------------------------------------------------------------- */

function ChevronUpIcon() {

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
            <polyline points="18 15 12 9 6 15" />
        </svg>

    );

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const NumberIncrement =
forwardRef<
HTMLButtonElement,
NumberIncrementProps
>(

function NumberIncrement(

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

        increment,

        value,

        max,

        disabled: contextDisabled,

        readOnly,

    } = useNumberField();

    const isDisabled =

        disabled ||

        contextDisabled ||

        readOnly ||

        (

            max !== undefined &&

            value !== null &&

            value >= max

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

        increment();

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

                "Increase value"

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

            <ChevronUpIcon />

        </Button>

    );

},

);

NumberIncrement.displayName =
    "NumberIncrement";

export default NumberIncrement;
