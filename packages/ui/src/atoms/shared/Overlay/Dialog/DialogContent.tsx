/**
 * ============================================================================
 * Ascend UI
 * Dialog Content
 * ============================================================================
 */

import {
    forwardRef,
    useEffect,
} from "react";

import type {
    HTMLAttributes,
} from "react";

import Surface from "../../display/Surface";

import {
    useMergedRefs,
} from "@/hooks";

import {
    cn,
} from "@/utils";

import {
    dialogStyles,
} from "./Dialog.styles";

import {
    useDialogContext,
} from "./DialogContext";

export interface DialogContentProps
extends HTMLAttributes<HTMLDivElement> {}

export const DialogContent =
forwardRef<
HTMLDivElement,
DialogContentProps
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

titleId,

descriptionId,

contentRef,

} =
useDialogContext();

const ref =
useMergedRefs(
forwardedRef,
contentRef,
);

return (

<div
className={
dialogStyles.container
}
>

<Surface
ref={ref}
role="dialog"
tabIndex={-1}
aria-modal="true"
aria-labelledby={
titleId
}
aria-describedby={
descriptionId
}
className={cn(
dialogStyles.content,
className,
)}
{...props}
>

{children}

</Surface>

</div>

);

},
);

DialogContent.displayName =
"DialogContent";

export default DialogContent;
