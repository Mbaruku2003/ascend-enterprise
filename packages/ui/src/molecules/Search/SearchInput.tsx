/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: SearchInput.tsx
 *
 * Input component for the enterprise Search.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
} from "react";

import {
    composeRefs,
} from "@/utils";

import {
    Input,
} from "@/atoms/forms/Input";

import {
    useSearch,
} from "./useSearch";

import type {
    SearchInputProps,
} from "./Search.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const SearchInput =
forwardRef<
HTMLInputElement,
SearchInputProps
>(

function SearchInput(

{

    onChange,

    onFocus,

    onKeyDown,

    ...props

},

forwardedRef,

) {

    const {

        inputRef,

        query,

        open,

        filteredItems,

        highlightedIndex,

        setQuery,

        setOpen,

        clear,

        highlightNext,

        highlightPrevious,

        select,

    } = useSearch();

    /* ---------------------------------------------------------------------- */
    /* Events                                                                 */
    /* ---------------------------------------------------------------------- */

    function handleChange(

        event: ChangeEvent<HTMLInputElement>,

    ) {

        onChange?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        setQuery(

            event.target.value,

        );

        setOpen(true);

    }

    function handleFocus(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onFocus?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        setOpen(true);

    }

    function handleKeyDown(

        event: KeyboardEvent<HTMLInputElement>,

    ) {

        onKeyDown?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        switch (

            event.key

        ) {

            case "ArrowDown":

                event.preventDefault();

                highlightNext();

                break;

            case "ArrowUp":

                event.preventDefault();

                highlightPrevious();

                break;

            case "Escape":

                event.preventDefault();

                clear();

                setOpen(false);

                break;

            case "Enter":

                if (

                    highlightedIndex >= 0 &&

                    highlightedIndex < filteredItems.length

                ) {

                    event.preventDefault();

                    select(

                        filteredItems[

                            highlightedIndex

                        ],

                    );

                }

                break;

            default:

                break;

        }

    }

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <Input

            {...props}

            ref={composeRefs(

                forwardedRef,

                inputRef,

            )}

            role="searchbox"

            type="search"

            autoComplete="off"

            spellCheck={false}

            value={query}

            aria-expanded={open}

            onChange={handleChange}

            onFocus={handleFocus}

            onKeyDown={handleKeyDown}

        />

    );

},

);

SearchInput.displayName =
    "SearchInput";

export default SearchInput;
