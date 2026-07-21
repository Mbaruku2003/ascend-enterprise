/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuSeparator.tsx
 *
 * Thin wrapper around the shared ListSeparator primitive.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ComponentPropsWithoutRef,
} from "react";

import {
    ListSeparator,
} from "../List";

export interface MenuSeparatorProps
    extends ComponentPropsWithoutRef<
        typeof ListSeparator
    > {}

export const MenuSeparator =
    forwardRef<
        HTMLHRElement,
        MenuSeparatorProps
    >(function MenuSeparator(

        props,

        ref,

    ) {

        return (

            <ListSeparator

                ref={ref}

                {...props}

            />

        );

    });

MenuSeparator.displayName =
    "MenuSeparator";

export default MenuSeparator;
