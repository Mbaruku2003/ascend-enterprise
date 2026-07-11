/**
 * ============================================================================
 * Ascend UI
 * Popover Arrow
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

export interface PopoverArrowProps
extends HTMLAttributes<HTMLDivElement> {

    size?: number;

}

export const PopoverArrow =
forwardRef<
HTMLDivElement,
PopoverArrowProps
>(
(
{
    className,

    size = 10,

    style,

    ...props

},
ref,
) => (

<div

ref={ref}

className={cn(

"absolute rotate-45 border bg-background",

className,

)}

style={{

width: size,

height: size,

top: -size / 2,

left: "50%",

marginLeft: -(size / 2),

...style,

}}

{...props}

/>

),
);

PopoverArrow.displayName =
"PopoverArrow";

export default PopoverArrow;
