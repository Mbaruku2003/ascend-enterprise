/**
 * ============================================================================
 * Ascend UI
 * Drawer Content
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

import { cn } from "@/utils";

import {
    useMergedRefs,
} from "@/hooks";

import {
    useDrawerContext,
} from "./DrawerContext";

export interface DrawerContentProps
extends HTMLAttributes<HTMLDivElement> {}

export const DrawerContent =
forwardRef<
HTMLDivElement,
DrawerContentProps
>(

(
{
className,
children,
...props
},
forwardedRef,
) => {

const {

contentRef,

placement,

size,

titleId,

descriptionId,

} =
useDrawerContext();

const ref =
useMergedRefs(

forwardedRef,

contentRef,

);

return (

<div

ref={ref}

role="dialog"

aria-modal="true"

aria-labelledby={titleId}

aria-describedby={descriptionId}

className={cn(

"fixed z-50 bg-background shadow-xl outline-none",

placement === "left" &&
"left-0 top-0 h-full",

placement === "right" &&
"right-0 top-0 h-full",

placement === "top" &&
"left-0 top-0 w-full",

placement === "bottom" &&
"bottom-0 left-0 w-full",

size === "xs" &&
"w-64",

size === "sm" &&
"w-80",

size === "md" &&
"w-96",

size === "lg" &&
"w-[32rem]",

size === "xl" &&
"w-[40rem]",

size === "full" &&
"h-full w-full",

className,

)}

{...props}

>

{children}

</div>

);

},

);

DrawerContent.displayName =
"DrawerContent";

export default DrawerContent;
