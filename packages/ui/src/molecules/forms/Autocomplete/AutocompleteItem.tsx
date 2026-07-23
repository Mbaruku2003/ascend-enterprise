/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: AutocompleteItem.tsx
 *
 * Individual option rendered by the enterprise Autocomplete.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    MouseEvent,
    KeyboardEvent,
} from "react";

import {
    composeRefs,
} from "@/utils";

import {
    ListItem,
} from "@/atoms/shared/List";

import {
    useAutocomplete,
} from "./useAutocomplete";

import type {
    AutocompleteItemProps,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const AutocompleteItem =
forwardRef<
HTMLDivElement,
AutocompleteItemProps
>(

function AutocompleteItem(

{

    item,

    onClick,

    onKeyDown,

    ...props

},

forwardedRef,

) {

    const {

        value,

        highlightedIndex,

        filteredItems,

        select,

    } = useAutocomplete();

    const selected =
        value === item.value;

    const active =

        highlightedIndex >= 0 &&

        filteredItems[
            highlightedIndex
        ]?.value === item.value;

    /* ---------------------------------------------------------------------- */
    /* Events                                                                 */
    /* ---------------------------------------------------------------------- */

    function handleClick(

        event: MouseEvent<HTMLDivElement>,

    ) {

        onClick?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        select(item);

    }

    function handleKeyDown(

        event: KeyboardEvent<HTMLDivElement>,

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

            case "Enter":

            case " ":

                event.preventDefault();

                select(item);

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

            selected={selected}

            disabled={item.disabled}

            aria-selected={selected}

            onClick={handleClick}

            onKeyDown={handleKeyDown}

        >

            {item.icon}

            <span className="flex-1">

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

        </ListItem>

    );

},

);

AutocompleteItem.displayName =
    "AutocompleteItem";

export default AutocompleteItem;
