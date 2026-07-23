/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: Search.tsx
 *
 * Root component for the enterprise Search.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/atoms/shared/Overlay/Popover";

import {
    SearchProvider,
} from "./SearchProvider";

import {
    SearchInput,
} from "./SearchInput";

import {
    SearchResults,
} from "./SearchResults";

import type {
    SearchProps,
} from "./Search.types";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface SearchRootProps
    extends HTMLAttributes<HTMLDivElement>,
        SearchProps {}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Search =
forwardRef<
HTMLDivElement,
SearchRootProps
>(

function Search(

{

    className,

    children,

    ...props

},

ref,

) {

    return (

        <SearchProvider
            {...props}
        >

            <div

                ref={ref}

                className={cn(

                    "relative",

                    "w-full",

                    className,

                )}

            >

                <Popover>

                    <PopoverTrigger
                        asChild
                    >

                        <SearchInput />

                    </PopoverTrigger>

                    <PopoverContent

                        align="start"

                        className="w-full p-0"

                    >

                        <SearchResults />

                    </PopoverContent>

                </Popover>

                {children}

            </div>

        </SearchProvider>

    );

},

);

Search.displayName =
    "Search";

export default Search;
