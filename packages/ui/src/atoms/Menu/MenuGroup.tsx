/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuGroup.tsx
 *
 * Thin wrapper around the shared ListGroup primitive.
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
    ListGroup,
} from "../List";

export interface MenuGroupProps
    extends ComponentPropsWithoutRef<
        typeof ListGroup
    > {}

export const MenuGroup =
    forwardRef<
        HTMLDivElement,
        MenuGroupProps
    >(function MenuGroup(

        props,

        ref,

    ) {

        return (

            <ListGroup

                ref={ref}

                {...props}

            />

        );

    });

MenuGroup.displayName =
    "MenuGroup";

export default MenuGroup;
