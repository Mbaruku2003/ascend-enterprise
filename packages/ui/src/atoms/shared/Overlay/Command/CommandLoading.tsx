/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandLoading.tsx
 *
 * Loading state for asynchronous command sources.
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
    CommandLoadingProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandLoading =
forwardRef<
    HTMLDivElement,
    CommandLoadingProps
>(

function CommandLoading(

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

            ref={ref}

            role="status"

            aria-live="polite"

            aria-busy="true"

            className={cn(

                "flex",

                "min-h-[96px]",

                "w-full",

                "flex-col",

                "items-center",

                "justify-center",

                "gap-3",

                "px-6",

                "py-8",

                "text-center",

                "text-sm",

                "text-muted-foreground",

                className,

            )}

            {...props}

        >

            <div

                aria-hidden="true"

                className={cn(

                    "h-5",

                    "w-5",

                    "animate-spin",

                    "rounded-full",

                    "border-2",

                    "border-current",

                    "border-t-transparent",

                )}

            />

            <span>

                {children ?? "Loading commands..."}

            </span>

        </div>

    );

},

);

CommandLoading.displayName =
    "CommandLoading";

export default CommandLoading;
