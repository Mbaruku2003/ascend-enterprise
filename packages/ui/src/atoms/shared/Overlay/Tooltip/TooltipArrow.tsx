/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip Arrow
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import type {
    TooltipArrowProps,
} from "./Tooltip.types";

import {
    DEFAULT_TOOLTIP_ARROW_SIZE,
} from "./Tooltip.constants";

export const TooltipArrow =
forwardRef<
HTMLDivElement,
TooltipArrowProps
>(

function TooltipArrow(

{

size =
DEFAULT_TOOLTIP_ARROW_SIZE,

style,

className,

...props

},

ref,

) {

return (

<div

ref={ref}

style={{

width: size,

height: size,

transform:
"rotate(45deg)",

...style,

}}

className={cn(

"absolute",

"bg-popover",

"border",

className,

)}

{...props}

/>

);

},

);

TooltipArrow.displayName =
"TooltipArrow";

export default TooltipArrow;
