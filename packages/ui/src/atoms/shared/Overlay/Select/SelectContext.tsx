/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * Select Context
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    SelectContextValue,
} from "./Select.types";

const SelectContext =
    createContext<SelectContextValue | null>(
        null,
    );

export function useSelectContext(): SelectContextValue {

    const context =
        useContext(
            SelectContext,
        );

    if (!context) {

        throw new Error(

            "Select components must be used inside <SelectRoot>.",

        );

    }

    return context;

}

export default SelectContext;
