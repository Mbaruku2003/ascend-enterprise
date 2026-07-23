/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencyFieldContext.tsx
 *
 * React context for the CurrencyField runtime.
 *
 * Runtime logic belongs exclusively in CurrencyFieldProvider.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    CurrencyFieldContextValue,
} from "./CurrencyField.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const CurrencyFieldContext =
    createContext<CurrencyFieldContextValue | null>(
        null,
    );

CurrencyFieldContext.displayName =
    "CurrencyFieldContext";

export default CurrencyFieldContext;
