/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuSubTrigger.tsx
 *
 * Trigger for nested menus.
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

import {
    useMenuSubContext,
} from "./MenuSub";

export interface MenuSubTriggerProps
    extends HTMLAttributes<HTMLDivElement> {

    inset?: boolean;

    disabled?: boolean;

}

export const MenuSubTrigger =
forwardRef<
HTMLDivElement,
MenuSubTriggerProps
>(

function MenuSubTrigger(

{

className,

children,

disabled = false,

inset = false,

onClick,

onKeyDown,

...props

},

forwardedRef,

) {

const {

dir,

} =
useMenuContext();

const {

open,

toggleSubmenu,

openSubmenu,

} =
useMenuSubContext();

function handleClick(

event: MouseEvent<HTMLDivElement>,

) {

onClick?.(event);

if (

event.defaultPrevented ||

disabled

) {

return;

}

toggleSubmenu();

}

function handleKeyDown(

event: KeyboardEvent<HTMLDivElement>,

) {

onKeyDown?.(event);

if (

event.defaultPrevented ||

disabled

) {

return;

}

const openKey =
dir === "rtl"
? "ArrowLeft"
: "ArrowRight";

if (

event.key === openKey

) {

event.preventDefault();

openSubmenu();

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

aria-haspopup="menu"

aria-expanded={open}

aria-disabled={
disabled || undefined
}

data-state={
open
? "open"
: "closed"
}

className={cn(

"flex",

"cursor-default",

"select-none",

"items-center",

"justify-between",

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

className,

)}

onClick={handleClick}

onKeyDown={handleKeyDown}

{...props}

>

<span>

{children}

</span>

<span

className="ml-4"

aria-hidden="true"

>

▸

</span>

</div>

);

},

);

MenuSubTrigger.displayName =
"MenuSubTrigger";

export default MenuSubTrigger;
