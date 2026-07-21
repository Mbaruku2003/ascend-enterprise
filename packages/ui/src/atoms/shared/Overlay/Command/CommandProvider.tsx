/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandProvider.tsx
 *
 * Provides the shared runtime for the entire Command System.
 *
 * Owns:
 * • Collection
 * • Search state
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

import type {
    ReactNode,
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

                /* State */

                open,

                loading,

                search,

                selected,

                activeIndex,

                /* State Setters */

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
