/**
 * ============================================================================
 * Ascend UI
 * usePresence
 * ============================================================================
 */

import {
    useEffect,
    useState,
} from "react";

export function usePresence(
    present: boolean,
    forceMount = false,
) {

    const [
        mounted,
        setMounted,
    ] =
        useState(
            forceMount || present,
        );

    const [
        exiting,
        setExiting,
    ] =
        useState(false);

    useEffect(() => {

        if (
            forceMount
        ) {

            setMounted(true);

            return;

        }

        if (
            present
        ) {

            setMounted(true);

            setExiting(false);

            return;

        }

        setExiting(true);

    }, [
        present,
        forceMount,
    ]);

    return {

        mounted,

        exiting,

        present,

        finishExit() {

            setMounted(false);

            setExiting(false);

        },

    };

}
