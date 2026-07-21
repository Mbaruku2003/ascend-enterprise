/**
 * ============================================================================
 * Ascend Enterprise UI
 * Keyboard
 * ============================================================================
 */

import {

    useCallback,

} from "react";

import {

    useCombobox,

} from "./useCombobox";

export function useComboboxKeyboard() {

    const {

        value,

        setValue,

        setOpen,

        collection,

    } = useCombobox();

    const onKeyDown =
        useCallback(

            (

                event: React.KeyboardEvent,

            ) => {

                switch (

                    event.key

                ) {

                    case "ArrowDown": {

                        event.preventDefault();

                        const next =
                            value

                                ? collection.next(

                                      value,

                                      true,

                                  )

                                : collection.first();

                        if (

                            next

                        ) {

                            setValue(

                                next.value,

                            );

                            collection.scrollIntoView(

                                next.value,

                            );

                        }

                        break;

                    }

                    case "ArrowUp": {

                        event.preventDefault();

                        const previous =
                            value

                                ? collection.previous(

                                      value,

                                      true,

                                  )

                                : collection.last();

                        if (

                            previous

                        ) {

                            setValue(

                                previous.value,

                            );

                            collection.scrollIntoView(

                                previous.value,

                            );

                        }

                        break;

                    }

                    case "Escape":

                        setOpen(false);

                        break;

                }

            },

            [

                collection,

                value,

                setOpen,

                setValue,

            ],

        );

    return {

        onKeyDown,

    };

}

export default useComboboxKeyboard;
