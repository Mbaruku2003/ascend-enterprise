/**
 * ============================================================================
 * Ascend UI
 * Popover Content
 * ============================================================================
 */

import {

forwardRef,

type HTMLAttributes,

} from "react";

import {

cn,

} from "@/utils";

import {

useMergedRefs,

} from "@/hooks";

import {

usePopoverContext,

} from "./PopoverContext";

export interface PopoverContentProps
extends HTMLAttributes<HTMLDivElement> {}

export const PopoverContent =
forwardRef<
HTMLDivElement,
PopoverContentProps
>(

(
{
className,
style,
children,
...props
},
forwardedRef,
) => {

const {

contentRef,

anchorRef,

placement,

offset,

} =
usePopoverContext();

const ref =
useMergedRefs(

forwardedRef,

contentRef,

);

const anchor =
anchorRef.current;

const anchorRect =
anchor?.getBoundingClientRect();

const positionStyle = anchorRect
? {
position: "fixed" as const,

top:
placement.startsWith("bottom")
? anchorRect.bottom + offset
: placement.startsWith("top")
? anchorRect.top - offset
: anchorRect.top,

left:
placement.startsWith("right")
? anchorRect.right + offset
: placement.startsWith("left")
? anchorRect.left - offset
: anchorRect.left,

}
: {};

return (

<div

ref={ref}

role="dialog"

className={cn(

"z-50 min-w-[12rem] rounded-lg border bg-background shadow-lg outline-none",

className,

)}

style={{

...positionStyle,

...style,

}}

{...props}

>

{children}

</div>

);

},

);

PopoverContent.displayName =
"PopoverContent";

export default PopoverContent;
