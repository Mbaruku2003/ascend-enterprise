/**
 * ============================================================================
 * Ascend UI
 * Popover Context
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    PopoverContextValue,
} from "./Popover.types";

const PopoverContext =
createContext<
PopoverContextValue | undefined
>(undefined);

export function usePopoverContext() {

    const context =
        useContext(
            PopoverContext,
        );

    if (!context) {

        throw new Error(
            "Popover components must be used inside <Popover>.",
        );

    }

    return context;

}

export default PopoverContext;
