/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuRadioGroup.tsx
 * ============================================================================
 */

import {
    createContext,
    useContext,
    type ReactNode,
} from "react";

export interface MenuRadioGroupProps {

    value?: string;

    onValueChange?(
        value: string,
    ): void;

    children?: ReactNode;

}

interface MenuRadioContextValue {

    value?: string;

    onValueChange?(
        value: string,
    ): void;

}

const MenuRadioContext =
createContext<MenuRadioContextValue | null>(
null,
);

export function useMenuRadioGroup() {

const context =
useContext(MenuRadioContext);

if (!context) {

throw new Error(

"MenuRadioItem must be used inside MenuRadioGroup.",

);

}

return context;

}

export function MenuRadioGroup({

value,

onValueChange,

children,

}: MenuRadioGroupProps) {

return (

<MenuRadioContext.Provider

value={{

value,

onValueChange,

}}

>

{children}

</MenuRadioContext.Provider>

);

}

export default MenuRadioGroup;
