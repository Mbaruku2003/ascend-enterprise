/**
 * ============================================================================
 * Ascend Enterprise UI
 * Autocomplete
 * ----------------------------------------------------------------------------
 * File: AutocompleteProvider.tsx
 *
 * Provides the shared runtime for the Autocomplete component.
 *
 * Owns:
 * • Collection
 * • Search state
 * • Selection
 * • Highlight
 * • Open state
 * • Loading state
 *
 * Filtered items are derived from the collection and search query.
 *
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

import type {
    ReactNode,
} from "react";

import AutocompleteContext from "./AutocompleteContext";

import {
    AutocompleteCollection,
} from "./AutocompleteCollection";

import type {
    AutocompleteItem,
    AutocompleteProviderProps,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function AutocompleteProvider({

    children,

}: AutocompleteProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Collection                                                             */
    /* ---------------------------------------------------------------------- */

    const collection =
        useMemo(

            () => new AutocompleteCollection(),

            [],

        );

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    const inputRef =
        useRef<HTMLInputElement>(null);

    const listRef =
        useRef<HTMLDivElement>(null);

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    const [

        value,

        setValue,

    ] = useState<string>();

    const [

        search,

        setSearch,

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

                collection.filter(

                    search,

                ),

            [

                collection,

                search,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    const clear =
        useCallback(() => {

            setSearch("");

            setValue(undefined);

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

                previous =>

                    Math.max(

                        previous - 1,

                        0,

                    ),

            );

        }, []);

    const select =
        useCallback(

            (

                item: AutocompleteItem,

            ) => {

                setValue(

                    item.value,

                );

                setSearch(

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

                value,

                search,

                open,

                loading,

                highlightedIndex,

                inputRef,

                listRef,

                setValue,

                setSearch,

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

                value,

                search,

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

        <AutocompleteContext.Provider

            value={context}

        >

            {children}

        </AutocompleteContext.Provider>

    );

}

AutocompleteProvider.displayName =
    "AutocompleteProvider";

export default AutocompleteProvider;
