/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: AutocompleteLoading.tsx
 *
 * Loading state displayed while autocomplete results are being fetched.
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
    AutocompleteLoadingProps,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const AutocompleteLoading =
forwardRef<
HTMLDivElement,
AutocompleteLoadingProps
>(

function AutocompleteLoading(

{

    loading = true,

    className,

    children,

    ...props

},

ref,

) {

    if (!loading) {

        return null;

    }

    return (

        <div

            {...props}

            ref={ref}

            role="status"

            aria-live="polite"

            aria-busy="true"

            className={cn(

                "flex",

                "min-h-16",

                "items-center",

                "justify-center",

                "gap-2",

                "px-4",

                "py-6",

                "text-sm",

                "text-muted-foreground",

                className,

            )}

        >

            <svg

                className="h-4 w-4 animate-spin"

                viewBox="0 0 24 24"

                fill="none"

                aria-hidden="true"

            >

                <circle

                    cx="12"

                    cy="12"

                    r="10"

                    stroke="currentColor"

                    strokeOpacity="0.25"

                    strokeWidth="4"

                />

                <path

                    fill="currentColor"

                    d="M22 12a10 10 0 0 0-10-10v4a6 6 0 0 1 6 6h4z"

                />

            </svg>

            <span>

                {children ?? "Loading..."}

            </span>

        </div>

    );

},

);

AutocompleteLoading.displayName =
    "AutocompleteLoading";

export default AutocompleteLoading;
