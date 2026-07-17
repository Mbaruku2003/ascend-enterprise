/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuShortcut.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

export interface MenuShortcutProps
    extends HTMLAttributes<HTMLSpanElement> {}

export const MenuShortcut =
forwardRef<
HTMLSpanElement,
MenuShortcutProps
>(

function MenuShortcut(

{

className,

...props

},

ref,

) {

return (

<span

ref={ref}

className={cn(

"ml-auto",

"pl-4",

"text-xs",

"tracking-widest",

"text-muted-foreground",

className,

)}

{...props}

/>

);

},

);

MenuShortcut.displayName =
"MenuShortcut";

export default MenuShortcut;
