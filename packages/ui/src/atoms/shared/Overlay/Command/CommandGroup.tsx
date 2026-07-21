/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandGroup.tsx
 *
 * Groups related commands under an optional heading.
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
    CommandGroupProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandGroup =
forwardRef<
    HTMLDivElement,
    CommandGroupProps
>(

function CommandGroup(

{

    heading,

    className,

    children,

    ...props

},

ref,

) {

    return (

        <div

            ref={ref}

            role="group"

            className={cn(

                "overflow-hidden",

                className,

            )}

            {...props}

        >

            {heading && (

                <div

                    className={cn(

                        "px-3",

                        "py-2",

                        "text-xs",

                        "font-semibold",

                        "uppercase",

                        "tracking-wide",

                        "text-muted-foreground",

                    )}

                >

                    {heading}

                </div>

            )}

            <div

                className="space-y-1"

            >

                {children}

            </div>

        </div>

    );

},

);

CommandGroup.displayName =
    "CommandGroup";

export default CommandGroup;
