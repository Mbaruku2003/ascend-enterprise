/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip
 * ----------------------------------------------------------------------------
 * TooltipContent
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import {
    useFloatingPosition,
} from "../Floating";

import {
    useTooltipContext,
} from "./TooltipContext";

import type {
    TooltipContentProps,
} from "./Tooltip.types";

import {
    DEFAULT_TOOLTIP_COLLISION_PADDING,
    DEFAULT_TOOLTIP_OFFSET,
    DEFAULT_TOOLTIP_PLACEMENT,
} from "./Tooltip.constants";

export const TooltipContent =
forwardRef<
HTMLDivElement,
TooltipContentProps
>(

function TooltipContent(

{

placement =
DEFAULT_TOOLTIP_PLACEMENT,

offset =
DEFAULT_TOOLTIP_OFFSET,

collisionPadding =
DEFAULT_TOOLTIP_COLLISION_PADDING,

forceMount,

style,

className,

children,

...props

},

forwardedRef,

) {

const {

open,

triggerRef,

contentRef,

} =
useTooltipContext();

const {

refs,

floatingStyles,

} =
useFloatingPosition({

open,

placement,

offset,

collisionPadding,

reference:
triggerRef,

floating:
contentRef,

});

if (

!open &&

!forceMount

) {

return null;

}

return (

<div

ref={refs.setFloating}

style={{

...floatingStyles,

...style,

}}

className={cn(

"z-50",

"rounded-md",

"bg-popover",

"px-3",

"py-1.5",

"text-sm",

"text-popover-foreground",

"shadow-lg",

"border",

"animate-in",

"fade-in-0",

"zoom-in-95",

className,

)}

{...props}

>

{children}

</div>

);

},

);

TooltipContent.displayName =
"TooltipContent";

export default TooltipContent;
