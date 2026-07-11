/**
 * ============================================================================
 * Ascend UI
 * Dialog Title
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

import { useDialogContext } from "./DialogContext";

export interface DialogTitleProps
    extends HTMLAttributes<HTMLHeadingElement> {}

export const DialogTitle = forwardRef<
    HTMLHeadingElement,
    DialogTitleProps
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
            titleId,
        } = useDialogContext();

        return (
            <h2
                ref={ref}
                id={titleId}
                className={cn(
                    "text-xl font-semibold leading-none tracking-tight",
                    className,
                )}
                {...props}
            >
                {children}
            </h2>
        );

    },
);

DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
