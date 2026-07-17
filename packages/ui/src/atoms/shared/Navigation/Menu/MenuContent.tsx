/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuContent.tsx
 *
 * Floating menu surface.
 *
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
    useFloating,
} from "@/atoms/shared/Overlay/Floating";

import {
    DismissableLayer,
} from "@/atoms/shared/Overlay";

import {
    DEFAULT_MENU_COLLISION_PADDING,
    DEFAULT_MENU_FORCE_MOUNT,
    DEFAULT_MENU_OFFSET,
    DEFAULT_MENU_PLACEMENT,
} from "./Menu.constants";

import {
    useMenuContext,
} from "./MenuContext";

export interface MenuContentProps
    extends HTMLAttributes<HTMLDivElement> {

    placement?: string;

    offset?: number;

    collisionPadding?: number;

    forceMount?: boolean;

}

export const MenuContent =
forwardRef<
HTMLDivElement,
MenuContentProps
>(

function MenuContent(

{

className,

style,

children,

placement = DEFAULT_MENU_PLACEMENT,

offset = DEFAULT_MENU_OFFSET,

collisionPadding =
DEFAULT_MENU_COLLISION_PADDING,

forceMount =
DEFAULT_MENU_FORCE_MOUNT,

...props

},

forwardedRef,

) {

const {

open,

closeMenu,

triggerRef,

contentRef,

} =
useMenuContext();

const ref =
useMergedRefs(

forwardedRef,

contentRef,

);

const {

style: floatingStyle,

update,

} =
useFloating({

anchorRef:
triggerRef,

floatingRef:
contentRef,

placement,

offset,

collisionPadding,

});

if (
!open &&
!forceMount
) {

return null;

}

return (

<DismissableLayer

enabled={open}

onDismiss={
closeMenu
}

>

<div

ref={ref}

role="menu"

tabIndex={-1}

data-state={
open
? "open"
: "closed"
}

className={cn(

"z-50",

"min-w-[12rem]",

"rounded-md",

"border",

"bg-background",

"shadow-lg",

"outline-none",

className,

)}

style={{

...floatingStyle,

...style,

}}

onAnimationEnd={
update
}

{...props}

>

{children}

</div>

</DismissableLayer>

);

},

);

MenuContent.displayName =
"MenuContent";

export default MenuContent;
