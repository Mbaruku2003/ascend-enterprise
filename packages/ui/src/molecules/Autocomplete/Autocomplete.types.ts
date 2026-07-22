/**
 * ============================================================================
 * Ascend Enterprise UI
 * Autocomplete
 * ----------------------------------------------------------------------------
 * File: Autocomplete.types.ts
 *
 * Shared types for the enterprise Autocomplete component.
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
    CommandCollectionItem,
} from "@/atoms/shared/Overlay/Command";

import type {
    AutocompleteCollection,
} from "./AutocompleteCollection";

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export interface AutocompleteItem
    extends CommandCollectionItem {

    /**
     * Optional leading icon.
     */
    icon?: ReactNode;

    /**
     * Optional secondary description.
     */
    description?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface AutocompleteProps {

    /**
     * Collection instance.
     */
    collection?: AutocompleteCollection;

    /**
     * Initial items.
     */
    items?: readonly AutocompleteItem[];

    /**
     * Controlled selected value.
     */
    value?: string;

    /**
     * Default selected value.
     */
    defaultValue?: string;

    /**
     * Called whenever the selected value changes.
     */
    onValueChange?(
        value: string,
        item?: AutocompleteItem,
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
     * Placeholder.
     */
    placeholder?: string;

    /**
     * Empty state.
     */
    emptyText?: ReactNode;

    /**
     * Loading state.
     */
    loading?: boolean;

    /**
     * Disabled.
     */
    disabled?: boolean;

    /**
     * Allow clearing.
     */
    clearable?: boolean;

    /**
     * Automatically highlight the first result.
     */
    autoHighlight?: boolean;

    /**
     * Close popover after selection.
     */
    closeOnSelect?: boolean;

    /**
     * Optional custom filter.
     */
    filter?(
        item: AutocompleteItem,
        query: string,
    ): boolean;

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface AutocompleteProviderProps {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface AutocompleteContextValue {

    /* ---------------------------------------------------------------------- */
    /* Runtime                                                                */
    /* ---------------------------------------------------------------------- */

    collection: AutocompleteCollection;

    /**
     * Derived filtered items.
     */
    filteredItems: readonly AutocompleteItem[];

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    value?: string;

    search: string;

    open: boolean;

    loading: boolean;

    highlightedIndex: number;

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    inputRef: RefObject<HTMLInputElement | null>;

    listRef: RefObject<HTMLDivElement | null>;

    /* ---------------------------------------------------------------------- */
    /* State Setters                                                          */
    /* ---------------------------------------------------------------------- */

    setValue: Dispatch<
        SetStateAction<string | undefined>
    >;

    setSearch: Dispatch<
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

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    clear(): void;

    highlightNext(): void;

    highlightPrevious(): void;

    select(
        item: AutocompleteItem,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

export interface AutocompleteInputProps
    extends InputHTMLAttributes<HTMLInputElement> {}

/* -------------------------------------------------------------------------- */
/* List                                                                       */
/* -------------------------------------------------------------------------- */

export interface AutocompleteListProps
    extends HTMLAttributes<HTMLDivElement> {}

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export interface AutocompleteItemProps
    extends HTMLAttributes<HTMLDivElement> {

    item: AutocompleteItem;

}

/* -------------------------------------------------------------------------- */
/* Empty                                                                      */
/* -------------------------------------------------------------------------- */

export interface AutocompleteEmptyProps
    extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export interface AutocompleteLoadingProps
    extends HTMLAttributes<HTMLDivElement> {

    loading?: boolean;

    children?: ReactNode;

}
