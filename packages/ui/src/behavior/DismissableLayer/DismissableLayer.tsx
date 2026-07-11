/**
 * ============================================================================
 * Ascend UI
 * Dismissable Layer
 * ============================================================================
 */

import {
  forwardRef,
  useEffect,
  useRef,
} from "react";

import { useMergedRefs } from "@/hooks";

import {
    useDismissableLayerContext,
} from "./DismissableLayerContext";

import {
  isEventInside,
} from "./dismissable-layer-utils";

import type {
  DismissableLayerProps,
} from "./DismissableLayer.types";

export const DismissableLayer =
  forwardRef<
    HTMLDivElement,
    DismissableLayerProps
  >(
    (
      {
        children,

        disabled = false,

        preventDismiss = false,

        branchRefs = [],

        onDismiss,

        onEscapeKeyDown,

        onPointerDownOutside,

        onFocusOutside,

        onInteractOutside,

        ...props
      },
      forwardedRef,
    ) => {

      const localRef =
        useRef<HTMLDivElement>(null);

      const ref =
        useMergedRefs(
          forwardedRef,
          localRef,
        );

      /**
       * Register layer
       */
      useEffect(() => {

        const element =
          localRef.current;

        if (!element) return;

        addLayer(element);

        return () => {

          removeLayer(element);

        };

      }, []);

      /**
       * Escape key
       */
      useEffect(() => {

        if (disabled) return;

        function handleKeyDown(
          event: KeyboardEvent,
        ) {

          const element =
            localRef.current;

          if (
            !element ||
            !isTopLayer(element)
          ) {
            return;
          }

          if (
            event.key !== "Escape"
          ) {
            return;
          }

          onEscapeKeyDown?.(
            event,
          );

          if (
            event.defaultPrevented ||
            preventDismiss
          ) {
            return;
          }

          onDismiss?.();

        }

        document.addEventListener(
          "keydown",
          handleKeyDown,
        );

        return () =>
          document.removeEventListener(
            "keydown",
            handleKeyDown,
          );

      }, [
        disabled,
        preventDismiss,
        onDismiss,
        onEscapeKeyDown,
      ]);

      /**
       * Pointer outside
       */
      useEffect(() => {

        if (disabled) return;

        function handlePointerDown(
          event: PointerEvent,
        ) {

          const element =
            localRef.current;

          if (
            !element ||
            !isTopLayer(element)
          ) {
            return;
          }

          if (
            isEventInside(
              event.target,
              element,
            )
          ) {
            return;
          }

          for (const branch of branchRefs) {

            if (
              isEventInside(
                event.target,
                branch.current,
              )
            ) {
              return;
            }

          }

          onPointerDownOutside?.(
            event,
          );

          onInteractOutside?.(
            event,
          );

          if (
            event.defaultPrevented ||
            preventDismiss
          ) {
            return;
          }

          onDismiss?.();

        }

        document.addEventListener(
          "pointerdown",
          handlePointerDown,
        );

        return () =>
          document.removeEventListener(
            "pointerdown",
            handlePointerDown,
          );

      }, [
        disabled,
        preventDismiss,
        branchRefs,
        onDismiss,
        onPointerDownOutside,
        onInteractOutside,
      ]);

      /**
       * Focus outside
       */
      useEffect(() => {

        if (disabled) return;

        function handleFocusIn(
          event: FocusEvent,
        ) {

          const element =
            localRef.current;

          if (
            !element ||
            !isTopLayer(element)
          ) {
            return;
          }

          if (
            isEventInside(
              event.target,
              element,
            )
          ) {
            return;
          }

          onFocusOutside?.(
            event,
          );

          onInteractOutside?.(
            event,
          );

        }

        document.addEventListener(
          "focusin",
          handleFocusIn,
        );

        return () =>
          document.removeEventListener(
            "focusin",
            handleFocusIn,
          );

      }, [
        disabled,
        onFocusOutside,
        onInteractOutside,
      ]);

      return (

        <div
          ref={ref}
          {...props}
        >

          {children}

        </div>

      );

    },
  );

DismissableLayer.displayName =
  "DismissableLayer";

export default DismissableLayer;
