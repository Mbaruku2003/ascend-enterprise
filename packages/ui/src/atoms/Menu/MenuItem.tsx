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
    cn,
    composeRefs,
} from "@/utils";

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

<div

ref={composeRefs(
forwardedRef,
)}

role="menuitem"

tabIndex={
disabled
? -1
: 0
}

aria-disabled={
disabled || undefined
}

data-disabled={
disabled
? ""
: undefined
}

className={cn(

"flex",

"cursor-default",

"select-none",

"items-center",

"rounded-sm",

"px-2",

"py-1.5",

"text-sm",

"outline-none",

"transition-colors",

"focus:bg-accent",

"focus:text-accent-foreground",

!disabled &&
"hover:bg-accent",

disabled &&
"pointer-events-none opacity-50",

inset &&
"pl-8",

destructive &&
"text-destructive",

className,

)}

onClick={
handleClick
}

onKeyDown={
handleKeyDown
}

{...props}

>

{children}

</div>

);

},

);

MenuItem.displayName =
"MenuItem";

export default MenuItem;
