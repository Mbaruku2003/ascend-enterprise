/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandShortcut.tsx
 *
 * Displays a keyboard shortcut associated with a command.
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
    CommandShortcutProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandShortcut =
forwardRef<
    HTMLSpanElement,
    CommandShortcutProps
>(

function CommandShortcut(

{

    className,

    children,

    ...props

},

ref,

) {

    return (

        <span

            ref={ref}

            aria-hidden="true"

            className={cn(

                "ml-auto",

                "inline-flex",

                "items-center",

                "gap-1",

                "whitespace-nowrap",

                "text-xs",

                "font-medium",

                "tracking-widest",

                "text-muted-foreground",

                "select-none",

                className,

            )}

            {...props}

        >

            {children}

        </span>

    );

},

);

CommandShortcut.displayName =
    "CommandShortcut";

export default CommandShortcut;
