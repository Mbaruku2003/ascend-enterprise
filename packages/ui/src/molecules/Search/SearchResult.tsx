/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: SearchResult.tsx
 *
 * Individual search result rendered by the enterprise Search component.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    KeyboardEvent,
    MouseEvent,
} from "react";

import {
    composeRefs,
} from "@/utils";

import {
    ListItem,
} from "@/atoms/shared/List";

import {
    useSearch,
} from "./useSearch";

import type {
    SearchResultProps,
} from "./Search.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const SearchResult =
forwardRef<
HTMLDivElement,
SearchResultProps
>(

function SearchResult(

{

    item,

    onClick,

    onKeyDown,

    children,

    ...props

},

forwardedRef,

) {

    const {

        query,

        filteredItems,

        highlightedIndex,

        setHighlightedIndex,

        select,

    } = useSearch();

    /* ---------------------------------------------------------------------- */
    /* Derived                                                                */
    /* ---------------------------------------------------------------------- */

    const active =

        highlightedIndex >= 0 &&

        filteredItems[
            highlightedIndex
        ]?.value === item.value;

    /* ---------------------------------------------------------------------- */
    /* Events                                                                 */
    /* ---------------------------------------------------------------------- */

    function handleMouseEnter() {

        const index =
            filteredItems.findIndex(

                result =>

                    result.value === item.value,

            );

        if (

            index >= 0

        ) {

            setHighlightedIndex(

                index,

            );

        }

    }

    function handleClick(

        event: MouseEvent<HTMLDivElement>,

    ) {

        onClick?.(

            event,

        );

        if (

            event.defaultPrevented

        ) {

            return;

        }

        select(

            item,

        );

    }

    function handleKeyDown(

        event: KeyboardEvent<HTMLDivElement>,

    ) {

        onKeyDown?.(

            event,

        );

        if (

            event.defaultPrevented

        ) {

            return;

        }

        switch (

            event.key

        ) {

            case "Enter":

            case " ":

                event.preventDefault();

                select(

                    item,

                );

                break;

        }

    }

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <ListItem

            {...props}

            ref={composeRefs(

                forwardedRef,

            )}

            role="option"

            active={active}

            disabled={item.disabled}

            aria-selected={active}

            onMouseEnter={handleMouseEnter}

            onClick={handleClick}

            onKeyDown={handleKeyDown}

        >

            {

                item.icon && (

                    <span

                        className="mr-2 flex shrink-0 items-center"

                    >

                        {item.icon}

                    </span>

                )

            }

            <div

                className="flex min-w-0 flex-1 flex-col"

            >

                <span

                    className="truncate"

                >

                    {item.label}

                </span>

                {

                    item.description && (

                        <span

                            className="text-xs text-muted-foreground"

                        >

                            {item.description}

                        </span>

                    )

                }

            </div>

            {children}

        </ListItem>

    );

},

);

SearchResult.displayName =
    "SearchResult";

export default SearchResult;
