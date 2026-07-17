/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectIcon.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface SelectIconProps
extends HTMLAttributes<HTMLSpanElement> {}

export const SelectIcon =
forwardRef<
HTMLSpanElement,
SelectIconProps
>(

function SelectIcon(

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

                "ml-auto inline-flex items-center justify-center text-muted-foreground",

                className,

            )}

            {...props}

        >

            {children ?? "▾"}

        </span>

    );

},

);

SelectIcon.displayName =
    "SelectIcon";

export default SelectIcon;
