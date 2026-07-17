/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine Runtime
 * ----------------------------------------------------------------------------
 * File: OverlayService.ts
 *
 * Base class for every Overlay Runtime service.
 *
 * Runtime services encapsulate browser-specific behavior that reacts to
 * OverlayStack state changes while remaining independent of React.
 *
 * All services receive a shared OverlayRuntimeContext instead of individual
 * dependencies. This keeps constructors simple while making the runtime
 * extensible.
 *
 * ============================================================================
 */

import type {
    OverlaySnapshot,
} from "../Overlay.types";

import type {
    OverlayRuntimeContext,
} from "./OverlayRuntimeContext";

/* -------------------------------------------------------------------------- */
/* Service State                                                              */
/* -------------------------------------------------------------------------- */

export type OverlayServiceStatus =
    | "idle"
    | "initialized"
    | "running"
    | "disposed";

/* -------------------------------------------------------------------------- */
/* Abstract Service                                                           */
/* -------------------------------------------------------------------------- */

export abstract class OverlayService {

    /**
     * Unique runtime service name.
     */
    public abstract readonly name: string;

    /**
     * Current lifecycle state.
     */
    private status: OverlayServiceStatus = "idle";

    /**
     * Shared runtime context.
     */
    protected readonly context: OverlayRuntimeContext;

    protected constructor(
        context: OverlayRuntimeContext,
    ) {

        this.context = context;

    }

    /* ---------------------------------------------------------------------- */
    /* Convenience Accessors                                                  */
    /* ---------------------------------------------------------------------- */

    /**
     * Overlay store.
     */
    protected get store() {

        return this.context.store;

    }

    /**
     * Overlay controller.
     */
    protected get controller() {

        return this.context.controller;

    }

    /**
     * Runtime.
     */
    protected get runtime() {

        return this.context.runtime;

    }

    /**
     * Latest immutable snapshot.
     */
    protected get snapshot(): OverlaySnapshot {

        return this.context.getSnapshot();

    }

    /* ---------------------------------------------------------------------- */
    /* Lifecycle                                                              */
    /* ---------------------------------------------------------------------- */

    /**
     * Initializes the service.
     *
     * Called exactly once by OverlayRuntime.
     */
    public initialize(): void {

        if (this.status !== "idle") {

            return;

        }

        this.status = "initialized";

        this.onInitialize();

    }

    /**
     * Starts the service.
     */
    public start(): void {

        if (this.status !== "initialized") {

            return;

        }

        this.status = "running";

        this.onStart();

    }

    /**
     * Stops the service.
     */
    public stop(): void {

        if (this.status !== "running") {

            return;

        }

        this.onStop();

        this.status = "initialized";

    }

    /**
     * Permanently disposes the service.
     */
    public dispose(): void {

        if (this.status === "disposed") {

            return;

        }

        if (this.status === "running") {

            this.stop();

        }

        this.onDispose();

        this.status = "disposed";

    }

    /* ---------------------------------------------------------------------- */
    /* Runtime Updates                                                       */
    /* ---------------------------------------------------------------------- */

    /**
     * Called by OverlayRuntime whenever the OverlayStack publishes
     * a new snapshot.
     */
    public update(
        snapshot: OverlaySnapshot,
    ): void {

        if (this.status !== "running") {

            return;

        }

        this.onUpdate(snapshot);

    }

    /* ---------------------------------------------------------------------- */
    /* Extension Hooks                                                        */
    /* ---------------------------------------------------------------------- */

    /**
     * Called once after initialize().
     */
    protected onInitialize(): void {}

    /**
     * Called when the runtime starts.
     */
    protected onStart(): void {}

    /**
     * Called when the runtime stops.
     */
    protected onStop(): void {}

    /**
     * Called when the service is disposed.
     */
    protected onDispose(): void {}

    /**
     * Called whenever the OverlayStack publishes a new snapshot.
     */
    protected abstract onUpdate(
        snapshot: OverlaySnapshot,
    ): void;

    /* ---------------------------------------------------------------------- */
    /* State Queries                                                          */
    /* ---------------------------------------------------------------------- */

    /**
     * Returns the lifecycle state.
     */
    public getState(): OverlayServiceStatus {

        return this.status;

    }

    /**
     * True while actively running.
     */
    public get isRunning(): boolean {

        return this.status === "running";

    }

    /**
     * True once permanently disposed.
     */
    public get isDisposed(): boolean {

        return this.status === "disposed";

    }

    /**
     * True once initialized.
     */
    public get isInitialized(): boolean {

        return (
            this.status === "initialized" ||
            this.status === "running"
        );

    }

}
