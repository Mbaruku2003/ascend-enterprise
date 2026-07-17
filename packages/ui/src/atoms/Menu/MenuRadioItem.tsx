/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuRadioItem.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import MenuItem, {
    type MenuItemProps,
} from "./MenuItem";

import {
    useMenuRadioGroup,
} from "./MenuRadioGroup";

export interface MenuRadioItemProps
extends Omit<MenuItemProps, "onSelect"> {

value: string;

}

export const MenuRadioItem =
forwardRef<
HTMLDivElement,
MenuRadioItemProps
>(

function MenuRadioItem(

{

value,

children,

className,

...props

},

ref,

) {

const {

value: selected,

onValueChange,

} =
useMenuRadioGroup();

const checked =
selected === value;

function handleSelect() {

onValueChange?.(value);

}

return (

<MenuItem

ref={ref}

className={cn(className)}

onSelect={handleSelect}

{...props}

>

<span

className="mr-2 flex h-4 w-4 items-center justify-center"

aria-hidden="true"

>

{checked && "●"}

</span>

{children}

</MenuItem>

);

},

);

MenuRadioItem.displayName =
"MenuRadioItem";

export default MenuRadioItem;
