/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandItem.tsx
 *
 * Individual command item.
 *
 * Registers itself with the CommandCollection and participates in keyboard
 * navigation, searching and selection.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useCallback,
    useEffect,
} from "react";

import type {
    KeyboardEvent,
    MouseEvent,
} from "react";

import {
    cn,
    composeRefs,
} from "@/utils";

import {
    useCommand,
} from "./useCommand";

import type {
    CommandItemProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandItem =
forwardRef<
    HTMLDivElement,
    CommandItemProps
>(

function CommandItem(

{

    value,

    keywords,

    icon,

    shortcut,

    disabled = false,

    className,

    children,

    onClick,

    onKeyDown,

    onSelect,

    ...props

},

forwardedRef,

) {

    const {

        collection,

        selected,

        setSelected,

        closeCommand,

    } = useCommand();

    /* ---------------------------------------------------------------------- */
    /* Registration                                                           */
    /* ---------------------------------------------------------------------- */

    useEffect(() => {

        collection.register({

            id: value,

            value,

            label: children,

            keywords,

            disabled,

        });

        return () => {

            collection.unregister(

                value,

            );

        };

    }, [

        collection,

        value,

        children,

        keywords,

        disabled,

    ]);

    /* ---------------------------------------------------------------------- */
    /* State                                                                  */
    /* ---------------------------------------------------------------------- */

    const active =
        selected === value;

    /* ---------------------------------------------------------------------- */
    /* Selection                                                              */
    /* ---------------------------------------------------------------------- */

    const select =
        useCallback(() => {

            if (disabled) {

                return;

            }

            setSelected(

                value,

            );

            onSelect?.(

                value,

            );

            closeCommand();

        }, [

            disabled,

            value,

            setSelected,

            onSelect,

            closeCommand,

        ]);

    /* ---------------------------------------------------------------------- */
    /* Mouse                                                                  */
    /* ---------------------------------------------------------------------- */

    const handleClick =
        useCallback(

            (

                event: MouseEvent<HTMLDivElement>,

            ) => {

                onClick?.(

                    event,

                );

                if (

                    event.defaultPrevented

                ) {

                    return;

                }

                select();

            },

            [

                onClick,

                select,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Keyboard                                                               */
    /* ---------------------------------------------------------------------- */

    const handleKeyDown =
        useCallback(

            (

                event: KeyboardEvent<HTMLDivElement>,

            ) => {

                onKeyDown?.(

                    event,

                );

                if (

                    event.defaultPrevented

                ) {

                    return;

                }

                switch (

                    event.key

                ) {

                    case "Enter":

                    case " ": {

                        event.preventDefault();

                        select();

                        break;

                    }

                }

            },

            [

                onKeyDown,

                select,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <div

            ref={composeRefs(

                forwardedRef,

            )}

            role="option"

            tabIndex={

                disabled

                    ? -1

                    : 0

            }

            aria-selected={

                active

            }

            aria-disabled={

                disabled ||

                undefined

            }

            data-selected={

                active

                    ? ""

                    : undefined

            }

            data-disabled={

                disabled

                    ? ""

                    : undefined

            }

            className={cn(

                "flex",

                "cursor-default",

                "select-none",

                "items-center",

                "gap-2",

                "rounded-md",

                "px-3",

                "py-2",

                "text-sm",

                "outline-none",

                "transition-colors",

                "focus:bg-accent",

                "focus:text-accent-foreground",

                !disabled &&

                    "hover:bg-accent hover:text-accent-foreground",

                active &&

                    "bg-accent font-medium",

                disabled &&

                    "pointer-events-none opacity-50",

                className,

            )}

            onClick={handleClick}

            onKeyDown={handleKeyDown}

            {...props}

        >

            {icon && (

                <span

                    className="flex shrink-0 items-center"

                >

                    {icon}

                </span>

            )}

            <span

                className="flex-1 truncate"

            >

                {children}

            </span>

            {shortcut && (

                <span

                    className="ml-auto text-xs text-muted-foreground"

                >

                    {shortcut}

                </span>

            )}

        </div>

    );

},

);

CommandItem.displayName =
    "CommandItem";

export default CommandItem;
