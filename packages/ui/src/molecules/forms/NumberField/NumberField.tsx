/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberField.tsx
 *
 * Root component for the enterprise NumberField.
 *
 * Responsible only for composition.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import {
    NumberFieldProvider,
} from "./NumberFieldProvider";

import {
    NumberInput,
} from "./NumberInput";

import {
    NumberIncrement,
} from "./NumberIncrement";

import {
    NumberDecrement,
} from "./NumberDecrement";

import type {
    NumberFieldProps,
} from "./NumberField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const NumberField =
forwardRef<
HTMLDivElement,
NumberFieldProps
>(

function NumberField(

{

    className,

    children,

    showControls = true,

    value,

    defaultValue,

    onValueChange,

    min,

    max,

    step,

    precision,

    enableWheel,

    parse,

    format,

    disabled = false,

    readOnly = false,

    ...inputProps

},

forwardedRef,

) {

    return (

        <NumberFieldProvider

            value={value}

            defaultValue={defaultValue}

            onValueChange={onValueChange}

            min={min}

            max={max}

            step={step}

            precision={precision}

            enableWheel={enableWheel}

            parse={parse}

            format={format}

            disabled={disabled}

            readOnly={readOnly}

        >

            <div

                ref={forwardedRef}

                className={cn(

                    "relative",

                    "flex",

                    "w-full",

                    "flex-col",

                    "gap-2",

                    className,

                )}

            >

                <div

                    className={cn(

                        "relative",

                        "flex",

                        "items-center",

                    )}

                >

                    <NumberInput

                        {...inputProps}

                        disabled={disabled}

                        readOnly={readOnly}

                    />

                    {

                        showControls && (

                            <div

                                className={cn(

                                    "absolute",

                                    "right-2",

                                    "top-1/2",

                                    "-translate-y-1/2",

                                    "flex",

                                    "flex-col",

                                    "gap-0.5",

                                )}

                            >

                                <NumberIncrement />

                                <NumberDecrement />

                            </div>

                        )

                    }

                </div>

                {children}

            </div>

        </NumberFieldProvider>

    );

},

);

NumberField.displayName =
    "NumberField";

export default NumberField;
