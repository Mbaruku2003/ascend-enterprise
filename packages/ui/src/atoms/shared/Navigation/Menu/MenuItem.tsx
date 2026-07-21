/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuItem.tsx
 *
 * Standard selectable menu item.
 *
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
    type KeyboardEvent,
    type MouseEvent,
} from "react";

import {
    ListItem,
} from "../../List";

import {
    useMenuContext,
} from "./MenuContext";

export interface MenuItemProps
    extends HTMLAttributes<HTMLDivElement> {

    disabled?: boolean;

    inset?: boolean;

    destructive?: boolean;

    onSelect?(): void;

}

export const MenuItem =
forwardRef<
HTMLDivElement,
MenuItemProps
>(

function MenuItem(

{

className,

disabled = false,

inset = false,

destructive = false,

children,

onClick,

onKeyDown,

onSelect,

...props

},

forwardedRef,

) {

const {

closeMenu,

} =
useMenuContext();

function select() {

if (disabled) {

return;

}

onSelect?.();

closeMenu();

}

function handleClick(

event: MouseEvent<HTMLDivElement>,

) {

onClick?.(event);

if (
event.defaultPrevented
) {

return;

}

select();

}

function handleKeyDown(

event: KeyboardEvent<HTMLDivElement>,

) {

onKeyDown?.(event);

if (
event.defaultPrevented
) {

return;

}

switch (
event.key
) {

case "Enter":

case " ":

event.preventDefault();

select();

break;

}

}

return (

<ListItem

ref={forwardedRef}

role="menuitem"

tabIndex={
disabled
? -1
: 0
}

aria-disabled={
disabled || undefined
}

disabled={
disabled
}

inset={
inset
}

destructive={
destructive
}

className={
className
}

onClick={
handleClick
}

onKeyDown={
handleKeyDown
}

{...props}

>

{children}

</ListItem>

);

},

);

MenuItem.displayName =
"MenuItem";

export default MenuItem;
