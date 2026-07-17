/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectLabel.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface SelectLabelProps
extends HTMLAttributes<HTMLDivElement> {}

export const SelectLabel =
forwardRef<
HTMLDivElement,
SelectLabelProps
>(

function SelectLabel(

{

    className,

    ...props

},

ref,

) {

    return (

        <div

            ref={ref}

            className={cn(

                "px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",

                className,

            )}

            {...props}

        />

    );

},

);

SelectLabel.displayName =
    "SelectLabel";

export default SelectLabel;
