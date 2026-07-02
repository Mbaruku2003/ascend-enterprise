import type { ThemeState } from "../types";
import { ThemeStorageAdapter } from "./ThemeStorageAdapter";

export class LocalStorageThemeStorage
  implements ThemeStorageAdapter {

  load(): ThemeState {
    // implementation comes from the previous
    // ThemeStorage.ts logic
  }

  save(theme: ThemeState): void {}

  reset(): ThemeState {}

  clear(): void {}
}
