/**
 * ============================================================================
 * Ascend UI
 * Roving Focus Item
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    useEffect,
    useMemo,
    useRef,
    type FocusEvent,
    type ReactElement,
} from "react";

import { useId } from "../../hooks";

import { useMergedRefs } from "../../hooks";

import { useRovingFocusContext } from "./RovingFocusContext";

import type {
    RovingFocusItemProps,
} from "./RovingFocus.types";

export const RovingFocusItem =
forwardRef<
HTMLElement,
RovingFocusItemProps
>(
(
{
    children,
    id,
    disabled = false,
    textValue,
},
forwardedRef,
) => {

    const generatedId =
        useId();

    const itemId =
        id ?? generatedId;

    const internalRef =
        useRef<HTMLElement>(null);

    const ref =
        useMergedRefs(
            forwardedRef,
            internalRef,
        );

    const {

        register,

        unregister,

        currentId,

        setCurrentId,

    } =
    useRovingFocusContext();

    /**
     * Register once.
     */
    const item =
        useMemo(
            () => ({

                id: itemId,

                ref: internalRef,

                disabled,

                textValue,

            }),

            [

                itemId,

                disabled,

                textValue,

            ],

        );

    useEffect(() => {

        register(
            item,
        );

        return () => {

            unregister(
                itemId,
            );

        };

    }, [

        register,

        unregister,

        item,

        itemId,

    ]);

    if (
        !isValidElement(children)
    ) {

        return null;

    }

    return cloneElement(

        children as ReactElement,

        {

            ref,

            tabIndex:
                disabled
                    ? -1
                    : currentId === itemId
                    ? 0
                    : -1,

            onFocus(
                event: FocusEvent<HTMLElement>,
            ) {

                children.props
                    ?.onFocus?.(
                        event,
                    );

                if (
                    !disabled
                ) {

                    setCurrentId(
                        itemId,
                    );

                }

            },

        },

    );

},
);

RovingFocusItem.displayName =
"RovingFocusItem";

export default RovingFocusItem;
