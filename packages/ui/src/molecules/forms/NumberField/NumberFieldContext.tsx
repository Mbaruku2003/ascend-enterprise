/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberFieldContext.tsx
 *
 * Shared context for the enterprise NumberField runtime.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    NumberFieldContextValue,
} from "./NumberField.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const NumberFieldContext =
    createContext<
        NumberFieldContextValue | null
    >(null);

/* -------------------------------------------------------------------------- */
/* Display Name                                                               */
/* -------------------------------------------------------------------------- */

NumberFieldContext.displayName =
    "NumberFieldContext";

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export default NumberFieldContext;
