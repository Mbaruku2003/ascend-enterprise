/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: SearchProvider.tsx
 *
 * Provides the shared runtime for the Search component.
 *
 * Owns:
 * • Collection
 * • Query state
 * • Filtered results
 * • Highlight state
 * • Loading state
 * • Open state
 *
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

import SearchContext from "./SearchContext";

import {
    CommandCollection,
} from "@/atoms/shared/Overlay/Command";

import type {
    SearchItem,
    SearchProviderProps,
} from "./Search.types";

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function SearchProvider({

    children,

}: SearchProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Runtime                                                                */
    /* ---------------------------------------------------------------------- */

    const collection =
        useMemo(

            () => new CommandCollection(),

            [],

        );

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    const inputRef =
        useRef<HTMLInputElement>(null);

    const resultsRef =
        useRef<HTMLDivElement>(null);

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    const [

        query,

        setQuery,

    ] = useState("");

    const [

        open,

        setOpen,

    ] = useState(false);

    const [

        loading,

        setLoading,

    ] = useState(false);

    const [

        highlightedIndex,

        setHighlightedIndex,

    ] = useState(-1);

    /* ---------------------------------------------------------------------- */
    /* Derived                                                                */
    /* ---------------------------------------------------------------------- */

    const filteredItems =
        useMemo(

            () =>

                collection.search(

                    query,

                ) as readonly SearchItem[],

            [

                collection,

                query,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    const clear =
        useCallback(() => {

            setQuery("");

            setHighlightedIndex(-1);

        }, []);

    const highlightNext =
        useCallback(() => {

            setHighlightedIndex(

                previous => {

                    if (

                        filteredItems.length === 0

                    ) {

                        return -1;

                    }

                    return Math.min(

                        previous + 1,

                        filteredItems.length - 1,

                    );

                },

            );

        }, [

            filteredItems,

        ]);

    const highlightPrevious =
        useCallback(() => {

            setHighlightedIndex(

                previous => {

                    if (

                        filteredItems.length === 0

                    ) {

                        return -1;

                    }

                    return Math.max(

                        previous - 1,

                        0,

                    );

                },

            );

        }, [

            filteredItems,

        ]);

    const select =
        useCallback(

            (

                item: SearchItem,

            ) => {

                setQuery(

                    typeof item.label === "string"

                        ? item.label

                        : "",

                );

                setOpen(false);

            },

            [],

        );

    /* ---------------------------------------------------------------------- */
    /* Context                                                                */
    /* ---------------------------------------------------------------------- */

    const context =
        useMemo(

            () => ({

                collection,

                filteredItems,

                query,

                open,

                loading,

                highlightedIndex,

                inputRef,

                resultsRef,

                setQuery,

                setOpen,

                setLoading,

                setHighlightedIndex,

                clear,

                highlightNext,

                highlightPrevious,

                select,

            }),

            [

                collection,

                filteredItems,

                query,

                open,

                loading,

                highlightedIndex,

                clear,

                highlightNext,

                highlightPrevious,

                select,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <SearchContext.Provider

            value={context}

        >

            {children}

        </SearchContext.Provider>

    );

}

SearchProvider.displayName =
    "SearchProvider";

export default SearchProvider;
