/**
 * ============================================================================
 * Ascend UI
 * useRovingFocus
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

import type {
    RovingFocusItem,
    RovingRegistry,
} from "./RovingFocus.types";

export interface UseRovingFocusReturn {

    registry: RovingRegistry;

    currentId: string | null;

    setCurrentId(
        id: string | null,
    ): void;

    register(
        item: RovingFocusItem,
    ): void;

    unregister(
        id: string,
    ): void;

    getItems(): RovingFocusItem[];

    getCurrentItem():
        | RovingFocusItem
        | undefined;

    focus(
        id: string,
    ): void;

}

export function useRovingFocus():
UseRovingFocusReturn {

    /**
     * Registry.
     *
     * Stored in a ref because
     * registration should not
     * trigger unnecessary renders.
     */
    const registry =
        useRef<RovingRegistry>(
            new Map(),
        );

    /**
     * Active item.
     */
    const [
        currentId,
        setCurrentId,
    ] =
    useState<
        string | null
    >(null);

    /**
     * Register.
     */
    const register =
        useCallback(

            (
                item: RovingFocusItem,
            ) => {

                registry.current.set(
                    item.id,
                    item,
                );

            },

            [],
        );

    /**
     * Unregister.
     */
    const unregister =
        useCallback(

            (
                id: string,
            ) => {

                registry.current.delete(
                    id,
                );

            },

            [],
        );

    /**
     * Ordered items.
     */
    const getItems =
        useCallback(

            () =>
                Array.from(
                    registry.current.values(),
                ),

            [],
        );

    /**
     * Current item.
     */
    const getCurrentItem =
        useCallback(

            () => {

                if (
                    !currentId
                ) {

                    return;

                }

                return registry.current.get(
                    currentId,
                );

            },

            [

                currentId,

            ],

        );

    /**
     * Focus helper.
     */
    const focus =
        useCallback(

            (
                id: string,
            ) => {

                const item =
                    registry.current.get(
                        id,
                    );

                if (
                    !item ||
                    item.disabled
                ) {

                    return;

                }

                item.ref.current?.focus();

                setCurrentId(
                    id,
                );

            },

            [],
        );

    return useMemo(

        () => ({

            registry:
                registry.current,

            currentId,

            setCurrentId,

            register,

            unregister,

            getItems,

            getCurrentItem,

            focus,

        }),

        [

            currentId,

            register,

            unregister,

            getItems,

            getCurrentItem,

            focus,

        ],

    );

}
