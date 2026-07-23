/**
 * ============================================================================
 * Ascend Enterprise UI
 * Autocomplete
 * ----------------------------------------------------------------------------
 * File: AutocompleteContext.tsx
 *
 * Shared context for the Autocomplete runtime.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    AutocompleteContextValue,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const AutocompleteContext =
    createContext<
        AutocompleteContextValue | null
    >(null);

/* -------------------------------------------------------------------------- */
/* Display Name                                                               */
/* -------------------------------------------------------------------------- */

AutocompleteContext.displayName =
    "AutocompleteContext";

export default AutocompleteContext;
