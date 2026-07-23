/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: index.ts
 *
 * Public exports for the enterprise Search component.
 *
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export {
    default as Search,
} from "./Search";

export {
    Search,
} from "./Search";

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

export {
    default as SearchInput,
} from "./SearchInput";

export {
    SearchInput,
} from "./SearchInput";

export {
    default as SearchResults,
} from "./SearchResults";

export {
    SearchResults,
} from "./SearchResults";

export {
    default as SearchResult,
} from "./SearchResult";

export {
    SearchResult,
} from "./SearchResult";

export {
    default as SearchEmpty,
} from "./SearchEmpty";

export {
    SearchEmpty,
} from "./SearchEmpty";

export {
    default as SearchLoading,
} from "./SearchLoading";

export {
    SearchLoading,
} from "./SearchLoading";

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export {
    default as SearchProvider,
} from "./SearchProvider";

export {
    SearchProvider,
} from "./SearchProvider";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export {
    default as useSearch,
} from "./useSearch";

export {
    useSearch,
} from "./useSearch";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {
    SearchItem,

    SearchProps,

    SearchProviderProps,

    SearchContextValue,

    SearchInputProps,

    SearchResultsProps,

    SearchResultProps,

    SearchEmptyProps,

    SearchLoadingProps,

} from "./Search.types";
