/**
 * ============================================================================
 * Ascend Enterprise UI
 * HoverCard Arrow
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import {

DEFAULT_HOVERCARD_ARROW_SIZE,

} from "./HoverCard.constants";

import type {

HoverCardArrowProps,

} from "./HoverCard.types";

export const HoverCardArrow =
forwardRef<
HTMLDivElement,
HoverCardArrowProps
>(

function HoverCardArrow(

{

size =
DEFAULT_HOVERCARD_ARROW_SIZE,

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

"border",

"bg-popover",

className,

)}

{...props}

/>

);

},

);

HoverCardArrow.displayName =
"HoverCardArrow";

export default HoverCardArrow;
