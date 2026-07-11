import {
    useMemo,
    useRef,
} from "react";

import {
    useControllableState,
    useId,
} from "@/hooks";

import DialogContext from "./DialogContext";

import {

    DEFAULT_OPEN,

    DEFAULT_MODAL,

    DEFAULT_PORTAL,

    DEFAULT_CLOSE_ON_ESCAPE,

    DEFAULT_CLOSE_ON_POINTER_DOWN_OUTSIDE,

    DEFAULT_CLOSE_ON_INTERACT_OUTSIDE,

} from "./dialog.constants";

import type {

    DialogProps,

} from "./Dialog.types";

export function Dialog({

    children,

    open,

    defaultOpen = DEFAULT_OPEN,

    modal = DEFAULT_MODAL,

    portal = DEFAULT_PORTAL,

    closeOnEscape =
        DEFAULT_CLOSE_ON_ESCAPE,

    closeOnPointerDownOutside =
        DEFAULT_CLOSE_ON_POINTER_DOWN_OUTSIDE,

    closeOnInteractOutside =
        DEFAULT_CLOSE_ON_INTERACT_OUTSIDE,

    onOpenChange,

}: DialogProps) {

    const triggerRef =
        useRef<HTMLElement>(null);

    const contentRef =
        useRef<HTMLDivElement>(null);

    const titleId =
        useId();

    const descriptionId =
        useId();

    const [
        isOpen,
        setOpen,
    ] =
        useControllableState({

            value: open,

            defaultValue:
                defaultOpen,

            onChange:
                onOpenChange,

        });

    const value =
        useMemo(
            () => ({

                open: isOpen,

                modal,

                portal,

                closeOnEscape,

                closeOnPointerDownOutside,

                closeOnInteractOutside,

                titleId,

                descriptionId,

                triggerRef,

                contentRef,

                setOpen,

                openDialog() {

                    setOpen(true);

                },

                closeDialog() {

                    setOpen(false);

                },

                toggleDialog() {

                    setOpen(!isOpen);

                },

            }),
            [

                isOpen,

                modal,

                portal,

                closeOnEscape,

                closeOnPointerDownOutside,

                closeOnInteractOutside,

                titleId,

                descriptionId,

                setOpen,

            ],
        );

    return (

        <DialogContext.Provider
            value={value}
        >

            {children}

        </DialogContext.Provider>

    );

}

export default Dialog;
