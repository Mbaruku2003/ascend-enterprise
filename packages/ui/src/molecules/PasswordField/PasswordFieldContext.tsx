/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordFieldContext.tsx
 *
 * Shared context for the PasswordField runtime.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    PasswordFieldContextValue,
} from "./PasswordField.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const PasswordFieldContext =
    createContext<
        PasswordFieldContextValue | null
    >(null);

/* -------------------------------------------------------------------------- */
/* Display Name                                                               */
/* -------------------------------------------------------------------------- */

PasswordFieldContext.displayName =
    "PasswordFieldContext";

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export default PasswordFieldContext;
