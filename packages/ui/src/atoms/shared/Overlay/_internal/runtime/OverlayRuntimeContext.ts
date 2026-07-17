/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine Runtime
 * ----------------------------------------------------------------------------
 * File: OverlayRuntimeContext.ts
 *
 * Shared dependency container for the Overlay Runtime.
 *
 * Rather than injecting multiple objects into every runtime service, the
 * runtime provides a single context object that exposes everything a service
 * needs.
 *
 * This greatly simplifies constructors while making the runtime extensible.
 *
 * ============================================================================
 */

import type {
    OverlaySnapshot,
} from "../Overlay.types";

import type {
    OverlayController,
} from "../OverlayController";

import type {
    OverlayStack,
} from "../OverlayStack";

import type {
    OverlayRuntime,
} from "./OverlayRuntime";

/* -------------------------------------------------------------------------- */
/* Context Interface                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Shared runtime dependency container.
 *
 * Every OverlayService receives this object.
 */
export interface OverlayRuntimeContext {

    /**
     * Shared overlay store.
     *
     * Owns the immutable overlay state.
     */
    readonly store: OverlayStack;

    /**
     * High-level mutation API.
     *
     * Services should prefer using the controller instead of mutating the
     * OverlayStack directly.
     */
    readonly controller: OverlayController;

    /**
     * Runtime coordinator.
     *
     * Allows advanced services to interact with the runtime without creating
     * circular dependencies.
     */
    readonly runtime: OverlayRuntime;

    /**
     * Returns the latest immutable snapshot from the OverlayStack.
     */
    getSnapshot(): OverlaySnapshot;

}

/* -------------------------------------------------------------------------- */
/* Factory                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Creates a runtime context.
 *
 * Keeping construction in one place makes it easier to extend the runtime
 * later with additional shared services such as:
 *
 * • Logger
 * • Scheduler
 * • AnimationManager
 * • DebugTools
 * * Analytics
 */
export function createOverlayRuntimeContext(
    store: OverlayStack,
    controller: OverlayController,
    runtime: OverlayRuntime,
): OverlayRuntimeContext {

    return {

        store,

        controller,

        runtime,

        getSnapshot() {

            return store.getSnapshot();

        },

    };

}
