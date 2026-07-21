/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: useComboboxFilter.ts
 *
 * Filtering engine for Combobox.
 *
 * ============================================================================
 */

import {
    useMemo,
} from "react";

import {
    useCombobox,
} from "./useCombobox";

export function useComboboxFilter() {

    const {

        query,

        collection,

        filterMode,

    } = useCombobox();

    const items =
        useMemo(() => {

            if (!query.trim()) {

                return collection.getEnabled();

            }

            return collection

                .getEnabled()

                .filter(item => {

                    if (

                        typeof item.label !==
                        "string"

                    ) {

                        return false;

                    }

                    const label =
                        item.label
                            .toLowerCase();

                    const search =
                        query
                            .trim()
                            .toLowerCase();

                    switch (filterMode) {

                        case "prefix":

                            return label.startsWith(search);

                        case "contains":

                            return label.includes(search);

                        case "fuzzy":

                            return fuzzyMatch(

                                label,

                                search,

                            );

                        default:

                            return true;

                    }

                });

        }, [

            collection,

            filterMode,

            query,

        ]);

    return {

        items,

        empty:

            items.length === 0,

    };

}

function fuzzyMatch(

    text: string,

    search: string,

) {

    let index = 0;

    for (

        const character of text

    ) {

        if (

            character ===

            search[index]

        ) {

            index++;

        }

        if (

            index === search.length

        ) {

            return true;

        }

    }

    return false;

}

export default useComboboxFilter;
