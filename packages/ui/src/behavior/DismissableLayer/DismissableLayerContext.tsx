/**
 * ============================================================================
 * Ascend UI
 * Dismissable Layer Context
 * ============================================================================
 */

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

export interface DismissableLayerContextValue {

    registerLayer(
        element: HTMLElement,
    ): void;

    unregisterLayer(
        element: HTMLElement,
    ): void;

    isTopLayer(
        element: HTMLElement,
    ): boolean;

    getTopLayer():
        | HTMLElement
        | undefined;

    readonly layers: readonly HTMLElement[];

    readonly layerCount: number;

    disableOutsidePointerEvents: boolean;

    setDisableOutsidePointerEvents(
        value: boolean,
    ): void;
}

const DismissableLayerContext =
    createContext<
        DismissableLayerContextValue | undefined
    >(undefined);

export function DismissableLayerProvider({

    children,

}: {

    children: ReactNode;

}) {

    const [

        layers,

        setLayers,

    ] =
        useState<
            HTMLElement[]
        >([]);

    const [

        disableOutsidePointerEvents,

        setDisableOutsidePointerEvents,

    ] =
        useState(false);

    const registerLayer =
        useCallback(

            (
                element: HTMLElement,
            ) => {

                setLayers(
                    previous => {

                        if (
                            previous.includes(
                                element,
                            )
                        ) {
                            return previous;
                        }

                        return [
                            ...previous,
                            element,
                        ];

                    },
                );

            },

            [],
        );

    const unregisterLayer =
        useCallback(

            (
                element: HTMLElement,
            ) => {

                setLayers(
                    previous =>
                        previous.filter(
                            layer =>
                                layer !==
                                element,
                        ),
                );

            },

            [],
        );

    const getTopLayer =
        useCallback(
            () =>
                layers[
                    layers.length - 1
                ],
            [layers],
        );

    const isTopLayer =
        useCallback(

            (
                element: HTMLElement,
            ) =>
                getTopLayer() ===
                element,

            [getTopLayer],
        );

    const value =
        useMemo(
            () => ({

                registerLayer,

                unregisterLayer,

                getTopLayer,

                isTopLayer,

                layers,

                layerCount:
                    layers.length,

                disableOutsidePointerEvents,

                setDisableOutsidePointerEvents,

            }),
            [

                registerLayer,

                unregisterLayer,

                getTopLayer,

                isTopLayer,

                layers,

                disableOutsidePointerEvents,

            ],
        );

    return (

        <DismissableLayerContext.Provider
            value={value}
        >

            {children}

        </DismissableLayerContext.Provider>

    );

}

export function useDismissableLayerContext() {

    const context =
        useContext(
            DismissableLayerContext,
        );

    if (!context) {

        throw new Error(
            "DismissableLayer must be inside DismissableLayerProvider.",
        );

    }

    return context;

}

export default DismissableLayerContext;
