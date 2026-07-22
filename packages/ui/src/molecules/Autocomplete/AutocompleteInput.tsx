/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: AutocompleteInput.tsx
 *
 * Input component for the enterprise Autocomplete.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ChangeEvent,
} from "react";

import {
    composeRefs,
} from "@/utils";

import {
    Input,
} from "@/atoms/forms/Input";

import {
    useAutocomplete,
} from "./useAutocomplete";

import type {
    AutocompleteInputProps,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const AutocompleteInput =
forwardRef<
HTMLInputElement,
AutocompleteInputProps
>(

function AutocompleteInput(

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

        search,

        setSearch,

        setOpen,

        loading,

    } = useAutocomplete();

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

        setSearch(

            event.target.value,

        );

        setOpen(true);

    }

    function handleFocus(

        event: React.FocusEvent<HTMLInputElement>,

    ) {

        onFocus?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        setOpen(true);

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

            role="combobox"

            aria-autocomplete="list"

            aria-expanded={loading ? true : undefined}

            autoComplete="off"

            value={search}

            onChange={handleChange}

            onFocus={handleFocus}

            onKeyDown={onKeyDown}

        />

    );

},

);

AutocompleteInput.displayName =
    "AutocompleteInput";

export default AutocompleteInput;
