/**
 * ============================================================================
 * Ascend Enterprise UI
 * Search
 * ----------------------------------------------------------------------------
 * File: SearchEmpty.tsx
 *
 * Empty state displayed when no search results are available.
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
    SearchEmptyProps,
} from "./Search.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const SearchEmpty =
forwardRef<
HTMLDivElement,
SearchEmptyProps
>(

function SearchEmpty(

{

    className,

    children,

    ...props

},

forwardedRef,

) {

    return (

        <div

            {...props}

            ref={forwardedRef}

            role="status"

            aria-live="polite"

            className={cn(

                "flex",

                "min-h-16",

                "items-center",

                "justify-center",

                "px-4",

                "py-6",

                "text-center",

                "text-sm",

                "text-muted-foreground",

                className,

            )}

        >

            {

                children ??

                "No results found."

            }

        </div>

    );

},

);

SearchEmpty.displayName =
    "SearchEmpty";

export default SearchEmpty;
