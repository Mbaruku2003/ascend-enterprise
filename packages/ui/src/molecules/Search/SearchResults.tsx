/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: SearchResults.tsx
 *
 * Renders the filtered search results.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
    composeRefs,
} from "@/utils";

import {
    List,
} from "@/atoms/shared/List";

import {
    useSearch,
} from "./useSearch";

import {
    SearchResult,
} from "./SearchResult";

import {
    SearchEmpty,
} from "./SearchEmpty";

import {
    SearchLoading,
} from "./SearchLoading";

import type {
    SearchResultsProps,
} from "./Search.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const SearchResults =
forwardRef<
HTMLDivElement,
SearchResultsProps
>(

function SearchResults(

{

    className,

    children,

    ...props

},

forwardedRef,

) {

    const {

        resultsRef,

        filteredItems,

        loading,

    } = useSearch();

    /* ---------------------------------------------------------------------- */
    /* Loading                                                                */
    /* ---------------------------------------------------------------------- */

    if (loading) {

        return (

            <SearchLoading />

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Empty                                                                  */
    /* ---------------------------------------------------------------------- */

    if (

        filteredItems.length === 0

    ) {

        return (

            <SearchEmpty />

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <List

            {...props}

            ref={composeRefs(

                forwardedRef,

                resultsRef,

            )}

            role="listbox"

            className={cn(

                "max-h-80",

                "overflow-y-auto",

                className,

            )}

        >

            {

                filteredItems.map(

                    item => (

                        <SearchResult

                            key={item.value}

                            item={item}

                        />

                    ),

                )

            }

            {children}

        </List>

    );

},

);

SearchResults.displayName =
    "SearchResults";

export default SearchResults;
