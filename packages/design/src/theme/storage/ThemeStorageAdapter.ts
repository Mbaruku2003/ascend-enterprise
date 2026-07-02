import type { ThemeState } from "../types";

export interface ThemeStorageAdapter {
  load(): ThemeState;

  save(theme: ThemeState): void;

  reset(): ThemeState;
}
