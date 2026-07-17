/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuSeparator.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface MenuSeparatorProps
    extends HTMLAttributes<HTMLDivElement> {}

export const MenuSeparator = forwardRef<
    HTMLDivElement,
    MenuSeparatorProps
>(function MenuSeparator(

    {

        className,

        ...props

    },

    ref,

) {

    return (

        <div

            ref={ref}

            role="separator"

            aria-orientation="horizontal"

            className={cn(

                "my-1",

                "h-px",

                "bg-border",

                className,

            )}

            {...props}

        />

    );

});

MenuSeparator.displayName =
    "MenuSeparator";

export default MenuSeparator;
