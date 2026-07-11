/**
 * ============================================================================
 * Ascend UI
 * Drawer
 * ============================================================================
 */

import {
    useMemo,
    useRef,
} from "react";

import { useId } from "@/hooks";

import { useControllableState } from "@/hooks";

import DrawerContext from "./DrawerContext";

import {
    DEFAULT_DRAWER_OPEN,
    DEFAULT_DRAWER_PLACEMENT,
    DEFAULT_DRAWER_PORTAL,
    DEFAULT_DRAWER_SIZE,
} from "./drawer.constants";

import type {
    DrawerProps,
} from "./Drawer.types";

export function Drawer({

    children,

    open,

    defaultOpen =
        DEFAULT_DRAWER_OPEN,

    onOpenChange,

    portal =
        DEFAULT_DRAWER_PORTAL,

    placement =
        DEFAULT_DRAWER_PLACEMENT,

    size =
        DEFAULT_DRAWER_SIZE,

}: DrawerProps) {

    const triggerRef =
        useRef<HTMLElement>(null);

    const contentRef =
        useRef<HTMLDivElement>(null);

    const titleId =
        useId();

    const descriptionId =
        useId();

    const [
        isOpen,
        setOpen,
    ] =
        useControllableState({

            value: open,

            defaultValue:
                defaultOpen,

            onChange:
                onOpenChange,

        });

    const value =
        useMemo(
            () => ({

                open: isOpen,

                setOpen,

                portal,

                placement,

                size,

                triggerRef,

                contentRef,

                titleId,

                descriptionId,

                openDrawer() {

                    setOpen(true);

                },

                closeDrawer() {

                    setOpen(false);

                },

                toggleDrawer() {

                    setOpen(
                        previous =>
                            !previous,
                    );

                },

            }),
            [

                isOpen,

                setOpen,

                portal,

                placement,

                size,

                titleId,

                descriptionId,

            ],
        );

    return (

        <DrawerContext.Provider
            value={value}
        >

            {children}

        </DrawerContext.Provider>

    );

}

export default Drawer;
