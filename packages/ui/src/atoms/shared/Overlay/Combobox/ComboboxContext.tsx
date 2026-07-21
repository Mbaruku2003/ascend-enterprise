/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: ComboboxContext.tsx
 *
 * React context for Combobox.
 *
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    PropsWithChildren,
} from "react";

import type {
    ComboboxContextValue,
} from "./Combobox.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const ComboboxContext =
    createContext<
        ComboboxContextValue | null
    >(null);

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface ComboboxProviderProps
    extends PropsWithChildren {

    value: ComboboxContextValue;

}

export function ComboboxProvider({

    value,

    children,

}: ComboboxProviderProps) {

    return (

        <ComboboxContext.Provider
            value={value}
        >

            {children}

        </ComboboxContext.Provider>

    );

}

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useComboboxContext():
    ComboboxContextValue {

    const context =
        useContext(
            ComboboxContext,
        );

    if (!context) {

        throw new Error(

            "useComboboxContext must be used within a ComboboxProvider.",

        );

    }

    return context;

}

export default ComboboxContext;
