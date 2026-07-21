/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: useCommandKeyboard.ts
 *
 * Keyboard navigation for the Command system.
 *
 * Handles:
 * • Arrow navigation
 * • Home / End
 * • Enter selection
 * • Escape closing
 *
 * ============================================================================
 */

import {
    useCallback,
} from "react";

import {
    useCommand,
} from "./useCommand";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useCommandKeyboard() {

    const {

        collection,

        selected,

        setSelected,

        activeIndex,

        setActiveIndex,

        closeCommand,

    } = useCommand();

    /* ---------------------------------------------------------------------- */
    /* Navigation                                                             */
    /* ---------------------------------------------------------------------- */

    const onKeyDown =
        useCallback(

            (

                event: React.KeyboardEvent,

            ) => {

                const items =
                    collection.getEnabled();

                switch (

                    event.key

                ) {

                    /* ------------------------------------------------------ */
                    /* Down                                                   */
                    /* ------------------------------------------------------ */

                    case "ArrowDown": {

                        event.preventDefault();

                        if (

                            items.length === 0

                        ) {

                            return;

                        }

                        const nextIndex =
                            activeIndex <
                            items.length - 1

                                ? activeIndex + 1

                                : 0;

                        const item =
                            items[nextIndex];

                        setActiveIndex(

                            nextIndex,

                        );

                        setSelected(

                            item.value,

                        );

                        collection.scrollIntoView(

                            item.value,

                        );

                        break;

                    }

                    /* ------------------------------------------------------ */
                    /* Up                                                     */
                    /* ------------------------------------------------------ */

                    case "ArrowUp": {

                        event.preventDefault();

                        if (

                            items.length === 0

                        ) {

                            return;

                        }

                        const previousIndex =
                            activeIndex > 0

                                ? activeIndex - 1

                                : items.length - 1;

                        const item =
                            items[previousIndex];

                        setActiveIndex(

                            previousIndex,

                        );

                        setSelected(

                            item.value,

                        );

                        collection.scrollIntoView(

                            item.value,

                        );

                        break;

                    }

                    /* ------------------------------------------------------ */
                    /* Home                                                   */
                    /* ------------------------------------------------------ */

                    case "Home": {

                        event.preventDefault();

                        const first =
                            items[0];

                        if (!first) {

                            return;

                        }

                        setActiveIndex(0);

                        setSelected(

                            first.value,

                        );

                        collection.scrollIntoView(

                            first.value,

                        );

                        break;

                    }

                    /* ------------------------------------------------------ */
                    /* End                                                    */
                    /* ------------------------------------------------------ */

                    case "End": {

                        event.preventDefault();

                        const last =
                            items[
                                items.length - 1
                            ];

                        if (!last) {

                            return;

                        }

                        setActiveIndex(

                            items.length - 1,

                        );

                        setSelected(

                            last.value,

                        );

                        collection.scrollIntoView(

                            last.value,

                        );

                        break;

                    }

                    /* ------------------------------------------------------ */
                    /* Enter                                                  */
                    /* ------------------------------------------------------ */

                    case "Enter": {

                        if (!selected) {

                            return;

                        }

                        const item =
                            collection.get(

                                selected,

                            );

                        if (

                            item?.disabled

                        ) {

                            return;

                        }

                        event.preventDefault();

                        item?.ref?.click();

                        break;

                    }

                    /* ------------------------------------------------------ */
                    /* Escape                                                 */
                    /* ------------------------------------------------------ */

                    case "Escape": {

                        event.preventDefault();

                        closeCommand();

                        break;

                    }

                    default:

                        break;

                }

            },

            [

                collection,

                selected,

                activeIndex,

                setSelected,

                setActiveIndex,

                closeCommand,

            ],

        );

    return {

        onKeyDown,

    };

}

export default useCommandKeyboard;
