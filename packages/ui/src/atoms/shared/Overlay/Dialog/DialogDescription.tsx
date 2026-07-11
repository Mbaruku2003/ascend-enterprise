/**
 * ============================================================================
 * Ascend UI
 * Dialog Description
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

import { useDialogContext } from "./DialogContext";

export interface DialogDescriptionProps
    extends HTMLAttributes<HTMLParagraphElement> {}

export const DialogDescription = forwardRef<
    HTMLParagraphElement,
    DialogDescriptionProps
>(
    (
        {
            className,
            children,
            ...props
        },
        ref,
    ) => {

        const {
            descriptionId,
        } = useDialogContext();

        return (
            <p
                ref={ref}
                id={descriptionId}
                className={cn(
                    "text-sm text-muted-foreground",
                    className,
                )}
                {...props}
            >
                {children}
            </p>
        );

    },
);

DialogDescription.displayName =
    "DialogDescription";

export default DialogDescription;
