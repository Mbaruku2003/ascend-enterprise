/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: useSearch.ts
 *
 * Enterprise hook for consuming the Search runtime.
 *
 * ============================================================================
 */

import {
    useContext,
} from "react";

import SearchContext from "./SearchContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useSearch() {

    const context =
        useContext(
            SearchContext,
        );

    if (context === null) {

        throw new Error(

            "useSearch must be used within a SearchProvider.",

        );

    }

    return context;

}

export default useSearch;
