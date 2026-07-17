/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuRoot.tsx
 *
 * Root provider for the Menu component family.
 *
 * Responsibilities:
 *
 * • Initialize Menu state
 * • Provide Menu context
 * • Render children
 *
 * ============================================================================
 */

import type {
    JSX,
} from "react";

import {
    MenuContext,
} from "./MenuContext";

import {
    useMenu,
} from "./useMenu";

import type {
    MenuRootProps,
} from "./Menu.types";

export function MenuRoot({

    children,

    ...props

}: MenuRootProps): JSX.Element {

    const value =
        useMenu(props);

    return (

        <MenuContext.Provider
            value={value}
        >

            {children}

        </MenuContext.Provider>

    );

}

MenuRoot.displayName =
    "MenuRoot";

export default MenuRoot;
