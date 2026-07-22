/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: AutocompleteEmpty.tsx
 *
 * Empty state displayed when no autocomplete results are available.
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
    AutocompleteEmptyProps,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const AutocompleteEmpty =
forwardRef<
HTMLDivElement,
AutocompleteEmptyProps
>(

function AutocompleteEmpty(

{

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

AutocompleteEmpty.displayName =
    "AutocompleteEmpty";

export default AutocompleteEmpty;
