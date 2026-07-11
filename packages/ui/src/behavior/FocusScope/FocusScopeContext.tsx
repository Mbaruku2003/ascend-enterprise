import {
    createContext,
    useContext,
} from "react";

export interface FocusScopeContextValue {

    paused: boolean;

    pause(): void;

    resume(): void;

}

const FocusScopeContext =
createContext<
FocusScopeContextValue | undefined
>(undefined);

export function useFocusScopeContext() {

    const context =
    useContext(
        FocusScopeContext,
    );

    if (!context) {

        throw new Error(
            "FocusScope components must be used inside FocusScope.",
        );

    }

    return context;

}

export default FocusScopeContext;
