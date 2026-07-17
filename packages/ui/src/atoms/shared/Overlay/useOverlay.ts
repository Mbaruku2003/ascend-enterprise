export interface OverlayApi {

    /**
     * High-level overlay operations.
     */
    controller: OverlayController;

    /**
     * Runtime coordinator.
     */
    runtime: OverlayRuntime;

    /**
     * Current immutable snapshot.
     */
    snapshot: OverlaySnapshot;

    /**
     * Convenience accessors.
     */
    overlays: readonly OverlayRecord[];

    topOverlay?: OverlayRecord;

}
