/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuSub.tsx
 *
 * Root component for nested menus.
 *
 * Responsibilities:
 *
 * • Controlled / uncontrolled state
 * • Provide submenu context
 * • Render children
 *
 * ============================================================================
 */

import {
    createContext,
    useContext,
    useMemo,
} from "react";

import {
    useControllableState,
} from "@/hooks";

import type {
    Dispatch,
    ReactNode,
    SetStateAction,
} from "react";

export interface MenuSubProps {

    children?: ReactNode;

    open?: boolean;

    defaultOpen?: boolean;

    onOpenChange?(
        open: boolean,
    ): void;

}

interface MenuSubContextValue {

    open: boolean;

    setOpen: Dispatch<
        SetStateAction<boolean>
    >;

    openSubmenu(): void;

    closeSubmenu(): void;

    toggleSubmenu(): void;

}

const MenuSubContext =
    createContext<MenuSubContextValue | null>(
        null,
    );

export function useMenuSubContext() {

    const context =
        useContext(MenuSubContext);

    if (!context) {

        throw new Error(

            "MenuSub components must be rendered inside <MenuSub>.",

        );

    }

    return context;

}

export function MenuSub({

    children,

    open,

    defaultOpen = false,

    onOpenChange,

}: MenuSubProps) {

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
        useMemo<MenuSubContextValue>(() => ({

            open: isOpen,

            setOpen,

            openSubmenu() {

                setOpen(true);

            },

            closeSubmenu() {

                setOpen(false);

            },

            toggleSubmenu() {

                setOpen(

                    previous => !previous,

                );

            },

        }), [

            isOpen,

            setOpen,

        ]);

    return (

        <MenuSubContext.Provider
            value={value}
        >

            {children}

        </MenuSubContext.Provider>

    );

}

MenuSub.displayName =
    "MenuSub";

export default MenuSub;
