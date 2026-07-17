/**
 * ============================================================================
 * Ascend Enterprise UI
 * HoverCard Content
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
    useHoverCardContext,
} from "./HoverCardContext";

import {

    DEFAULT_HOVERCARD_COLLISION_PADDING,

    DEFAULT_HOVERCARD_OFFSET,

    DEFAULT_HOVERCARD_PLACEMENT,

} from "./HoverCard.constants";

import type {

    HoverCardContentProps,

} from "./HoverCard.types";

export const HoverCardContent =
forwardRef<
HTMLDivElement,
HoverCardContentProps
>(

function HoverCardContent(

{

placement =
DEFAULT_HOVERCARD_PLACEMENT,

offset =
DEFAULT_HOVERCARD_OFFSET,

collisionPadding =
DEFAULT_HOVERCARD_COLLISION_PADDING,

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
useHoverCardContext();

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

"rounded-xl",

"border",

"bg-popover",

"shadow-xl",

"p-4",

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

HoverCardContent.displayName =
"HoverCardContent";

export default HoverCardContent;
