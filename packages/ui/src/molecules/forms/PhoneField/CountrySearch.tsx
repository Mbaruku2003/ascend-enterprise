/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: CountrySearch.tsx
 *
 * Search input for filtering countries.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    Search,
    X,
} from "lucide-react";

import {
    cn,
} from "../../../lib";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface CountrySearchProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "value" | "onChange"
    > {

    value: string;

    onChange(
        value: string,
    ): void;

    onClear?(): void;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CountrySearch = forwardRef<

    HTMLInputElement,

    CountrySearchProps

>(

    (

        {

            value,

            onChange,

            onClear,

            className,

            placeholder = "Search countries...",

            disabled,

            ...props

        },

        ref,

    ) => {

        return (

            <div

                className={cn(

                    "relative",

                    "w-full",

                )}

            >

                {/* ---------------------------------------------------------- */}
                {/* Search Icon                                                */}
                {/* ---------------------------------------------------------- */}

                <Search

                    className={cn(

                        "pointer-events-none",

                        "absolute",

                        "left-3",

                        "top-1/2",

                        "-translate-y-1/2",

                        "h-4",

                        "w-4",

                        "text-muted-foreground",

                    )}

                />

                {/* ---------------------------------------------------------- */}
                {/* Input                                                      */}
                {/* ---------------------------------------------------------- */}

                <input

                    ref={ref}

                    type="text"

                    autoComplete="off"

                    spellCheck={false}

                    disabled={disabled}

                    value={value}

                    placeholder={placeholder}

                    className={cn(

                        "h-10",

                        "w-full",

                        "rounded-md",

                        "border",

                        "border-input",

                        "bg-background",

                        "pl-10",

                        "pr-10",

                        "text-sm",

                        "outline-none",

                        "transition-colors",

                        "placeholder:text-muted-foreground",

                        "focus:border-ring",

                        "focus:ring-2",

                        "focus:ring-ring/20",

                        "disabled:cursor-not-allowed",

                        "disabled:opacity-50",

                        className,

                    )}

                    onChange={(event) =>

                        onChange(

                            event.target.value,

                        )

                    }

                    {...props}

                />

                {/* ---------------------------------------------------------- */}
                {/* Clear                                                      */}
                {/* ---------------------------------------------------------- */}

                {!!value && (

                    <button

                        type="button"

                        tabIndex={-1}

                        aria-label="Clear search"

                        className={cn(

                            "absolute",

                            "right-2",

                            "top-1/2",

                            "-translate-y-1/2",

                            "rounded",

                            "p-1",

                            "text-muted-foreground",

                            "transition-colors",

                            "hover:bg-accent",

                            "hover:text-foreground",

                        )}

                        onClick={() => {

                            onClear?.();

                            onChange("");

                        }}

                    >

                        <X

                            className="h-4 w-4"

                        />

                    </button>

                )}

            </div>

        );

    },

);

CountrySearch.displayName =
    "CountrySearch";

export default CountrySearch;
