import { DEFAULT_THEME } from "./defaults";
import {
  ThemeAction,
  ThemeActionTypes,
} from "./actions";
import type { ThemeState } from "./types";

export function themeReducer(
  state: ThemeState,
  action: ThemeAction,
): ThemeState {
  switch (action.type) {
    case ThemeActionTypes.SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };

    case ThemeActionTypes.SET_ACCENT:
      return {
        ...state,
        accent: action.payload,
      };

    case ThemeActionTypes.UPDATE_ACCESSIBILITY:
      return {
        ...state,
        accessibility: {
          ...state.accessibility,
          ...action.payload,
        },
      };

    case ThemeActionTypes.HYDRATE:
      return action.payload;

    case ThemeActionTypes.RESET:
      return DEFAULT_THEME;

    default: {
      const exhaustive: never = action;
      return exhaustive;
    }
  }
}
