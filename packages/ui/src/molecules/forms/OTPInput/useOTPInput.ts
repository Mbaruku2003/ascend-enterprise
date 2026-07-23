/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: useOTPInput.ts
 *
 * Hook for accessing the OTPInput runtime.
 *
 * ============================================================================
 */

import {
    useContext,
} from "react";

import OTPInputContext from "./OTPInputContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useOTPInput() {

    const context =
        useContext(
            OTPInputContext,
        );

    if (

        context === null

    ) {

        throw new Error(

            "useOTPInput must be used within an OTPInputProvider.",

        );

    }

    return context;

}

export default useOTPInput;
