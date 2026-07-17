/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: Overlay.types.ts
 *
 * Shared types for the internal Overlay Engine.
 *
 * This file intentionally contains no React or browser-specific code.
 * ============================================================================
 */

/**
 * Unique identifier for an overlay instance.
 */
export type OverlayId = string;

/**
 * Supported overlay component types.
 *
 * These are used internally for diagnostics, stack management,
 * debugging and future DevTools support.
 */
export type OverlayType =
    | "dialog"
    | "drawer"
    | "popover"
    | "tooltip"
    | "hovercard"
    | "menu"
    | "dropdown-menu"
    | "context-menu"
    | "menubar"
    | "navigation-menu"
    | "select"
    | "combobox";

/**
 * Current lifecycle state.
 */
export type OverlayStatus =
    | "closed"
    | "opening"
    | "open"
    | "closing";

/**
 * Registration options supplied by overlay components.
 */
export interface OverlayRegisterOptions {

    /**
     * Optional custom identifier.
     * If omitted one will be generated.
     */
    id?: OverlayId;

    /**
     * Overlay implementation.
     */
    type: OverlayType;

    /**
     * Whether this overlay behaves as modal.
     */
    modal?: boolean;

    /**
     * Initial open state.
     */
    open?: boolean;

    /**
     * Base z-index.
     */
    zIndex?: number;

}

/**
 * Internal overlay record stored by OverlayStack.
 */
export interface OverlayRecord {

    /**
     * Unique identifier.
     */
    id: OverlayId;

    /**
     * Overlay implementation.
     */
    type: OverlayType;

    /**
     * Modal state.
     */
    modal: boolean;

    /**
     * Current visibility.
     */
    open: boolean;

    /**
     * Lifecycle state.
     */
    status: OverlayStatus;

    /**
     * Assigned z-index.
     */
    zIndex: number;

    /**
     * Registration timestamp.
     */
    createdAt: number;

}

/**
 * Snapshot of the overlay engine.
 *
 * This object is immutable from the perspective of consumers.
 */
export interface OverlayState {

    /**
     * Registered overlays.
     */
    overlays: readonly OverlayRecord[];

    /**
     * Top-most overlay.
     */
    topOverlay?: OverlayRecord;

}

/**
 * Context value exposed through OverlayProvider.
 */
export interface OverlayContextValue {

    /**
     * Current overlay state.
     */
    state: OverlayState;

    /**
     * Register an overlay.
     */
    register(
        options: OverlayRegisterOptions,
    ): OverlayRecord;

    /**
     * Remove an overlay.
     */
    unregister(
        id: OverlayId,
    ): void;

    /**
     * Update an existing overlay.
     */
    update(
        id: OverlayId,
        updates: Partial<OverlayRecord>,
    ): void;

    /**
     * Returns true if the overlay exists.
     */
    has(
        id: OverlayId,
    ): boolean;

    /**
     * Returns an overlay by id.
     */
    get(
        id: OverlayId,
    ): OverlayRecord | undefined;

    /**
     * Returns the top-most overlay.
     */
    getTop():
        | OverlayRecord
        | undefined;

}

/**
 * Immutable snapshot returned by the Overlay Engine.
 */
export interface OverlaySnapshot {

    /**
     * Monotonically increasing store version.
     */
    readonly version: number;

    /**
     * Immutable overlay state.
     */
    readonly state: OverlayState;

}

export interface OverlayStore {

    register(
        options: OverlayRegisterOptions,
    ): OverlayRecord;

    unregister(
        id: OverlayId,
    ): void;

    update(
        id: OverlayId,
        updates: Partial<OverlayRecord>,
    ): void;

    clear(): void;

    has(
        id: OverlayId,
    ): boolean;

    get(
        id: OverlayId,
    ): OverlayRecord | undefined;

    getAll():
        readonly OverlayRecord[];

    getTop():
        | OverlayRecord
        | undefined;

    getState(): OverlayState;

    getSnapshot(): OverlaySnapshot;

    getServerSnapshot(): OverlaySnapshot;

    /**
     * Executes multiple mutations while emitting
     * only a single notification.
     */
    batch(
        transaction: () => void,
    ): void;

}
