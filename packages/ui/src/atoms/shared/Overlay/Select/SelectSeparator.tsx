/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectSeparator.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface SelectSeparatorProps
extends HTMLAttributes<HTMLHRElement> {}

export const SelectSeparator =
forwardRef<
HTMLHRElement,
SelectSeparatorProps
>(

function SelectSeparator(

{

    className,

    ...props

},

ref,

) {

    return (

        <hr

            ref={ref}

            className={cn(

                "my-1 border-border",

                className,

            )}

            {...props}

        />

    );

},

);

SelectSeparator.displayName =
    "SelectSeparator";

export default SelectSeparator;
