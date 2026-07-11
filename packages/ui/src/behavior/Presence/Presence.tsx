/**
 * ============================================================================
 * Ascend UI
 * Presence
 * ============================================================================
 */

import {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
} from "react";

import PresenceContext from "./PresenceContext";

import {
    usePresence,
} from "./usePresence";

import type {
    PresenceProps,
} from "./Presence.types";

export function Presence({

    children,

    present,

    forceMount = false,

    lazyMount = false,

    enterClassName,

    exitClassName,

    onMount,

    onExit,

    onExitComplete,

    onUnmount,

}: PresenceProps) {

    const state =
        usePresence(
            present,
            forceMount,
        );

    useEffect(() => {

        if (
            state.present
        ) {

            onMount?.();

        }

    }, [
        state.present,
        onMount,
    ]);

    useEffect(() => {

        if (
            state.exiting
        ) {

            onExit?.();

        }

    }, [
        state.exiting,
        onExit,
    ]);

    if (
        !state.mounted &&
        !forceMount
    ) {

        onUnmount?.();

        return null;

    }

    const child =
        Children.only(children);

    if (
        !isValidElement(child)
    ) {

        return null;

    }

    const className = [

        child.props.className,

        state.present
            ? enterClassName
            : exitClassName,

    ]
        .filter(Boolean)
        .join(" ");

    return (

        <PresenceContext.Provider
            value={state}
        >

            {

                cloneElement(
                    child,

                    {

                        className,

                        onAnimationEnd(
                            event: AnimationEvent,
                        ) {

                            child.props
                                .onAnimationEnd?.(
                                    event,
                                );

                            if (
                                state.exiting
                            ) {

                                state.finishExit();

                                onExitComplete?.();

                            }

                        },

                        onTransitionEnd(
                            event: TransitionEvent,
                        ) {

                            child.props
                                .onTransitionEnd?.(
                                    event,
                                );

                            if (
                                state.exiting
                            ) {

                                state.finishExit();

                                onExitComplete?.();

                            }

                        },

                    },
                )

            }

        </PresenceContext.Provider>

    );

}

export default Presence;
