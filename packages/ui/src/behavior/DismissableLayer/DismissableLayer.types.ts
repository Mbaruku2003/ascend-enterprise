import type {
  HTMLAttributes,
} from "react";

export interface DismissableLayerProps
  extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;

  disableOutsidePointerEvents?: boolean;

  onDismiss?(): void;

  onEscapeKeyDown?(
    event: KeyboardEvent,
  ): void;

  onPointerDownOutside?(
    event: PointerEvent,
  ): void;

  onFocusOutside?(
    event: FocusEvent,
  ): void;
}

export interface DismissableLayerContextValue {
  register(
    node: HTMLElement,
  ): void;

  unregister(
    node: HTMLElement,
  ): void;
}

branchRefs?: React.RefObject<HTMLElement>[];

preventDismiss?: boolean;

onInteractOutside?(
    event: Event,
): void;
