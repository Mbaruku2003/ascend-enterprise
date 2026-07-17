/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuLabel.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface MenuLabelProps
    extends HTMLAttributes<HTMLDivElement> {

    inset?: boolean;

}

export const MenuLabel =
forwardRef<
HTMLDivElement,
MenuLabelProps
>(

function MenuLabel(

{

className,

inset,

...props

},

ref,

) {

return (

<div

ref={ref}

className={cn(

"px-2",

"py-1.5",

"text-xs",

"font-semibold",

"text-muted-foreground",

inset &&
"pl-8",

className,

)}

{...props}

/>

);

},

);

MenuLabel.displayName =
"MenuLabel";

export default MenuLabel;
