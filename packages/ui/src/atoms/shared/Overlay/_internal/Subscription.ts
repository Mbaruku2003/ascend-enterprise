/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: Subscription.ts
 *
 * Shared subscription types used throughout the Overlay Engine.
 *
 * This file intentionally contains no React or browser APIs.
 * It defines the event contract between the OverlayStack and all subscribers.
 * ============================================================================
 */

import type {
    OverlayRecord,
    OverlayState,
} from "./Overlay.types";

/* -------------------------------------------------------------------------- */
/* Basic Subscription Types                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Function used to unsubscribe from a subscription.
 */
export type Unsubscribe = () => void;

/**
 * Generic listener callback.
 */
export type Listener = () => void;

/**
 * Listener that receives the latest OverlayState.
 */
export type OverlayStateListener = (
    state: OverlayState,
) => void;

/**
 * Listener that receives the current overlay stack.
 */
export type OverlayCollectionListener = (
    overlays: readonly OverlayRecord[],
) => void;

/**
 * Listener invoked whenever the top overlay changes.
 */
export type TopOverlayListener = (
    overlay?: OverlayRecord,
) => void;

/* -------------------------------------------------------------------------- */
/* Overlay Events                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Every event emitted by the Overlay Engine.
 */
export type OverlayEventType =
    | "register"
    | "unregister"
    | "update"
    | "clear";

/**
 * Payload describing a stack event.
 */
export interface OverlayEvent {

    /**
     * Event name.
     */
    type: OverlayEventType;

    /**
     * Current overlay state after the event.
     */
    state: OverlayState;

    /**
     * Overlay affected by the event.
     *
     * Undefined for "clear".
     */
    overlay?: OverlayRecord;

}

/**
 * Listener for OverlayEvents.
 */
export type OverlayEventListener = (
    event: OverlayEvent,
) => void;

/* -------------------------------------------------------------------------- */
/* Subscription Interfaces                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Generic subscribable interface.
 *
 * This keeps the OverlayStack independent from React.
 */
export interface Subscribable<TListener> {

    /**
     * Subscribe to changes.
     */
    subscribe(
        listener: TListener,
    ): Unsubscribe;

}

/**
 * Observable Overlay Store.
 */
export interface OverlayObservable
    extends Subscribable<OverlayEventListener> {

    /**
     * Notify all subscribers.
     */
    notify(
        event: OverlayEvent,
    ): void;

}

/**
 * Executes multiple mutations as a single transaction.
 */
export type Transaction = () => void;
