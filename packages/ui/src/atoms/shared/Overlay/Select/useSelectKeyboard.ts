/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: useSelectKeyboard.ts
 *
 * Keyboard navigation for Select.
 *
 * Navigation logic is delegated to SelectCollection.
 *
 * ============================================================================
 */

import {
    useCallback,
} from "react";

import {
    useSelect,
} from "./useSelect";

export function useSelectKeyboard() {

    const {

        value,

        setValue,

        setOpen,

        collection,

    } = useSelect();

    const selectItem =
        useCallback(

            (
                next?: {
                    value: string;
                },
            ) => {

                if (!next) {

                    return;

                }

                setValue(
                    next.value,
                );

                collection.scrollIntoView(
                    next.value,
                );

            },

            [

                collection,

                setValue,

            ],

        );

    const onKeyDown =
        useCallback(

            (
                event: React.KeyboardEvent,
            ) => {

                switch (event.key) {

                    case "ArrowDown": {

                        event.preventDefault();

                        selectItem(

                            value

                                ? collection.next(value)

                                : collection.first(),

                        );

                        break;

                    }

                    case "ArrowUp": {

                        event.preventDefault();

                        selectItem(

                            value

                                ? collection.previous(value)

                                : collection.last(),

                        );

                        break;

                    }

                    case "Home": {

                        event.preventDefault();

                        selectItem(

                            collection.first(),

                        );

                        break;

                    }

                    case "End": {

                        event.preventDefault();

                        selectItem(

                            collection.last(),

                        );

                        break;

                    }

                    case "Enter":

                    case " ": {

                        event.preventDefault();

                        setOpen(false);

                        break;

                    }

                    case "Escape": {

                        event.preventDefault();

                        setOpen(false);

                        break;

                    }

                    default:

                        break;

                }

            },

            [

                value,

                collection,

                selectItem,

                setOpen,

            ],

        );

    return {

        onKeyDown,

    };

}

export default useSelectKeyboard;
