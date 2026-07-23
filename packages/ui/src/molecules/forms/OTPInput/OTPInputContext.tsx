/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInputContext.tsx
 *
 * React context for the OTPInput runtime.
 *
 * Runtime logic belongs exclusively in OTPInputProvider.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    OTPInputContextValue,
} from "./OTPInput.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const OTPInputContext =
    createContext<OTPInputContextValue | null>(
        null,
    );

OTPInputContext.displayName =
    "OTPInputContext";

export default OTPInputContext;
