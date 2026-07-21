/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: List.styles.ts
 *
 * Shared styling helpers used by:
 *
 * • Menu
 * • DropdownMenu
 * • ContextMenu
 * • Select
 * • Combobox
 * • Command Palette
 * • TreeView (future)
 * • File Explorer (future)
 *
 * ============================================================================
 */

import type {
    ListItemProps,
} from "./List.types";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export function getListClassName(): string {

    return [
        "asc-list",
        "flex",
        "flex-col",
        "outline-none",
    ].join(" ");

}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

export function getListGroupClassName(): string {

    return [
        "asc-list-group",
        "flex",
        "flex-col",
        "gap-1",
    ].join(" ");

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export function getListLabelClassName(): string {

    return [

        "asc-list-label",

        "px-3",

        "py-2",

        "text-xs",

        "font-semibold",

        "text-muted-foreground",

    ].join(" ");

}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export function getListFooterClassName(): string {

    return [

        "asc-list-footer",

        "border-t",

        "px-3",

        "py-2",

        "text-xs",

        "text-muted-foreground",

    ].join(" ");

}

/* -------------------------------------------------------------------------- */
/* Empty                                                                      */
/* -------------------------------------------------------------------------- */

export function getListEmptyClassName(): string {

    return [

        "asc-list-empty",

        "py-6",

        "text-center",

        "text-sm",

        "text-muted-foreground",

    ].join(" ");

}

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export function getListLoadingClassName(): string {

    return [

        "asc-list-loading",

        "flex",

        "items-center",

        "justify-center",

        "py-6",

        "text-sm",

        "text-muted-foreground",

    ].join(" ");

}

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

export function getListSeparatorClassName(): string {

    return [

        "asc-list-separator",

        "-mx-1",

        "my-1",

        "h-px",

        "bg-border",

    ].join(" ");

}

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export function getListItemClassName({

    highlighted,

    selected,

    disabled,

    inset,

    destructive,

    focusable = true,

}: Pick<
    ListItemProps,
    | "highlighted"
    | "selected"
    | "disabled"
    | "inset"
    | "destructive"
    | "focusable"
>): string {

    const classes = [

        "asc-list-item",

        "flex",

        "items-center",

        "gap-2",

        "rounded-md",

        "px-3",

        "py-2",

        "text-sm",

        "transition-colors",

        "select-none",

        "outline-none",

    ];

    if (focusable) {

        classes.push(

            "cursor-default",

            "focus:bg-accent",

            "focus:text-accent-foreground",

            "hover:bg-accent",

            "hover:text-accent-foreground",

        );

    }

    if (highlighted) {

        classes.push(

            "bg-accent",

            "text-accent-foreground",

        );

    }

    if (selected) {

        classes.push(

            "font-medium",

        );

    }

    if (disabled) {

        classes.push(

            "pointer-events-none",

            "opacity-50",

        );

    }

    if (inset) {

        classes.push(

            "pl-8",

        );

    }

    if (destructive) {

        classes.push(

            "text-destructive",

        );

    }

    return classes.join(" ");

}
