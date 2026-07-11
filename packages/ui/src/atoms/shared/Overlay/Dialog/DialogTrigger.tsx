/**
 * ============================================================================
 * Ascend UI
 * Dialog Trigger
 * ============================================================================
 */

import {
    cloneElement,
    isValidElement,
} from "react";

import type {
    ReactElement,
    MouseEvent,
} from "react";

import { useDialogContext } from "./DialogContext";

export interface DialogTriggerProps {

    children: ReactElement;

}

export function DialogTrigger({

    children,

}: DialogTriggerProps) {

    const {

        openDialog,

        triggerRef,

    } = useDialogContext();

    if (!isValidElement(children)) {

        throw new Error(
            "DialogTrigger expects a single React element.",
        );

    }

    return cloneElement(children, {

        ref: triggerRef,

        "aria-haspopup": "dialog",

        "aria-expanded": false,

        onClick: (event: MouseEvent) => {

            children.props.onClick?.(event);

            if (!event.defaultPrevented) {

                openDialog();

            }

        },

    });

}

export default DialogTrigger;
