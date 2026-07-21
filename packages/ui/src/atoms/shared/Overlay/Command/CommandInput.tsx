/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandInput.tsx
 *
 * Search input for the Command System.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useCallback,
} from "react";

import type {
    ChangeEvent,
} from "react";

import {
    cn,
} from "@/utils";

import {
    useCommand,
} from "./useCommand";

import type {
    CommandInputProps,
} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandInput =
forwardRef<
    HTMLInputElement,
    CommandInputProps
>(

function CommandInput(

{

    className,

    onChange,

    onValueChange,

    placeholder = "Type a command or search...",

    ...props

},

ref,

) {

    const {

        search,

        setSearch,

    } = useCommand();

    const handleChange =
        useCallback(

            (

                event: ChangeEvent<HTMLInputElement>,

            ) => {

                onChange?.(event);

                if (

                    event.defaultPrevented

                ) {

                    return;

                }

                const value =
                    event.target.value;

                setSearch(

                    value,

                );

                onValueChange?.(

                    value,

                );

            },

            [

                onChange,

                onValueChange,

                setSearch,

            ],

        );

    return (

        <div

            className={cn(

                "flex",

                "items-center",

                "border-b",

                "border-border",

                "px-3",

            )}

        >

            <input

                ref={ref}

                type="text"

                role="searchbox"

                autoComplete="off"

                autoCorrect="off"

                autoCapitalize="none"

                spellCheck={false}

                value={search}

                placeholder={placeholder}

                className={cn(

                    "flex",

                    "h-11",

                    "w-full",

                    "bg-transparent",

                    "py-3",

                    "text-sm",

                    "outline-none",

                    "placeholder:text-muted-foreground",

                    "disabled:cursor-not-allowed",

                    "disabled:opacity-50",

                    className,

                )}

                onChange={handleChange}

                {...props}

            />

        </div>

    );

},

);

CommandInput.displayName =
    "CommandInput";

export default CommandInput;
