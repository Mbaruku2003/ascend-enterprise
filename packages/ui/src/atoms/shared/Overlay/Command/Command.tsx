/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: Command.tsx
 *
 * Root Command component.
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
    CommandProvider,
} from "./CommandProvider";

import type {
    CommandProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Command =
forwardRef<
    HTMLDivElement,
    CommandProps
>(

function Command(

{

    className,

    children,

    ...props

},

ref,

) {

    return (

        <CommandProvider>

            <div

                ref={ref}

                role="listbox"

                aria-orientation="vertical"

                className={cn(

                    "flex",

                    "h-full",

                    "w-full",

                    "flex-col",

                    "overflow-hidden",

                    "rounded-lg",

                    "bg-popover",

                    "text-popover-foreground",

                    className,

                )}

                {...props}

            >

                {children}

            </div>

        </CommandProvider>

    );

},

);

Command.displayName =
    "Command";

export default Command;
