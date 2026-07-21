/**
 * ============================================================================
 * Ascend Enterprise UI
 * Typeahead
 * ============================================================================
 */

import {

    useCallback,

} from "react";

import {

    useCombobox,

} from "./useCombobox";

export function useComboboxTypeahead() {

    const {

        setQuery,

        setOpen,

    } = useCombobox();

    const onType =
        useCallback(

            (

                value: string,

            ) => {

                setQuery(value);

                setOpen(true);

            },

            [

                setQuery,

                setOpen,

            ],

        );

    return {

        onType,

    };

}

export default useComboboxTypeahead;
