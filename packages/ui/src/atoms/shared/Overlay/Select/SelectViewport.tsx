/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectViewport.tsx
 *
 * Scrollable viewport containing Select items.
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface SelectViewportProps
    extends HTMLAttributes<HTMLDivElement> {}

export const SelectViewport =
forwardRef<
    HTMLDivElement,
    SelectViewportProps
>(

function SelectViewport(

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

            className={cn(

                "max-h-72 overflow-auto p-1",

                className,

            )}

            {...props}

        >

            {children}

        </div>

    );

},

);

SelectViewport.displayName =
    "SelectViewport";

export default SelectViewport;
