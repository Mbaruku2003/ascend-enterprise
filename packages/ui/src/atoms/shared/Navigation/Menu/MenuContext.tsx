/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuContext.tsx
 *
 * Shared context for the Menu component family.
 *
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    MenuContextValue,
} from "./Menu.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const MenuContext =
    createContext<MenuContextValue | null>(
        null,
    );

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Returns the current Menu context.
 *
 * Must be used within <MenuRoot>.
 */
export function useMenuContext(): MenuContextValue {

    const context =
        useContext(MenuContext);

    if (!context) {

        throw new Error(

            "Menu components must be rendered inside <MenuRoot>.",

        );

    }

    return context;

}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {

    MenuContext,

};

export default MenuContext;
