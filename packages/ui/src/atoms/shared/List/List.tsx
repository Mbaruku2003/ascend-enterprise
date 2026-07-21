/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: List.tsx
 *
 * Generic list container used by:
 *
 * • Menu
 * • DropdownMenu
 * • ContextMenu
 * • Select
 * • Combobox
 * • Command Palette
 * • TreeView
 * • File Explorer
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import type {
    ListProps,
} from "./List.types";

import {
    getListClassName,
} from "./List.styles";

export const List =
    forwardRef<
        HTMLDivElement,
        ListProps
    >(function List(

        {

            role = "presentation",

            className,

            children,

            ...props

        },

        ref,

    ) {

        return (

            <div

                {...props}

                ref={ref}

                role={role}

                className={cn(

                    getListClassName(),

                    className,

                )}

            >

                {children}

            </div>

        );

    });

List.displayName =
    "List";

export default List;
