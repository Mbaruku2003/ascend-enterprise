/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: Command.types.ts
 *
 * Shared types for the Command System.
 *
 * The Command System powers:
 *
 * • Command Palette
 * • Global Search
 * • Workspace Switcher
 * • Quick Actions
 * • AI Commands
 * • File Search
 * • Settings Search
 *
 * ============================================================================
 */

import type {
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
} from "react";

import type {
    ListOrientation,
} from "../../List";

import type {
    CommandCollection,
    CommandCollectionItem,
} from "./CommandCollection";


/* -------------------------------------------------------------------------- */
/* Command Item                                                               */
/* -------------------------------------------------------------------------- */

export interface CommandItemData {

    /**
     * Unique identifier.
     */
    id: string;

    /**
     * Command value.
     */
    value: string;

    /**
     * Display label.
     */
    label: ReactNode;

    /**
     * Optional search keywords.
     */
    keywords?: readonly string[];

    /**
     * Optional icon.
     */
    icon?: ReactNode;

    /**
     * Optional keyboard shortcut.
     */
    shortcut?: ReactNode;

    /**
     * Optional group.
     */
    group?: string;

    /**
     * Disabled state.
     */
    disabled?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface CommandProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Controlled open state.
     */
    open?: boolean;

    /**
     * Default open state.
     */
    defaultOpen?: boolean;

    /**
     * Open callback.
     */
    onOpenChange?(
        open: boolean,
    ): void;

    /**
     * Controlled search value.
     */
    search?: string;

    /**
     * Default search value.
     */
    defaultSearch?: string;

    /**
     * Search callback.
     */
    onSearchChange?(
        value: string,
    ): void;

    /**
     * Loading state.
     *
     * @default false
     */
    loading?: boolean;

    /**
     * List orientation.
     *
     * @default "vertical"
     */
    orientation?: ListOrientation;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Dialog                                                                     */
/* -------------------------------------------------------------------------- */

export interface CommandDialogProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface CommandInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "value" | "defaultValue" | "onChange"
    > {

    /**
     * Controlled value.
     */
    value?: string;

    /**
     * Default value.
     */
    defaultValue?: string;

    /**
     * Value change callback.
     */
    onValueChange?(
        value: string,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* List                                                                       */
/* -------------------------------------------------------------------------- */

export interface CommandListProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

export interface CommandGroupProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Optional heading.
     */
    heading?: ReactNode;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export interface CommandItemProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Unique command value.
     */
    value: string;

    /**
     * Optional search keywords.
     */
    keywords?: readonly string[];

    /**
     * Optional icon.
     */
    icon?: ReactNode;

    /**
     * Optional shortcut.
     */
    shortcut?: ReactNode;

    /**
     * Optional group identifier.
     */
    group?: string;

    /**
     * Disabled state.
     */
    disabled?: boolean;

    /**
     * Selection callback.
     */
    onSelect?(
        value: string,
    ): void;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Shortcut                                                                   */
/* -------------------------------------------------------------------------- */

export interface CommandShortcutProps
    extends HTMLAttributes<HTMLSpanElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Empty                                                                      */
/* -------------------------------------------------------------------------- */

export interface CommandEmptyProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export interface CommandLoadingProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Loading state.
     */
    loading?: boolean;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface CommandContextValue {

    /* ---------------------------------------------------------------------- */
    /* Runtime                                                                */
    /* ---------------------------------------------------------------------- */

    /**
     * Shared command collection.
     */
    collection: CommandCollection;

    /**
     * Filtered command items.
     *
     * Derived from:
     * collection.search(search)
     */
    filteredItems: readonly CommandCollectionItem[];

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    /**
     * Whether the command palette is open.
     */
    open: boolean;

    /**
     * Loading state.
     */
    loading: boolean;

    /**
     * Current search query.
     */
    search: string;

    /**
     * Currently selected command.
     */
    selected?: string;

    /**
     * Active keyboard navigation index.
     */
    activeIndex: number;

    /* ---------------------------------------------------------------------- */
    /* State Setters                                                          */
    /* ---------------------------------------------------------------------- */

    setOpen(
        open: boolean,
    ): void;

    setLoading(
        loading: boolean,
    ): void;

    setSearch(
        value: string,
    ): void;

    setSelected(
        value?: string,
    ): void;

    setActiveIndex(
        index: number,
    ): void;

    /* ---------------------------------------------------------------------- */
    /* Helpers                                                                */
    /* ---------------------------------------------------------------------- */

    /**
     * Clears search and selection.
     */
    clear(): void;

    /**
     * Opens the command palette.
     */
    openCommand(): void;

    /**
     * Closes the command palette.
     */
    closeCommand(): void;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface CommandProviderProps {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Collection                                                                 */
/* -------------------------------------------------------------------------- */

export interface CommandCollectionItem
    extends CommandItemData {

    /**
     * DOM element reference.
     */
    ref?: HTMLDivElement | null;

}
