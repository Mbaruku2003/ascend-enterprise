import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import type {
    CSSProperties,
} from "react";

import {
    computePosition,
} from "./FloatingAlgorithms";

import {
    createFloatingObserver,
} from "./FloatingObservers";

import {
    getAnchorRect,
    getElementSize,
} from "./FloatingPosition.utils";

import {
    DEFAULT_COLLISION_PADDING,
    DEFAULT_FLOATING_AUTO_UPDATE,
    DEFAULT_FLOATING_CROSS_OFFSET,
    DEFAULT_FLOATING_OFFSET,
    DEFAULT_FLOATING_PLACEMENT,
    DEFAULT_FLOATING_STRATEGY,
} from "./FloatingPosition.constants";

import {
    getViewport,
} from "./FloatingViewport";

import type {
    FloatingPosition,
    UseFloatingPositionOptions,
    UseFloatingPositionResult,
} from "./FloatingPosition.types";

export function useFloatingPosition(
    options: UseFloatingPositionOptions,
): UseFloatingPositionResult {

    const {

        anchorRef,

        virtualAnchor,

        floatingRef,

        placement = DEFAULT_FLOATING_PLACEMENT,

        offset = DEFAULT_FLOATING_OFFSET,

        crossOffset = DEFAULT_FLOATING_CROSS_OFFSET,

        strategy = DEFAULT_FLOATING_STRATEGY,

        autoUpdate = DEFAULT_FLOATING_AUTO_UPDATE,

    } = options;

    const [

        position,

        setPosition,

    ] = useState<FloatingPosition>({

        x: 0,

        y: 0,

        placement,

        strategy,

    });

    const update =
        useCallback(() => {

            const anchor =

                virtualAnchor

                    ? virtualAnchor.getBoundingClientRect()

                    : getAnchorRect(
                        anchorRef?.current,
                    );

            if (!anchor) {

                return;

            }

            const floating =
                getElementSize(
                    floatingRef.current,
                );

            const viewport =
                getViewport();

            const next =
                computePosition({

                    anchor,

                    floating,

                    placement,

                    offset,

                    crossOffset,

                    strategy,

                    viewport: {

                        width: viewport.width,

                        height: viewport.height,

                    },

                    padding:
                        DEFAULT_COLLISION_PADDING,

                });

            setPosition(next);

        }, [

            anchorRef,

            virtualAnchor,

            floatingRef,

            placement,

            offset,

            crossOffset,

            strategy,

        ]);

    useEffect(() => {

        update();

        if (

            !autoUpdate ||

            virtualAnchor

        ) {

            return;

        }

        const observer =
            createFloatingObserver({

                anchor:
                    anchorRef?.current,

                floating:
                    floatingRef.current,

                onUpdate:
                    update,

            });

        observer.start();

        return () => {

            observer.stop();

        };

    }, [

        anchorRef,

        virtualAnchor,

        floatingRef,

        autoUpdate,

        update,

    ]);

    const style =
        useMemo<CSSProperties>(() => ({

            position:
                strategy,

            top:
                position.y,

            left:
                position.x,

        }), [

            position,

            strategy,

        ]);

    return {

        style,

        position,

        update,

    };

}

export default useFloatingPosition;
