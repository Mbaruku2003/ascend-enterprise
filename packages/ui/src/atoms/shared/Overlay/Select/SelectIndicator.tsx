/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectIndicator.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface SelectIndicatorProps
    extends HTMLAttributes<HTMLSpanElement> {}

export const SelectIndicator =
forwardRef<
    HTMLSpanElement,
    SelectIndicatorProps
>(

function SelectIndicator(

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

                "mr-2 inline-flex h-4 w-4 items-center justify-center",

                className,

            )}

            {...props}

        >

            {children ?? "✓"}

        </span>

    );

},

);

SelectIndicator.displayName =
    "SelectIndicator";

export default SelectIndicator;
