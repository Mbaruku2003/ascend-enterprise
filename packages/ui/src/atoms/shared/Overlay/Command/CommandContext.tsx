/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandContext.tsx
 *
 * Internal React context powering the Command System.
 *
 * This context is intentionally minimal. State management lives inside
 * CommandProvider while all Command components consume this context through
 * useCommand().
 *
 * Consumers:
 *
 * • Command
 * • CommandDialog
 * • CommandInput
 * • CommandList
 * • CommandGroup
 * • CommandItem
 * • CommandShortcut
 * • CommandEmpty
 * • CommandLoading
 *
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    CommandContextValue,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const CommandContext =
    createContext<
        CommandContextValue | null
    >(null);

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Returns the current Command context.
 *
 * Must be used within <CommandProvider>.
 */
export function useCommandContext():
    CommandContextValue {

    const context =
        useContext(
            CommandContext,
        );

    if (!context) {

        throw new Error(

            "useCommandContext must be used within a <CommandProvider>.",

        );

    }

    return context;

}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {

    CommandContext,

};

export default CommandContext;
