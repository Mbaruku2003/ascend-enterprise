import {
    createContext,
    useContext,
} from "react";

import type {
    DialogContextValue,
} from "./Dialog.types";

const DialogContext =
    createContext<
        DialogContextValue | null
    >(null);

export function useDialogContext() {

    const context =
        useContext(DialogContext);

    if (!context) {

        throw new Error(
            "Dialog components must be used inside <Dialog>.",
        );

    }

    return context;

}

export default DialogContext;
