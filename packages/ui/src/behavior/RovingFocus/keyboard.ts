/**
 * ============================================================================
 * Ascend UI
 * Roving Focus Keyboard Engine
 * ============================================================================
 */

import type {
    KeyboardEvent,
} from "react";

import type {
    RovingDirection,
    RovingFocusItem,
    RovingOrientation,
    RovingRegistry,
} from "./RovingFocus.types";

import {
    focusItem,
    getFirstEnabledItem,
    getLastEnabledItem,
    getNextEnabledItem,
    getPreviousEnabledItem,
} from "./roving-focus.utils";

export interface HandleKeyboardOptions {

    event: KeyboardEvent<HTMLElement>;

    registry: RovingRegistry;

    currentId: string | null;

    loop: boolean;

    orientation: RovingOrientation;

    direction: RovingDirection;

    focus(id: string): void;

}

function moveTo(
    item: RovingFocusItem | undefined,
    focus: (id: string) => void,
) {

    if (!item) {
        return;
    }

    focus(item.id);
}

export function handleRovingFocusKeyDown({

    event,

    registry,

    currentId,

    loop,

    orientation,

    direction,

    focus,

}: HandleKeyboardOptions): void {

    switch (event.key) {

        case "Home":

            event.preventDefault();

            moveTo(
                getFirstEnabledItem(
                    registry,
                ),
                focus,
            );

            return;

        case "End":

            event.preventDefault();

            moveTo(
                getLastEnabledItem(
                    registry,
                ),
                focus,
            );

            return;

        case "ArrowDown":

            if (
                orientation === "horizontal"
            ) {
                return;
            }

            event.preventDefault();

            moveTo(

                getNextEnabledItem(

                    registry,

                    currentId,

                    loop,

                ),

                focus,

            );

            return;

        case "ArrowUp":

            if (
                orientation === "horizontal"
            ) {
                return;
            }

            event.preventDefault();

            moveTo(

                getPreviousEnabledItem(

                    registry,

                    currentId,

                    loop,

                ),

                focus,

            );

            return;

        case "ArrowRight":

            if (
                orientation === "vertical"
            ) {
                return;
            }

            event.preventDefault();

            moveTo(

                direction === "rtl"

                    ? getPreviousEnabledItem(

                        registry,

                        currentId,

                        loop,

                    )

                    : getNextEnabledItem(

                        registry,

                        currentId,

                        loop,

                    ),

                focus,

            );

            return;

        case "ArrowLeft":

            if (
                orientation === "vertical"
            ) {
                return;
            }

            event.preventDefault();

            moveTo(

                direction === "rtl"

                    ? getNextEnabledItem(

                        registry,

                        currentId,

                        loop,

                    )

                    : getPreviousEnabledItem(

                        registry,

                        currentId,

                        loop,

                    ),

                focus,

            );

            return;

        default:

            return;

    }

}
