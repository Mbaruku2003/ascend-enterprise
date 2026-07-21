/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuLabel.tsx
 *
 * Thin wrapper around the shared ListLabel primitive.
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
    ListLabel,
} from "../List";

export interface MenuLabelProps
    extends ComponentPropsWithoutRef<
        typeof ListLabel
    > {}

export const MenuLabel =
    forwardRef<
        HTMLDivElement,
        MenuLabelProps
    >(function MenuLabel(

        props,

        ref,

    ) {

        return (

            <ListLabel

                ref={ref}

                {...props}

            />

        );

    });

MenuLabel.displayName =
    "MenuLabel";

export default MenuLabel;
