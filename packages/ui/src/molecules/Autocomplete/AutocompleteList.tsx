/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: AutocompleteList.tsx
 *
 * Renders the filtered autocomplete results.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    composeRefs,
    cn,
} from "@/utils";

import {
    List,
} from "@/atoms/shared/List";

import {
    useAutocomplete,
} from "./useAutocomplete";

import {
    AutocompleteItem,
} from "./AutocompleteItem";

import {
    AutocompleteEmpty,
} from "./AutocompleteEmpty";

import {
    AutocompleteLoading,
} from "./AutocompleteLoading";

import type {
    AutocompleteListProps,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const AutocompleteList =
forwardRef<
HTMLDivElement,
AutocompleteListProps
>(

function AutocompleteList(

{

    className,

    children,

    ...props

},

forwardedRef,

) {

    const {

        listRef,

        filteredItems,

        loading,

    } = useAutocomplete();

    /* ---------------------------------------------------------------------- */
    /* Loading                                                                */
    /* ---------------------------------------------------------------------- */

    if (loading) {

        return (

            <AutocompleteLoading />

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Empty                                                                  */
    /* ---------------------------------------------------------------------- */

    if (

        filteredItems.length === 0

    ) {

        return (

            <AutocompleteEmpty />

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

                listRef,

            )}

            className={cn(

                "max-h-80",

                "overflow-y-auto",

                className,

            )}

        >

            {

                filteredItems.map(

                    item => (

                        <AutocompleteItem

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

AutocompleteList.displayName =
    "AutocompleteList";

export default AutocompleteList;
