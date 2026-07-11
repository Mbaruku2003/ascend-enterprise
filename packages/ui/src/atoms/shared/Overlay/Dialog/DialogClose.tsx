/**
 * ============================================================================
 * Ascend UI
 * Dialog Close
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

export interface DialogCloseProps {

    children: ReactElement;

}

export function DialogClose({

    children,

}: DialogCloseProps) {

    const {

        closeDialog,

    } = useDialogContext();

    if (!isValidElement(children)) {

        throw new Error(
            "DialogClose expects a single React element.",
        );

    }

    return cloneElement(children, {

        onClick: (event: MouseEvent) => {

            children.props.onClick?.(event);

            if (!event.defaultPrevented) {

                closeDialog();

            }

        },

    });

}

export default DialogClose;
