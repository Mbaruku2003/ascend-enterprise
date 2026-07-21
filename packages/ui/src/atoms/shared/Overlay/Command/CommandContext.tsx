/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandContext.tsx
 *
 * Shared context for the Command runtime.
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

export function useCommandContext() {

    const context =
        useContext(

            CommandContext,

        );

    if (!context) {

        throw new Error(

            "useCommand must be used within a CommandProvider.",

        );

    }

    return context;

}

export default CommandContext;
