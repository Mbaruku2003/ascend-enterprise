/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuCheckboxItem.tsx
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

export interface MenuCheckboxItemProps
    extends Omit<MenuItemProps, "onSelect"> {

    checked?: boolean | "indeterminate";

    onCheckedChange?(
        checked: boolean | "indeterminate",
    ): void;

}

export const MenuCheckboxItem =
forwardRef<
HTMLDivElement,
MenuCheckboxItemProps
>(

function MenuCheckboxItem(

{

checked = false,

onCheckedChange,

children,

className,

...props

},

ref,

) {

function handleSelect() {

const next =
checked === true
? false
: true;

onCheckedChange?.(next);

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

{checked === true && "✓"}

{checked === "indeterminate" && "—"}

</span>

{children}

</MenuItem>

);

},

);

MenuCheckboxItem.displayName =
"MenuCheckboxItem";

export default MenuCheckboxItem;
