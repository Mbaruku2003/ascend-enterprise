/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuGroup.tsx
 * ============================================================================
 */

import type {
    HTMLAttributes,
} from "react";

export interface MenuGroupProps
    extends HTMLAttributes<HTMLDivElement> {}

export function MenuGroup({

    children,

    ...props

}: MenuGroupProps) {

    return (

        <div

            role="group"

            {...props}

        >

            {children}

        </div>

    );

}

MenuGroup.displayName =
    "MenuGroup";

export default MenuGroup;
