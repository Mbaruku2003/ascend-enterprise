/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: useNumberField.ts
 *
 * Enterprise hook for consuming the NumberField runtime.
 *
 * ============================================================================
 */

import {
    useContext,
} from "react";

import NumberFieldContext from "./NumberFieldContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useNumberField() {

    const context =
        useContext(
            NumberFieldContext,
        );

    if (context === null) {

        throw new Error(

            "useNumberField must be used within a NumberFieldProvider.",

        );

    }

    return context;

}

export default useNumberField;
