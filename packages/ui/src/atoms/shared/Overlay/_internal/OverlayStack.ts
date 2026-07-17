/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: OverlayStack.ts
 *
 * Central observable store responsible for managing every overlay in the
 * application.
 *
 * Responsibilities:
 *
 * • Register overlays
 * • Unregister overlays
 * • Update overlays
 * • Maintain overlay ordering
 * • Notify subscribers
 * • Provide immutable state snapshots
 *
 * This class intentionally contains NO React code.
 * ============================================================================
 */

import {
    DEFAULT_MODAL,
    DEFAULT_OPEN,
    DEFAULT_STATUS,
} from "./overlay.constants";

import {
    calculateOverlayZIndex,
    createOverlayId,
    createOverlayState,
} from "./overlay.utils";

import type {
    OverlayId,
    OverlayRecord,
    OverlayRegisterOptions,
    OverlayState,
    OverlayStore,
} from "./Overlay.types";

import type {
    OverlayEvent,
    OverlayEventListener,
    OverlayObservable,
    Unsubscribe,
} from "./Subscription";

export class OverlayStack
    implements OverlayStore, OverlayObservable {

    /**
     * Internal overlay registry.
     */
    private readonly overlays = new Map<
        OverlayId,
        OverlayRecord
    >();

    /**
     * Event subscribers.
     */
    private readonly listeners =
        new Set<OverlayEventListener>();

/**
 * Store version.
 */
private version = 0;

/**
 * Current batch depth.
 */
private batchDepth = 0;

/**
 * Whether a notification is pending.
 */
private pendingNotification = false;

    /* --------------------------------------------------------------------- */
    /* Subscription                                                          */
    /* --------------------------------------------------------------------- */

    public subscribe(
        listener: OverlayEventListener,
    ): Unsubscribe {

        this.listeners.add(listener);

        return () => {

            this.listeners.delete(listener);

        };

    }

public notify(
    event: OverlayEvent,
): void {

    this.version++;

    if (this.batchDepth > 0) {

        this.pendingNotification = true;

        return;

    }

    this.listeners.forEach(listener => {

        listener(event);

    });

}

public batch(
    transaction: () => void,
): void {

    this.batchDepth++;

    try {

        transaction();

    } finally {

        this.batchDepth--;

        if (
            this.batchDepth === 0 &&
            this.pendingNotification
        ) {

            this.pendingNotification = false;

            this.listeners.forEach(listener => {

                listener({

                    type: "update",

                    state: this.getState(),

                });

            });

        }

    }

}

    /* --------------------------------------------------------------------- */
    /* State                                                                 */
    /* --------------------------------------------------------------------- */

    public getState(): OverlayState {

        return createOverlayState(
            this.getAll(),
        );

    }

    /* --------------------------------------------------------------------- */
/* React External Store                                                  */
/* --------------------------------------------------------------------- */

/**
 * Returns the current immutable overlay snapshot.
 *
 * This is used by React's useSyncExternalStore().
 */
public getSnapshot(): OverlaySnapshot {

    return {

        version: this.version,

        state: this.getState(),

    };

}

/**
 * Returns the server snapshot.
 *
 * For now this is identical to getSnapshot().
 * It exists primarily for SSR compatibility.
 */
public getServerSnapshot(): OverlaySnapshot {

    return this.getSnapshot();

}
    /* --------------------------------------------------------------------- */
    /* CRUD                                                                  */
    /* --------------------------------------------------------------------- */

    public register(
        options: OverlayRegisterOptions,
    ): OverlayRecord {

        const id =
            options.id ??
            createOverlayId();

if (
    options.id &&
    this.overlays.has(options.id)
) {

    throw new Error(

        `[OverlayStack] Overlay "${options.id}" is already registered.`

    );

}

        const overlay: OverlayRecord = {

            id,

            type: options.type,

            modal:
                options.modal ??
                DEFAULT_MODAL,

            open:
                options.open ??
                DEFAULT_OPEN,

            status:
                DEFAULT_STATUS,

            zIndex:
                options.zIndex ??
                calculateOverlayZIndex(
                    this.overlays.size,
                ),

            createdAt:
                Date.now(),

        };

        this.overlays.set(
            id,
            overlay,
        );

        this.notify({

            type: "register",

            overlay,

            state: this.getState(),

        });

        return overlay;

    }

    public unregister(
        id: OverlayId,
    ): void {

        const overlay =
            this.overlays.get(id);

        if (!overlay) {

            return;

        }

        this.overlays.delete(id);

        this.notify({

            type: "unregister",

            overlay,

            state: this.getState(),

        });

    }

    public update(

        id: OverlayId,

        updates: Partial<OverlayRecord>,

    ): void {

        const current =
            this.overlays.get(id);

        if (!current) {

            return;

        }

        const updated: OverlayRecord = {

            ...current,

            ...updates,

        };

        this.overlays.set(
            id,
            updated,
        );

        this.notify({

            type: "update",

            overlay: updated,

            state: this.getState(),

        });

    }

    public clear(): void {

        this.overlays.clear();

        this.notify({

            type: "clear",

            state: this.getState(),

        });

    }

    /* --------------------------------------------------------------------- */
    /* Queries                                                               */
    /* --------------------------------------------------------------------- */

    public has(
        id: OverlayId,
    ): boolean {

        return this.overlays.has(id);

    }

    public get(
        id: OverlayId,
    ): OverlayRecord | undefined {

        return this.overlays.get(id);

    }

    public getAll():
        readonly OverlayRecord[] {

        return Array.from(
            this.overlays.values(),
        );

    }

    public getTop():
        | OverlayRecord
        | undefined {

        const overlays =
            this.getAll();

        return overlays[
            overlays.length - 1
        ];

    }

    public get size(): number {

        return this.overlays.size;

    }

}

/* -------------------------------------------------------------------------- */
/* Shared Overlay Store                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Shared overlay store used throughout Ascend Enterprise UI.
 *
 * Most applications should consume this singleton through
 * OverlayProvider or useOverlay().
 *
 * The OverlayStack class itself remains public for testing
 * and advanced scenarios.
 */
export const overlayStack =
    new OverlayStack();
