/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuSubContent.tsx
 *
 * Content for nested menus.
 *
 * This component wraps MenuContent while supplying submenu-specific defaults.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ComponentPropsWithoutRef,
} from "react";

import MenuContent from "./MenuContent";

import {
    useMenuSubContext,
} from "./MenuSub";

export interface MenuSubContentProps
    extends ComponentPropsWithoutRef<
        typeof MenuContent
    > {}

export const MenuSubContent =
forwardRef<
HTMLDivElement,
MenuSubContentProps
>(

function MenuSubContent(

{

    placement = "right-start",

    offset = 4,

    forceMount,

    ...props

},

forwardedRef,

) {

    const {

        open,

    } =
    useMenuSubContext();

    return (

        <MenuContent

            ref={forwardedRef}

            placement={placement}

            offset={offset}

            forceMount={
                forceMount ??
                open
            }

            {...props}

        />

    );

},

);

MenuSubContent.displayName =
    "MenuSubContent";

export default MenuSubContent;
