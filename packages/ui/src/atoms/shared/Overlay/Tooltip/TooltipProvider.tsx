/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip Provider
 * ============================================================================
 */

import {
    createContext,
    useContext,
} from "react";

import type {
    ReactNode,
} from "react";

import {
    DEFAULT_TOOLTIP_CLOSE_DELAY,
    DEFAULT_TOOLTIP_DELAY,
} from "./Tooltip.constants";

interface TooltipProviderContextValue {

delay: number;

closeDelay: number;

}

const TooltipProviderContext =
createContext<
TooltipProviderContextValue
>({
delay:
DEFAULT_TOOLTIP_DELAY,

closeDelay:
DEFAULT_TOOLTIP_CLOSE_DELAY,

});

export function TooltipProvider({

children,

delay =
DEFAULT_TOOLTIP_DELAY,

closeDelay =
DEFAULT_TOOLTIP_CLOSE_DELAY,

}: {

children?: ReactNode;

delay?: number;

closeDelay?: number;

}) {

return (

<TooltipProviderContext.Provider

value={{

delay,

closeDelay,

}}

>

{children}

</TooltipProviderContext.Provider>

);

}

export function useTooltipProvider() {

return useContext(

TooltipProviderContext,

);

}

export default TooltipProvider;
