/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: useCommand.ts
 *
 * Public hook for the Command System.
 *
 * All Command components should consume this hook instead of importing
 * CommandContext directly.
 *
 * ============================================================================
 */

import {
    useCommandContext,
} from "./CommandContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Returns the shared Command runtime.
 *
 * Must be used within <CommandProvider>.
 */
export function useCommand() {

    return useCommandContext();

}

export default useCommand;
