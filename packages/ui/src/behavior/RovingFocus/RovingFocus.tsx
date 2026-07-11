/**
 * ============================================================================
 * Ascend UI
 * Roving Focus
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useState,
    type KeyboardEvent,
} from "react";

import RovingFocusContext from "./RovingFocusContext";

import {
    useRovingFocus,
} from "./useRovingFocus";

import type {
    RovingFocusItem,
    RovingFocusProps,
} from "./RovingFocus.types";

export function RovingFocus({

    children,

    loop = true,

    orientation = "vertical",

}: RovingFocusProps) {

    const {
        currentIndex,
        setCurrentIndex,
    } =
    useRovingFocus();

    const [

        items,

        setItems,

    ] =
    useState<
        RovingFocusItem[]
    >([]);

    /**
     * Register item
     */
    const register =
        useCallback(

            (
                item: RovingFocusItem,
            ) => {

                setItems(
                    previous => {

                        if (

                            previous.some(
                                existing =>
                                    existing.id === item.id,
                            )

                        ) {

                            return previous;

                        }

                        return [

                            ...previous,

                            item,

                        ];

                    },
                );

            },

            [],
        );

    /**
     * Remove item
     */
    const unregister =
        useCallback(

            (
                id: string,
            ) => {

                setItems(

                    previous =>
                        previous.filter(

                            item =>
                                item.id !== id,

                        ),

                );

            },

            [],
        );

    /**
     * Focus helper
     */
    const focusIndex =
        useCallback(

            (
                index: number,
            ) => {

                const item =
                    items[index];

                if (
                    !item ||
                    item.disabled
                ) {

                    return;

                }

                setCurrentIndex(index);

                item.ref.current?.focus();

            },

            [

                items,

                setCurrentIndex,

            ],

        );

    /**
     * Keyboard navigation
     */
    const handleKeyDown =
        useCallback(

            (
                event: KeyboardEvent,
            ) => {

                if (
                    items.length === 0
                ) {

                    return;

                }

                const last =
                    items.length - 1;

                switch (
                    event.key
                ) {

                    case "ArrowDown":

                        if (
                            orientation === "horizontal"
                        ) {

                            return;

                        }

                        event.preventDefault();

                        if (
                            currentIndex < last
                        ) {

                            focusIndex(
                                currentIndex + 1,
                            );

                        } else if (
                            loop
                        ) {

                            focusIndex(0);

                        }

                        break;

                    case "ArrowUp":

                        if (
                            orientation === "horizontal"
                        ) {

                            return;

                        }

                        event.preventDefault();

                        if (
                            currentIndex > 0
                        ) {

                            focusIndex(
                                currentIndex - 1,
                            );

                        } else if (
                            loop
                        ) {

                            focusIndex(last);

                        }

                        break;

                    case "ArrowRight":

                        if (
                            orientation === "vertical"
                        ) {

                            return;

                        }

                        event.preventDefault();

                        if (
                            currentIndex < last
                        ) {

                            focusIndex(
                                currentIndex + 1,
                            );

                        } else if (
                            loop
                        ) {

                            focusIndex(0);

                        }

                        break;

                    case "ArrowLeft":

                        if (
                            orientation === "vertical"
                        ) {

                            return;

                        }

                        event.preventDefault();

                        if (
                            currentIndex > 0
                        ) {

                            focusIndex(
                                currentIndex - 1,
                            );

                        } else if (
                            loop
                        ) {

                            focusIndex(last);

                        }

                        break;

                    default:

                        break;

                }

            },

            [

                currentIndex,

                focusIndex,

                items,

                loop,

                orientation,

            ],

        );

    const value =
        useMemo(

            () => ({

                items,

                register,

                unregister,

                currentIndex,

                setCurrentIndex,

                loop,

                orientation,

            }),

            [

                items,

                register,

                unregister,

                currentIndex,

                setCurrentIndex,

                loop,

                orientation,

            ],

        );

    return (

        <RovingFocusContext.Provider
            value={value}
        >

            <div
                onKeyDown={handleKeyDown}
            >

                {children}

            </div>

        </RovingFocusContext.Provider>

    );

}

export default RovingFocus;
