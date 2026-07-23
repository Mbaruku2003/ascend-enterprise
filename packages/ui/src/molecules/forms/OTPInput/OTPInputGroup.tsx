/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInputGroup.tsx
 *
 * Layout component for grouping OTP input slots.
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
    OTPInputGroupProps,
} from "./OTPInput.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const OTPInputGroup =
forwardRef<
HTMLDivElement,
OTPInputGroupProps
>(

function OTPInputGroup(

{

    children,

    className,

},

forwardedRef,

) {

    return (

        <div

            ref={forwardedRef}

            role="group"

            className={cn(

                "flex",

                "items-center",

                "justify-center",

                "gap-2",

                className,

            )}

        >

            {children}

        </div>

    );

},

);

OTPInputGroup.displayName =
    "OTPInputGroup";

export default OTPInputGroup;
