/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: ComboboxRoot.tsx
 *
 * Root provider for the Combobox component.
 *
 * Responsibilities
 *  • Controlled / uncontrolled value
 *  • Controlled / uncontrolled open state
 *  • Query state
 *  • Collection ownership
 *  • Context provider
 *
 * ============================================================================
 */

import {
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

import type {
    PropsWithChildren,
} from "react";

import {
    ComboboxProvider,
} from "./ComboboxContext";

import type {
    ComboboxRootProps,
} from "./Combobox.types";

import {
    SelectCollection,
} from "../Select/SelectCollection";

import {
    DEFAULT_FLOATING_OFFSET,
    DEFAULT_FLOATING_PLACEMENT,
} from "../Floating/FloatingPosition.constants";

export function ComboboxRoot({

    children,

    value: controlledValue,

    defaultValue,

    onValueChange,

    open: controlledOpen,

    defaultOpen = false,

    onOpenChange,

    placement = DEFAULT_FLOATING_PLACEMENT,

    offset = DEFAULT_FLOATING_OFFSET,

    portal = true,

    disabled = false,

    readOnly = false,

    filterMode = "contains",

}: PropsWithChildren<ComboboxRootProps>) {

    /* ---------------------------------------------------------------------- */
    /* Value                                                                  */
    /* ---------------------------------------------------------------------- */

    const [

        uncontrolledValue,

        setUncontrolledValue,

    ] = useState<string | undefined>(

        defaultValue,

    );

    const value =
        controlledValue ??
        uncontrolledValue;

    const setValue =
        useCallback(

            (
                next: string,
            ) => {

                if (

                    controlledValue ===
                    undefined

                ) {

                    setUncontrolledValue(
                        next,
                    );

                }

                onValueChange?.(
                    next,
                );

            },

            [

                controlledValue,

                onValueChange,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Open                                                                   */
    /* ---------------------------------------------------------------------- */

    const [

        uncontrolledOpen,

        setUncontrolledOpen,

    ] = useState(

        defaultOpen,

    );

    const open =
        controlledOpen ??
        uncontrolledOpen;

    const setOpen =
        useCallback(

            (
                next: boolean,
            ) => {

                if (

                    controlledOpen ===
                    undefined

                ) {

                    setUncontrolledOpen(
                        next,
                    );

                }

                onOpenChange?.(
                    next,
                );

            },

            [

                controlledOpen,

                onOpenChange,

            ],

        );

    /* ---------------------------------------------------------------------- */
    /* Query                                                                  */
    /* ---------------------------------------------------------------------- */

    const [

        query,

        setQuery,

    ] = useState("");

    /* ---------------------------------------------------------------------- */
    /* Refs                                                                   */
    /* ---------------------------------------------------------------------- */

    const triggerRef =
        useRef<HTMLElement>(null);

    const inputRef =
        useRef<HTMLInputElement>(null);

    const contentRef =
        useRef<HTMLDivElement>(null);

    /* ---------------------------------------------------------------------- */
    /* Collection                                                             */
    /* ---------------------------------------------------------------------- */

    const collection =
        useMemo(

            () => new SelectCollection(),

            [],

        );

    /* ---------------------------------------------------------------------- */
    /* Context                                                                */
    /* ---------------------------------------------------------------------- */

    const context =
        useMemo(

            () => ({

                value,

                setValue,

                query,

                setQuery,

                open,

                setOpen,

                triggerRef,

                inputRef,

                contentRef,

                placement,

                offset,

                portal,

                disabled,

                readOnly,

                filterMode,

                collection,

            }),

            [

                value,

                setValue,

                query,

                open,

                setOpen,

                placement,

                offset,

                portal,

                disabled,

                readOnly,

                filterMode,

                collection,

            ],

        );

    return (

        <ComboboxProvider
            value={context}
        >

            {children}

        </ComboboxProvider>

    );

}

export default ComboboxRoot;
