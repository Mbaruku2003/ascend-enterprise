/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: Search.types.ts
 *
 * Shared types for the enterprise Search component.
 *
 * ============================================================================
 */

import type {
    Dispatch,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
    RefObject,
    SetStateAction,
} from "react";

import type {
    CommandCollection,
    CommandCollectionItem,
} from "@/atoms/shared/Overlay/Command";

/* -------------------------------------------------------------------------- */
/* Search Item                                                                */
/* -------------------------------------------------------------------------- */

export interface SearchItem
    extends CommandCollectionItem {

    /**
     * Optional leading icon.
     */
    icon?: ReactNode;

    /**
     * Optional secondary text.
     */
    description?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Root Props                                                                 */
/* -------------------------------------------------------------------------- */

export interface SearchProps {

    /**
     * Existing collection instance.
     */
    collection?: CommandCollection;

    /**
     * Initial items.
     */
    items?: readonly SearchItem[];

    /**
     * Controlled search query.
     */
    query?: string;

    /**
     * Default search query.
     */
    defaultQuery?: string;

    /**
     * Query change callback.
     */
    onQueryChange?(
        query: string,
    ): void;

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
     * Loading state.
     */
    loading?: boolean;

    /**
     * Disabled state.
     */
    disabled?: boolean;

    /**
     * Placeholder.
     */
    placeholder?: string;

    /**
     * Empty state.
     */
    emptyText?: ReactNode;

    /**
     * Custom filtering.
     */
    filter?(
        item: SearchItem,
        query: string,
    ): boolean;

    /**
     * Result selection callback.
     */
    onSelect?(
        item: SearchItem,
    ): void;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface SearchProviderProps {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface SearchContextValue {

    /* Runtime */

    collection: CommandCollection;

    filteredItems: readonly SearchItem[];

    /* State */

    query: string;

    open: boolean;

    loading: boolean;

    highlightedIndex: number;

    /* Refs */

    inputRef: RefObject<HTMLInputElement | null>;

    resultsRef: RefObject<HTMLDivElement | null>;

    /* State Setters */

    setQuery: Dispatch<
        SetStateAction<string>
    >;

    setOpen: Dispatch<
        SetStateAction<boolean>
    >;

    setLoading: Dispatch<
        SetStateAction<boolean>
    >;

    setHighlightedIndex: Dispatch<
        SetStateAction<number>
    >;

    /* Actions */

    clear(): void;

    highlightNext(): void;

    highlightPrevious(): void;

    select(
        item: SearchItem,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface SearchInputProps
    extends InputHTMLAttributes<HTMLInputElement> {}

/* -------------------------------------------------------------------------- */
/* Results                                                                    */
/* -------------------------------------------------------------------------- */

export interface SearchResultsProps
    extends HTMLAttributes<HTMLDivElement> {}

/* -------------------------------------------------------------------------- */
/* Result                                                                     */
/* -------------------------------------------------------------------------- */

export interface SearchResultProps
    extends HTMLAttributes<HTMLDivElement> {

    item: SearchItem;

}

/* -------------------------------------------------------------------------- */
/* Empty                                                                      */
/* -------------------------------------------------------------------------- */

export interface SearchEmptyProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export interface SearchLoadingProps
    extends HTMLAttributes<HTMLDivElement> {

    loading?: boolean;

    children?: ReactNode;

}
