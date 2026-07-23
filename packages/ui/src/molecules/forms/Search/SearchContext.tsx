/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: SearchContext.tsx
 *
 * Shared context for the Search runtime.
 *
 * ============================================================================
 */

import {
    createContext,
} from "react";

import type {
    SearchContextValue,
} from "./Search.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const SearchContext =
    createContext<
        SearchContextValue | null
    >(null);

/* -------------------------------------------------------------------------- */
/* Display Name                                                               */
/* -------------------------------------------------------------------------- */

SearchContext.displayName =
    "SearchContext";

export default SearchContext;
