/**
 * ============================================================================
 * Ascend UI
 * Drawer Context
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    DrawerContextValue,
} from "./Drawer.types";

const DrawerContext =
createContext<
DrawerContextValue | undefined
>(undefined);

export function useDrawerContext() {

    const context =
        useContext(
            DrawerContext,
        );

    if (!context) {

        throw new Error(
            "Drawer components must be used inside <Drawer>.",
        );

    }

    return context;

}

export default DrawerContext;
