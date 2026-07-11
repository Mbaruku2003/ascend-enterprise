import {
    createContext,
    useContext,
} from "react";

export interface PresenceContextValue {

    mounted: boolean;

    present: boolean;

    exiting: boolean;

    finishExit(): void;

}

const PresenceContext =
createContext<
PresenceContextValue | undefined
>(undefined);

export function usePresenceContext() {

    const context =
        useContext(
            PresenceContext,
        );

    if (!context) {

        throw new Error(
            "Presence components must be inside Presence.",
        );

    }

    return context;

}

export default PresenceContext;
