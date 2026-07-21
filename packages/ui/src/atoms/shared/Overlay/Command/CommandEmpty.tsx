/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandEmpty.tsx
 *
 * Empty state displayed when no commands match the current search.
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
    CommandEmptyProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandEmpty =
forwardRef<
    HTMLDivElement,
    CommandEmptyProps
>(

function CommandEmpty(

{

    className,

    children,

    ...props

},

ref,

) {

    return (

        <div

            ref={ref}

            role="status"

            aria-live="polite"

            className={cn(

                "flex",

                "min-h-[96px]",

                "w-full",

                "flex-col",

                "items-center",

                "justify-center",

                "px-6",

                "py-8",

                "text-center",

                "text-sm",

                "text-muted-foreground",

                className,

            )}

            {...props}

        >

            {children ?? "No results found."}

        </div>

    );

},

);

CommandEmpty.displayName =
    "CommandEmpty";

export default CommandEmpty;
