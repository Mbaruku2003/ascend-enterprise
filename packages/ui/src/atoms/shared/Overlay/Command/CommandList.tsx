/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandList.tsx
 *
 * Displays the collection of command items.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import {
    List,
} from "../../List";

import type {
    CommandListProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandList =
forwardRef<
    HTMLDivElement,
    CommandListProps
>(

function CommandList(

{

    className,

    children,

    ...props

},

ref,

) {

    return (

        <List

            ref={ref}

            role="listbox"

            aria-orientation="vertical"

            className={cn(

                "flex",

                "max-h-[320px]",

                "flex-col",

                "overflow-y-auto",

                "overflow-x-hidden",

                "p-1",

                "scroll-smooth",

                className,

            )}

            {...props}

        >

            {children}

        </List>

    );

},

);

CommandList.displayName =
    "CommandList";

export default CommandList;
