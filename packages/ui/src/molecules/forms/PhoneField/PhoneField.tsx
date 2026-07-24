/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: PhoneField.tsx
 *
 * Enterprise PhoneField component.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState,
    useId,
    useCallback,
} from "react";

import {
    cn,
} from "../../../lib";

import type {
    PhoneCountry,
    PhoneFieldProps,
} from "./PhoneField.types";

import {
    usePhoneField,
} from "./usePhoneField";

import {
    CountryButton,
} from "./CountryButton";

import {
    CountrySearch,
} from "./CountrySearch";

import {
    CountryList,
} from "./CountryList";

import {
    PhoneInput,
} from "./PhoneInput";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const PhoneField = forwardRef<

    HTMLDivElement,

    PhoneFieldProps

>(

    (

        {

            className,

            disabled,

            placeholder,

            ...props

        },

        forwardedRef,

    ) => {

        /* ------------------------------------------------------------------ */
        /* PhoneField Logic                                                   */
        /* ------------------------------------------------------------------ */

        const {

            country,

            countries,

            value,

            nationalNumber,

            search,

            filteredCountries,

            internationalNumber,

            digits,

            isPossible,

            isComplete,

            setValue,

            setCountry,

            setSearch,

            clear,

            resetSearch,

            selectCountryByCode,

        } = usePhoneField(

            props,

        );

        /* ------------------------------------------------------------------ */
        /* State                                                              */
        /* ------------------------------------------------------------------ */

        const [

            open,

            setOpen,

        ] = useState(

            false,

        );

        const [

            highlightedIndex,

            setHighlightedIndex,

        ] = useState(

            0,

        );

        /* ------------------------------------------------------------------ */
        /* IDs                                                                */
        /* ------------------------------------------------------------------ */

        const listboxId =
            useId();

        /* ------------------------------------------------------------------ */
        /* Refs                                                               */
        /* ------------------------------------------------------------------ */

        const rootRef =
            useRef<HTMLDivElement>(null);

        const searchRef =
            useRef<HTMLInputElement>(null);

        const inputRef =
            useRef<HTMLInputElement>(null);

        /* ------------------------------------------------------------------ */
        /* Derived                                                            */
        /* ------------------------------------------------------------------ */

        const highlightedCountry =
            useMemo(

                () =>

                    filteredCountries[

                        highlightedIndex

                    ],

                [

                    filteredCountries,

                    highlightedIndex,

                ],

            );

        const hasResults =

            filteredCountries.length >

            0;

        const canNavigate =

            open &&

            hasResults;

        const maxIndex =

            Math.max(

                filteredCountries.length - 1,

                0,

            );
        /* ------------------------------------------------------------------ */
        /* Effects                                                            */
        /* ------------------------------------------------------------------ */

        useEffect(

            () => {

                if (

                    !open

                ) {

                    return;

                }

                requestAnimationFrame(

                    () =>

                        searchRef.current?.focus(),

                );

            },

            [

                open,

            ],

        );

        useEffect(

            () => {

                function handleClickOutside(

                    event: MouseEvent,

                ) {

                    if (

                        rootRef.current &&

                        !rootRef.current.contains(

                            event.target as Node,

                        )

                    ) {

                        setOpen(

                            false,

                        );

                    }

                }

                document.addEventListener(

                    "mousedown",

                    handleClickOutside,

                );

                return () =>

                    document.removeEventListener(

                        "mousedown",

                        handleClickOutside,

                    );

            },

            [],

        );

        useEffect(

            () => {

                if (

                    highlightedIndex >

                    maxIndex

                ) {

                    setHighlightedIndex(

                        maxIndex,

                    );

                }

            },

            [

                highlightedIndex,

                maxIndex,

            ],

        );

        /* ------------------------------------------------------------------ */
        /* Handlers                                                           */
        /* ------------------------------------------------------------------ */

        const handleOpen =

            useCallback(

                () => {

                    if (

                        disabled

                    ) {

                        return;

                    }

                    setOpen(

                        true,

                    );

                },

                [

                    disabled,

                ],

            );

        const handleClose =

            useCallback(

                () => {

                    setOpen(

                        false,

                    );

                    resetSearch();

                },

                [

                    resetSearch,

                ],

            );

        const handleToggle =

            useCallback(

                () => {

                    if (

                        open

                    ) {

                        handleClose();

                    } else {

                        handleOpen();

                    }

                },

                [

                    open,

                    handleOpen,

                    handleClose,

                ],

            );

        const handleCountrySelect =

            useCallback(

                (

                    nextCountry: PhoneCountry,

                ) => {

                    setCountry(

                        nextCountry,

                    );

                    handleClose();

                    requestAnimationFrame(

                        () =>

                            inputRef.current?.focus(),

                    );

                },

                [

                    setCountry,

                    handleClose,

                ],

            );

        const handleKeyDown =

            useCallback(

                (

                    event: React.KeyboardEvent<HTMLDivElement>,

                ) => {

                    switch (

                        event.key

                    ) {

                        case "ArrowDown":

                            event.preventDefault();

                            if (

                                !open

                            ) {

                                handleOpen();

                                return;

                            }

                            if (

                                canNavigate

                            ) {

                                setHighlightedIndex(

                                    (

                                        previous,

                                    ) =>

                                        Math.min(

                                            previous + 1,

                                            maxIndex,

                                        ),

                                );

                            }

                            break;

                        case "ArrowUp":

                            event.preventDefault();

                            if (

                                canNavigate

                            ) {

                                setHighlightedIndex(

                                    (

                                        previous,

                                    ) =>

                                        Math.max(

                                            previous - 1,

                                            0,

                                        ),

                                );

                            }

                            break;

                        case "Enter":

                            if (

                                open &&

                                highlightedCountry

                            ) {

                                event.preventDefault();

                                handleCountrySelect(

                                    highlightedCountry,

                                );

                            }

                            break;

                        case "Escape":

                            if (

                                open

                            ) {

                                event.preventDefault();

                                handleClose();

                            }

                            break;

                        default:

                            break;

                    }

                },

                [

                    open,

                    canNavigate,

                    maxIndex,

                    highlightedCountry,

                    handleCountrySelect,

                    handleOpen,

                    handleClose,

                ],

            );

        /* ------------------------------------------------------------------ */
        /* Render                                                             */
        /* ------------------------------------------------------------------ */

        return (

            <div

                ref={(node) => {

                    rootRef.current = node;

                    if (

                        typeof forwardedRef ===

                        "function"

                    ) {

                        forwardedRef(

                            node,

                        );

                    } else if (

                        forwardedRef

                    ) {

                        forwardedRef.current =

                            node;

                    }

                }}

                className={cn(

                    "relative",

                    "w-full",

                    className,

                )}

                role="combobox"

                aria-expanded={open}

                aria-haspopup="listbox"

                aria-controls={listboxId}

                aria-autocomplete="list"

                onKeyDown={handleKeyDown}

            >

                {/* ---------------------------------------------------------- */}
                {/* Control                                                   */}
                {/* ---------------------------------------------------------- */}

                <div

                    className={cn(

                        "flex",

                        "w-full",

                        "items-center",

                        "overflow-hidden",

                        "rounded-md",

                        "border",

                        "border-input",

                        "bg-background",

                        "transition-all",

                        "focus-within:ring-2",

                        "focus-within:ring-ring",

                        disabled &&

                            "opacity-50",

                    )}

                >

                    <CountryButton

                        country={country}

                        open={open}

                        disabled={disabled}

                        onClick={handleToggle}

                    />

                    <PhoneInput

                        ref={inputRef}

                        value={value}

                        placeholder={placeholder}

                        disabled={disabled}

                        aria-invalid={

                            !isPossible

                        }

                        onChange={setValue}

                    />

                </div>

                {/* ---------------------------------------------------------- */}
                {/* Dropdown                                                  */}
                {/* ---------------------------------------------------------- */}

                {

                    open && (

                        <div

                            className={cn(

                                "absolute",

                                "left-0",

                                "right-0",

                                "top-full",

                                "z-50",

                                "mt-2",

                                "overflow-hidden",

                                "rounded-md",

                                "border",

                                "border-border",

                                "bg-popover",

                                "shadow-lg",

                            )}

                        >

                            {/* ---------------------------------------------- */}
                            {/* Search                                         */}
                            {/* ---------------------------------------------- */}

                            <div

                                className={cn(

                                    "border-b",

                                    "border-border",

                                    "p-2",

                                )}

                            >

                                <CountrySearch

                                    ref={searchRef}

                                    value={search}

                                    onChange={setSearch}

                                    onClear={resetSearch}

                                />

                            </div>

                            {/* ---------------------------------------------- */}
                            {/* Country List                                   */}
                            {/* ---------------------------------------------- */}

                            <CountryList

                                id={listboxId}

                                countries={

                                    filteredCountries

                                }

                                selectedCountry={

                                    country

                                }

                                onSelect={

                                    handleCountrySelect

                                }

                            />

                        </div>

                    )

                }

                {/* ---------------------------------------------------------- */}
                {/* Validation (optional)                                     */}
                {/* ---------------------------------------------------------- */}

                {

                    value.length >

                        0 && (

                        <div

                            className={cn(

                                "mt-1",

                                "text-xs",

                                isComplete

                                    ? "text-green-600"

                                    : isPossible

                                      ? "text-amber-600"

                                      : "text-red-600",

                            )}

                        >

                            {

                                isComplete

                                    ? "Valid phone number"

                                    : isPossible

                                      ? "Phone number appears incomplete"

                                      : "Invalid phone number"

                            }

                        </div>

                    )

                }
            </div>

        );

    },

);

PhoneField.displayName =
    "PhoneField";

export default PhoneField;
