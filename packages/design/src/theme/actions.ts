import type {
  AccentColor,
  ThemeMode,
} from "./types";

export enum ThemeActionType {
  SET_MODE = "SET_MODE",

  SET_ACCENT = "SET_ACCENT",

  UPDATE_ACCESSIBILITY = "UPDATE_ACCESSIBILITY",

  RESET = "RESET",
}
export const ThemeActionTypes = {
  SET_MODE: "SET_MODE",
  SET_ACCENT: "SET_ACCENT",
  UPDATE_ACCESSIBILITY: "UPDATE_ACCESSIBILITY",
  HYDRATE: "HYDRATE",
  RESET: "RESET",
} as const;

export type ThemeActionType =
  typeof ThemeActionTypes[keyof typeof ThemeActionTypes];

export type ThemeAction =
  | {
      type: typeof ThemeActionTypes.SET_MODE;
      payload: ThemeMode;
    }
  | {
      type: typeof ThemeActionTypes.SET_ACCENT;
      payload: AccentColor;
    }
  | {
      type: typeof ThemeActionTypes.UPDATE_ACCESSIBILITY;
      payload: {
        reducedMotion?: boolean;
        highContrast?: boolean;
      };
    }
  | {
      type: typeof ThemeActionTypes.HYDRATE;
      payload: import("./types").ThemeState;
    }
  | {
      type: typeof ThemeActionTypes.RESET;
    };
