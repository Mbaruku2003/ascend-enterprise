/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: OverlayController.ts
 *
 * High-level mutation API for the Overlay Engine.
 *
 * The controller is the only class responsible for mutating OverlayStack.
 *
 * Runtime services and overlay components should express intent through the
 * controller rather than calling OverlayStack.update() directly.
 *
 * ============================================================================
 */

import type {
    OverlayId,
    OverlayRecord,
    OverlayRegisterOptions,
} from "./Overlay.types";

import type {
    OverlayStack,
} from "./OverlayStack";

/* -------------------------------------------------------------------------- */
/* Controller                                                                 */
/* -------------------------------------------------------------------------- */

export class OverlayController {

    constructor(
        private readonly store: OverlayStack,
    ) {}

    /* ---------------------------------------------------------------------- */
    /* Registration                                                           */
    /* ---------------------------------------------------------------------- */

    /**
     * Registers a new overlay.
     */
    public register(
        options: OverlayRegisterOptions,
    ): OverlayRecord {

        return this.store.register(options);

    }

    /**
     * Removes an overlay.
     */
    public unregister(
        id: OverlayId,
    ): void {

        this.store.unregister(id);

    }

    /* ---------------------------------------------------------------------- */
    /* Visibility                                                             */
    /* ---------------------------------------------------------------------- */

    /**
     * Opens an overlay.
     */
    public open(
        id: OverlayId,
    ): void {

        if (!this.store.has(id)) {

            return;

        }

        this.store.update(id, {

            open: true,

            status: "opening",

        });

    }

    /**
     * Closes an overlay.
     */
    public close(
        id: OverlayId,
    ): void {

        if (!this.store.has(id)) {

            return;

        }

        this.store.update(id, {

            open: false,

            status: "closing",

        });

    }

    /**
     * Toggles an overlay.
     */
    public toggle(
        id: OverlayId,
    ): void {

        const overlay =
            this.store.get(id);

        if (!overlay) {

            return;

        }

        if (overlay.open) {

            this.close(id);

        } else {

            this.open(id);

        }

    }

    /**
     * Alias for close().
     *
     * Runtime services use dismiss()
     * because it better communicates intent.
     */
    public dismiss(
        id: OverlayId,
    ): void {

        this.close(id);

    }

    /* ---------------------------------------------------------------------- */
    /* Updates                                                                */
    /* ---------------------------------------------------------------------- */

    /**
     * Applies a partial update.
     */
    public update(
        id: OverlayId,
        updates: Partial<OverlayRecord>,
    ): void {

        if (!this.store.has(id)) {

            return;

        }

        this.store.update(
            id,
            updates,
        );

    }

    /* ---------------------------------------------------------------------- */
    /* Batch                                                                  */
    /* ---------------------------------------------------------------------- */

    /**
     * Executes multiple mutations as a single transaction.
     */
    public batch(
        callback: () => void,
    ): void {

        this.store.batch(
            callback,
        );

    }

    /* ---------------------------------------------------------------------- */
    /* Queries                                                                */
    /* ---------------------------------------------------------------------- */

    /**
     * Returns an overlay.
     */
    public get(
        id: OverlayId,
    ): OverlayRecord | undefined {

        return this.store.get(id);

    }

    /**
     * Returns every overlay.
     */
    public getAll():
        readonly OverlayRecord[] {

        return this.store.getAll();

    }

    /**
     * Returns the top-most overlay.
     */
    public getTop():
        | OverlayRecord
        | undefined {

        return this.store.getTop();

    }

    /**
     * Returns true if an overlay exists.
     */
    public has(
        id: OverlayId,
    ): boolean {

        return this.store.has(id);

    }

    /**
     * Clears every overlay.
     */
    public clear(): void {

        this.store.clear();

    }

}
