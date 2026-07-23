/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInputSeparator.tsx
 *
 * Visual separator for grouped OTP inputs.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import type {
    OTPInputSeparatorProps,
} from "./OTPInput.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const OTPInputSeparator =
forwardRef<
HTMLSpanElement,
OTPInputSeparatorProps
>(

function OTPInputSeparator(

{

    children = "-",

    className,

},

forwardedRef,

) {

    return (

        <span

            ref={forwardedRef}

            aria-hidden="true"

            className={cn(

                "flex",

                "items-center",

                "justify-center",

                "select-none",

                "text-muted-foreground",

                "font-medium",

                className,

            )}

        >

            {children}

        </span>

    );

},

);

OTPInputSeparator.displayName =
    "OTPInputSeparator";

export default OTPInputSeparator;
