/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: useCommandSearch.ts
 *
 * Search runtime for the Command System.
 *
 * Filtering is owned by CommandProvider. This hook simply exposes the
 * search runtime to consumers.
 *
 * ============================================================================
 */

import {
    useMemo,
} from "react";

import {
    useCommand,
} from "./useCommand";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useCommandSearch() {

    const {

        search,

        setSearch,

        filteredItems,

        collection,

    } = useCommand();

    /* ---------------------------------------------------------------------- */
    /* Helpers                                                                */
    /* ---------------------------------------------------------------------- */

    const isEmpty =
        useMemo(

            () =>

                filteredItems.length === 0,

            [

                filteredItems,

            ],

        );

    const hasResults =
        useMemo(

            () =>

                filteredItems.length > 0,

            [

                filteredItems,

            ],

        );

    const clear =
        () => {

            setSearch("");

        };

    /* ---------------------------------------------------------------------- */
    /* Public API                                                             */
    /* ---------------------------------------------------------------------- */

    return {

        /**
         * Current search query.
         */
        search,

        /**
         * Update the search query.
         */
        setSearch,

        /**
         * Clear the current search.
         */
        clear,

        /**
         * Shared command collection.
         */
        collection,

        /**
         * Filtered command items.
         */
        filteredItems,

        /**
         * True when no commands match.
         */
        isEmpty,

        /**
         * True when at least one command matches.
         */
        hasResults,

    };

}

export default useCommandSearch;
