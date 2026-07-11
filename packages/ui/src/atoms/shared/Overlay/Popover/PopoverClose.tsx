/**
 * ============================================================================
 * Ascend UI
 * Popover Close
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

usePopoverContext,

} from "./PopoverContext";

export interface PopoverCloseProps {

children: ReactElement;

}

export const PopoverClose =
forwardRef<
HTMLElement,
PopoverCloseProps
>(
(
{
children,
},
forwardedRef,
) => {

const {

closePopover,

} =
usePopoverContext();

if (
!isValidElement(children)
) {

return null;

}

return cloneElement(

children,

{

ref: forwardedRef,

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

closePopover();

}

},

},

);

},
);

PopoverClose.displayName =
"PopoverClose";

export default PopoverClose;
