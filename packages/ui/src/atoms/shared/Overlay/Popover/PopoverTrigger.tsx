/**
 * ============================================================================
 * Ascend UI
 * Popover Trigger
 * ============================================================================
 */

import {

    cloneElement,

    forwardRef,

    isValidElement,

    type MouseEvent,

    type ReactElement,

} from "react";

import {

    useMergedRefs,

} from "@/hooks";

import {

    usePopoverContext,

} from "./PopoverContext";

export interface PopoverTriggerProps {

    children: ReactElement;

}

export const PopoverTrigger =
forwardRef<
HTMLElement,
PopoverTriggerProps
>(

(
{
children,
},
forwardedRef,
) => {

const {

togglePopover,

triggerRef,

anchorRef,

open,

} =
usePopoverContext();

const ref =
useMergedRefs(

forwardedRef,

triggerRef,

anchorRef,

);

if (
!isValidElement(children)
) {

return null;

}

return cloneElement(

children,

{

ref,

"aria-haspopup": "dialog",

"aria-expanded": open,

onClick(
event: MouseEvent,
) {

children.props
.onClick?.(
event,
);

if (
!event.defaultPrevented
) {

togglePopover();

}

},

},

);

},

);

PopoverTrigger.displayName =
"PopoverTrigger";

export default PopoverTrigger;
