/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInput.tsx
 *
 * Root composition component for the enterprise OTPInput.
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
    OTPInputProvider,
} from "./OTPInputProvider";

import {
    OTPInputGroup,
} from "./OTPInputGroup";

import {
    OTPInputSlot,
} from "./OTPInputSlot";

import type {
    OTPInputProps,
} from "./OTPInput.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const OTPInput =
forwardRef<
HTMLDivElement,
OTPInputProps
>(

function OTPInput(

{

    children,

    className,

    value,

    defaultValue,

    onValueChange,

    length = 6,

    mode = "numeric",

    password = false,

    autoFocus = false,

    clearOnFocus = false,

    disabled = false,

    readOnly = false,

},

forwardedRef,

) {

    return (

        <OTPInputProvider

            value={value}

            defaultValue={defaultValue}

            onValueChange={onValueChange}

            length={length}

            mode={mode}

            password={password}

            autoFocus={autoFocus}

            clearOnFocus={clearOnFocus}

            disabled={disabled}

            readOnly={readOnly}

        >

            <div

                ref={forwardedRef}

                className={cn(

                    "flex",

                    "w-fit",

                    "items-center",

                    "gap-2",

                    className,

                )}

            >

                {

                    children ??

                    (

                        <OTPInputGroup>

                            {

                                Array.from(

                                    {

                                        length,

                                    },

                                    (

                                        _,

                                        index,

                                    ) => (

                                        <OTPInputSlot

                                            key={index}

                                            index={index}

                                        />

                                    ),

                                )

                            }

                        </OTPInputGroup>

                    )

                }

            </div>

        </OTPInputProvider>

    );

},

);

OTPInput.displayName =
    "OTPInput";

export default OTPInput;
