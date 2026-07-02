/**
 * Ascend Enterprise
 * Theme Events
 *
 * A lightweight, strongly typed event bus used by the theme system.
 *
 * Features:
 * - Zero dependencies
 * - No React dependency
 * - No browser dependency
 * - Fully type-safe
 * - Tree-shakeable
 * - Safe listener execution
 */

import type { ThemeState } from "./types";

export interface ThemeEvents {
  /**
   * Fired whenever the active theme has changed.
   */
  "theme:changed": {
    previous: ThemeState;
    current: ThemeState;
  };

  /**
   * Fired after the active theme has been reset.
   */
  "theme:reset": {
    theme: ThemeState;
  };

  /**
   * Fired whenever the resolved system theme changes while
   * ThemeMode === "system".
   */
  "theme:system-changed": {
    resolvedTheme: "light" | "dark";
  };
}

export type ThemeEventName = keyof ThemeEvents;

export type ThemeEventHandler<T extends ThemeEventName> = (
  payload: ThemeEvents[T],
) => void;

/**
 * Each event name owns a set of handlers with the correct payload type.
 */
type ListenerMap = {
  [K in ThemeEventName]?: Set<ThemeEventHandler<K>>;
};

export class ThemeEventBus {
  private readonly listeners: ListenerMap = {};

  on<T extends ThemeEventName>(
    event: T,
    handler: ThemeEventHandler<T>,
  ): () => void {
    const handlers =
      (this.listeners[event] as Set<ThemeEventHandler<T>> | undefined) ??
      new Set<ThemeEventHandler<T>>();

    handlers.add(handler);

    this.listeners[event] = handlers as ListenerMap[T];

    return () => this.off(event, handler);
  }

  off<T extends ThemeEventName>(
    event: T,
    handler: ThemeEventHandler<T>,
  ): void {
    const handlers = this.listeners[event] as
      | Set<ThemeEventHandler<T>>
      | undefined;

    if (!handlers) {
      return;
    }

    handlers.delete(handler);

    if (handlers.size === 0) {
      delete this.listeners[event];
    }
  }

  emit<T extends ThemeEventName>(
    event: T,
    payload: ThemeEvents[T],
  ): void {
    const handlers = this.listeners[event] as
      | Set<ThemeEventHandler<T>>
      | undefined;

    if (!handlers) {
      return;
    }

    // Clone first so listeners can safely unsubscribe while emitting.
    for (const handler of [...handlers]) {
      try {
        handler(payload);
      } catch (error) {
        console.warn(
          `[ThemeEventBus] Listener for "${event}" failed.`,
          error,
        );
      }
    }
  }

  clear(): void {
    this.listeners["theme:changed"]?.clear();
    this.listeners["theme:reset"]?.clear();
    this.listeners["theme:system-changed"]?.clear();

    delete this.listeners["theme:changed"];
    delete this.listeners["theme:reset"];
    delete this.listeners["theme:system-changed"];
  }

  listenerCount(event?: ThemeEventName): number {
    if (event) {
      return this.listeners[event]?.size ?? 0;
    }

    return Object.values(this.listeners).reduce(
      (count, handlers) => count + (handlers?.size ?? 0),
      0,
    );
  }
}

/**
 * Default singleton used throughout the design system.
 *
 * Consumers that require isolation (tests, Storybook,
 * multiple providers, etc.) can instantiate ThemeEventBus
 * directly instead.
 */
export const themeEvents = new ThemeEventBus();
