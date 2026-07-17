/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: useMenu.ts
 *
 * Shared state management for MenuRoot.
 *
 * Responsibilities:
 *
 * • Controlled / uncontrolled state
 * • Refs
 * • Open / Close / Toggle
 * • Context value construction
 *
 * ============================================================================
 */

import {
    useMemo,
    useRef,
} from "react";

import {
    useControllableState,
} from "@/hooks";

import {
    DEFAULT_MENU_DIRECTION,
    DEFAULT_MENU_LOOP,
    DEFAULT_MENU_MODAL,
    DEFAULT_MENU_OPEN,
    DEFAULT_MENU_ORIENTATION,
} from "./Menu.constants";

import type {
    MenuContextValue,
    MenuRootProps,
} from "./Menu.types";

export function useMenu(
    props: MenuRootProps,
): MenuContextValue {

    const {

        open,

        defaultOpen =
            DEFAULT_MENU_OPEN,

        onOpenChange,

        modal =
            DEFAULT_MENU_MODAL,

        loop =
            DEFAULT_MENU_LOOP,

        orientation =
            DEFAULT_MENU_ORIENTATION,

        dir =
            DEFAULT_MENU_DIRECTION,

    } = props;

    const triggerRef =
        useRef<HTMLElement>(null);

    const contentRef =
        useRef<HTMLDivElement>(null);

    const [

        isOpen,

        setOpen,

    ] = useControllableState({

        value: open,

        defaultValue:
            defaultOpen,

        onChange:
            onOpenChange,

    });

    const value =
        useMemo<MenuContextValue>(() => ({

            open: isOpen,

            setOpen,

            modal,

            loop,

            orientation,

            dir,

            triggerRef,

            contentRef,

            openMenu() {

                setOpen(true);

            },

            closeMenu() {

                setOpen(false);

            },

            toggleMenu() {

                setOpen(

                    previous => !previous,

                );

            },

        }), [

            isOpen,

            setOpen,

            modal,

            loop,

            orientation,

            dir,

        ]);

    return value;

}

export default useMenu;
