/**
 * ============================================================================
 * Ascend UI
 * Roving Focus Types
 * ============================================================================
 */

import type {
    Dispatch,
    KeyboardEvent,
    ReactNode,
    RefObject,
    SetStateAction,
} from "react";

/**
 * Navigation orientation.
 */
export type RovingOrientation =
    | "horizontal"
    | "vertical"
    | "both";

/**
 * Text direction.
 * Future-proof for RTL navigation.
 */
export type RovingDirection =
    | "ltr"
    | "rtl";

/**
 * Individual registered focus item.
 */
export interface RovingFocusItem {

    /**
     * Stable unique identifier.
     */
    id: string;

    /**
     * DOM element.
     */
    ref: RefObject<HTMLElement>;

    /**
     * Optional display text.
     *
     * Used later for:
     * - Typeahead
     * - Command Palette
     * - Search
     */
    textValue?: string;

    /**
     * Disabled items remain registered
     * but are skipped during navigation.
     */
    disabled?: boolean;

}

/**
 * Internal registry.
 *
 * Map provides O(1):
 * - register
 * - unregister
 * - lookup
 */
export type RovingRegistry =
    Map<
        string,
        RovingFocusItem
    >;

/**
 * Root component props.
 */
export interface RovingFocusProps {

    children: ReactNode;

    /**
     * Wrap navigation.
     */
    loop?: boolean;

    /**
     * Navigation orientation.
     */
    orientation?: RovingOrientation;

    /**
     * Reading direction.
     */
    direction?: RovingDirection;

}

/**
 * Wrapper around each navigable child.
 */
export interface RovingFocusItemProps {

    children: ReactNode;

    id?: string;

    disabled?: boolean;

    textValue?: string;

}

/**
 * Context shared across all descendants.
 */
export interface RovingFocusContextValue {

    /**
     * Registry.
     */
    registry: RovingRegistry;

    /**
     * Register item.
     */
    register(
        item: RovingFocusItem,
    ): void;

    /**
     * Remove item.
     */
    unregister(
        id: string,
    ): void;

    /**
     * Currently focused item.
     */
    currentId: string | null;

    /**
     * Update current item.
     */
    setCurrentId: Dispatch<
        SetStateAction<string | null>
    >;

    /**
     * Loop navigation.
     */
    loop: boolean;

    /**
     * Orientation.
     */
    orientation: RovingOrientation;

    /**
     * Reading direction.
     */
    direction: RovingDirection;

    /**
     * Handle keyboard events.
     */
    onKeyDown(
        event: KeyboardEvent<HTMLElement>,
    ): void;

}
