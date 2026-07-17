/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectGroup.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface SelectGroupProps
extends HTMLAttributes<HTMLDivElement> {}

export const SelectGroup =
forwardRef<
HTMLDivElement,
SelectGroupProps
>(

function SelectGroup(

{

    className,

    ...props

},

ref,

) {

    return (

        <div

            ref={ref}

            role="group"

            className={cn(

                "p-1",

                className,

            )}

            {...props}

        />

    );

},

);

SelectGroup.displayName =
    "SelectGroup";

export default SelectGroup;
