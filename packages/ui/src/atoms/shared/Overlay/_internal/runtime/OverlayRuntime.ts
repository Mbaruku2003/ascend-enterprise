/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine Runtime
 * ----------------------------------------------------------------------------
 * File: OverlayRuntime.ts
 *
 * Central runtime responsible for coordinating all Overlay services.
 *
 * Responsibilities:
 *
 * • Own Overlay Services
 * • Subscribe to OverlayStack
 * • Forward Overlay snapshots
 * • Start / Stop services
 * • Dispose services
 *
 * The runtime contains NO browser logic.
 * Browser behavior lives inside individual services.
 * ============================================================================
 */

import type {
    OverlayEvent,
    Unsubscribe,
} from "../Subscription";

import type {
    OverlayStack,
} from "../OverlayStack";

import {
    OverlayService,
} from "./OverlayService";

/* -------------------------------------------------------------------------- */
/* Runtime State                                                              */
/* -------------------------------------------------------------------------- */

export type OverlayRuntimeStatus =
    | "idle"
    | "running"
    | "disposed";

/* -------------------------------------------------------------------------- */
/* Runtime                                                                    */
/* -------------------------------------------------------------------------- */

export class OverlayRuntime {

    /**
     * Overlay store.
     */
    private readonly store: OverlayStack;

    /**
     * Registered runtime services.
     */
    private readonly services =
        new Map<
            string,
            OverlayService
        >();

    /**
     * Overlay subscription.
     */
    private unsubscribe?: Unsubscribe;

    /**
     * Runtime lifecycle.
     */
    private status: OverlayRuntimeStatus =
        "idle";

    constructor(
        store: OverlayStack,
    ) {

        this.store = store;

    }

    /* ---------------------------------------------------------------------- */
    /* Registration                                                           */
    /* ---------------------------------------------------------------------- */

    /**
     * Registers a runtime service.
     */
    public register(
        service: OverlayService,
    ): this {

        if (
            this.services.has(
                service.name,
            )
        ) {

            throw new Error(

                `[OverlayRuntime] Service "${service.name}" is already registered.`,

            );

        }

        service.initialize();

        this.services.set(
            service.name,
            service,
        );

        return this;

    }

    /**
     * Removes a runtime service.
     */
    public unregister(
        name: string,
    ): void {

        const service =
            this.services.get(name);

        if (!service) {

            return;

        }

        service.dispose();

        this.services.delete(name);

    }

    /* ---------------------------------------------------------------------- */
    /* Lifecycle                                                              */
    /* ---------------------------------------------------------------------- */

    /**
     * Starts the runtime.
     */
    public start(): void {

        if (
            this.status !== "idle"
        ) {

            return;

        }

        this.status = "running";

        this.services.forEach(
            service => {

                service.start();

            },
        );

        this.unsubscribe =
            this.store.subscribe(
                this.handleOverlayEvent,
            );

        /**
         * Push the current snapshot immediately.
         */
        const snapshot =
            this.store.getSnapshot();

        this.services.forEach(
            service => {

                service.update(
                    snapshot,
                );

            },
        );

    }

    /**
     * Stops the runtime.
     */
    public stop(): void {

        if (
            this.status !== "running"
        ) {

            return;

        }

        this.unsubscribe?.();

        this.unsubscribe =
            undefined;

        this.services.forEach(
            service => {

                service.stop();

            },
        );

        this.status = "idle";

    }

    /**
     * Disposes the runtime.
     */
    public dispose(): void {

        if (
            this.status ===
            "disposed"
        ) {

            return;

        }

        this.stop();

        this.services.forEach(
            service => {

                service.dispose();

            },
        );

        this.services.clear();

        this.status =
            "disposed";

    }

    /* ---------------------------------------------------------------------- */
    /* Overlay Events                                                         */
    /* ---------------------------------------------------------------------- */

    /**
     * Receives updates from OverlayStack.
     */
    private readonly handleOverlayEvent = (
        event: OverlayEvent,
    ): void => {

        const snapshot =
            this.store.getSnapshot();

        this.services.forEach(
            service => {

                service.update(
                    snapshot,
                );

            },
        );

    };

    /* ---------------------------------------------------------------------- */
    /* Queries                                                                */
    /* ---------------------------------------------------------------------- */

    /**
     * Returns a service.
     */
    public get<T extends OverlayService>(
        name: string,
    ): T | undefined {

        return this.services.get(
            name,
        ) as T | undefined;

    }

    /**
     * Returns true if a service exists.
     */
    public has(
        name: string,
    ): boolean {

        return this.services.has(
            name,
        );

    }

    /**
     * Returns every registered service.
     */
    public getServices():
        readonly OverlayService[] {

        return Array.from(
            this.services.values(),
        );

    }

    /**
     * Runtime state.
     */
    public getState():
        OverlayRuntimeStatus {

        return this.status;

    }

    /**
     * Number of registered services.
     */
    public get size(): number {

        return this.services.size;

    }

    /**
     * True while running.
     */
    public get isRunning(): boolean {

        return this.status ===
            "running";

    }

    /**
     * True after disposal.
     */
    public get isDisposed(): boolean {

        return this.status ===
            "disposed";

    }

}
