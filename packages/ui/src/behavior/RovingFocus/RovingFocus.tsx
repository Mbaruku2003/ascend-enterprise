/**
 * ============================================================================
 * Ascend UI
 * Roving Focus
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    type KeyboardEvent,
} from "react";

import { useRovingFocus } from "./useRovingFocus";

import { RovingFocusProvider } from "./RovingFocusContext";

import { handleRovingFocusKeyDown } from "./keyboard";

import type {
    RovingFocusProps,
} from "./RovingFocus.types";

export function RovingFocus({

    children,

    as: Component = "div",

    loop = true,

    orientation = "vertical",

    direction = "ltr",

}: RovingFocusProps) {

    const engine =
        useRovingFocus();

    const onKeyDown =
        useCallback(

            (
                event: KeyboardEvent<HTMLElement>,
            ) => {

                handleRovingFocusKeyDown({

                    event,

                    registry:
                        engine.registry,

                    currentId:
                        engine.currentId,

                    loop,

                    orientation,

                    direction,

                    focus:
                        engine.focus,

                });

            },

            [

                engine,

                loop,

                orientation,

                direction,

            ],

        );

    const value =
        useMemo(

            () => ({

                registry:
                    engine.registry,

                register:
                    engine.register,

                unregister:
                    engine.unregister,

                currentId:
                    engine.currentId,

                setCurrentId:
                    engine.setCurrentId,

                loop,

                orientation,

                direction,

                onKeyDown,

            }),

            [

                engine,

                loop,

                orientation,

                direction,

                onKeyDown,

            ],

        );

    return (

        <RovingFocusProvider
            value={value}
        >

            <Component
                onKeyDown={onKeyDown}
            >

                {children}

            </Component>

        </RovingFocusProvider>

    );

}

export default RovingFocus;
