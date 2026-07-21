/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: useTypeahead.ts
 *
 * Generic typeahead engine for Select-like collections.
 *
 * Used by:
 *   • Select
 *   • Combobox
 *   • Listbox
 *   • Command Palette
 *
 * ============================================================================
 */

import {
    useCallback,
    useEffect,
    useRef,
} from "react";

import {
    useSelect,
} from "./useSelect";

const TYPEAHEAD_TIMEOUT = 750;

export function useTypeahead() {

    const {

        collection,

        setValue,

    } = useSelect();

    const searchRef =
        useRef("");

    const timeoutRef =
        useRef<number>();

    useEffect(() => {

        return () => {

            if (timeoutRef.current) {

                window.clearTimeout(
                    timeoutRef.current,
                );

            }

        };

    }, []);

    const reset =
        useCallback(() => {

            searchRef.current = "";

        }, []);

    const onType =
        useCallback(

            (
                key: string,
            ) => {

                if (

                    key.length !== 1 ||

                    key.trim() === ""

                ) {

                    return;

                }

                if (timeoutRef.current) {

                    window.clearTimeout(

                        timeoutRef.current,

                    );

                }

                searchRef.current +=
                    key.toLowerCase();

                const match =
                    collection.findByPrefix(

                        searchRef.current,

                    );

                if (match) {

                    setValue(

                        match.value,

                    );

                    collection.scrollIntoView(

                        match.value,

                    );

                }

                timeoutRef.current =
                    window.setTimeout(

                        reset,

                        TYPEAHEAD_TIMEOUT,

                    );

            },

            [

                collection,

                reset,

                setValue,

            ],

        );

    return {

        onType,

        reset,

    };

}

export default useTypeahead;
