/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: ListItem.tsx
 *
 * Shared interactive list item used by:
 *
 * • Select
 * • Combobox
 * • Menu
 * • DropdownMenu
 * • ContextMenu
 * • Command Palette
 * • Listbox
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ListItemProps,
} from "./List.types";

import {
    cn,
} from "@/utils";

import {
    getListItemClassName,
} from "./List.styles";

export const ListItem =
    forwardRef<
        HTMLDivElement,
        ListItemProps
    >(function ListItem(

        {

            active = false,

            selected = false,

            disabled = false,

            inset = false,

            destructive = false,

            role = "option",

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

                aria-selected={selected || undefined}

                aria-disabled={disabled || undefined}

                data-active={
                    active || undefined
                }

                data-selected={
                    selected || undefined
                }

                data-disabled={
                    disabled || undefined
                }

                className={cn(

                    getListItemClassName({

                        active,

                        selected,

                        disabled,

                        inset,

                        destructive,

                    }),

                    className,

                )}

            >

                {children}

            </div>

        );

    });

ListItem.displayName =
    "ListItem";

export default ListItem;
