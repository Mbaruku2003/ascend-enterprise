/**
 * ============================================================================
 * Ascend Enterprise UI
 * Autocomplete
 * ----------------------------------------------------------------------------
 * File: useAutocomplete.ts
 *
 * Enterprise hook for consuming the Autocomplete runtime.
 *
 * ============================================================================
 */

import {
    useContext,
} from "react";

import AutocompleteContext from "./AutocompleteContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useAutocomplete() {

    const context =
        useContext(
            AutocompleteContext,
        );

    if (context === null) {

        throw new Error(

            "useAutocomplete must be used within an AutocompleteProvider.",

        );

    }

    return context;

}

export default useAutocomplete;
