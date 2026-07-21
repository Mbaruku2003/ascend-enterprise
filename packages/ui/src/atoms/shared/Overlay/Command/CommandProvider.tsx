/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandProvider.tsx
 *
 * Shared runtime for the entire Command System.
 *
 * Owns:
 * • CommandCollection
 * • Search state
 * • Filtered commands
 * • Selection
 * • Keyboard navigation
 * • Loading state
 *
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useState,
} from "react";

import CommandContext from "./CommandContext";

import {
    CommandCollection,
} from "./CommandCollection";

import type {
    CommandProviderProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export function CommandProvider({

    children,

}: CommandProviderProps) {

    /* ---------------------------------------------------------------------- */
    /* Runtime                                                                */
    /* ---------------------------------------------------------------------- */

    const collection =
        useMemo(

            () => new CommandCollection(),

            [],

        );

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    const [

        open,

        setOpen,

    ] = useState(false);

    const [

        loading,

        setLoading,

    ] = useState(false);

    const [

        search,

        setSearch,

    ] = useState("");

    const [

        selected,

        setSelected,

    ] = useState<string>();

    const [

        activeIndex,

        setActiveIndex,

    ] = useState(-1);

    /* ---------------------------------------------------------------------- */
    /* Derived State                                                          */
    /* ---------------------------------------------------------------------- */

    const filteredItems =
        useMemo(

            () =>

                collection.search(

                    search,

                ),

            [

                collection,

                search,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Helpers                                                                */
    /* ---------------------------------------------------------------------- */

    const clear =
        useCallback(() => {

            setSearch("");

            setSelected(undefined);

            setActiveIndex(-1);

        }, []);

    const openCommand =
        useCallback(() => {

            setOpen(true);

        }, []);

    const closeCommand =
        useCallback(() => {

            setOpen(false);

        }, []);

    /* ---------------------------------------------------------------------- */
    /* Context                                                                */
    /* ---------------------------------------------------------------------- */

    const context =
        useMemo(

            () => ({

                /* Runtime */

                collection,

                filteredItems,

                /* State */

                open,

                loading,

                search,

                selected,

                activeIndex,

                /* Setters */

                setOpen,

                setLoading,

                setSearch,

                setSelected,

                setActiveIndex,

                /* Helpers */

                clear,

                openCommand,

                closeCommand,

            }),

            [

                collection,

                filteredItems,

                open,

                loading,

                search,

                selected,

                activeIndex,

                clear,

                openCommand,

                closeCommand,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <CommandContext.Provider

            value={context}

        >

            {children}

        </CommandContext.Provider>

    );

}

CommandProvider.displayName =
    "CommandProvider";

export default CommandProvider;
