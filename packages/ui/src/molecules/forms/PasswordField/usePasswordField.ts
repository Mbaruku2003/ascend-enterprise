/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: usePasswordField.ts
 *
 * Enterprise hook for consuming the PasswordField runtime.
 *
 * ============================================================================
 */

import {
    useContext,
} from "react";

import PasswordFieldContext from "./PasswordFieldContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function usePasswordField() {

    const context =
        useContext(
            PasswordFieldContext,
        );

    if (context === null) {

        throw new Error(

            "usePasswordField must be used within a PasswordFieldProvider.",

        );

    }

    return context;

}

export default usePasswordField;
