/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: useCurrencyField.ts
 *
 * Hook for accessing the CurrencyField runtime.
 *
 * ============================================================================
 */

import {
    useContext,
} from "react";

import CurrencyFieldContext from "./CurrencyFieldContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useCurrencyField() {

    const context =
        useContext(
            CurrencyFieldContext,
        );

    if (

        context === null

    ) {

        throw new Error(

            "useCurrencyField must be used within a CurrencyFieldProvider.",

        );

    }

    return context;

}

export default useCurrencyField;
