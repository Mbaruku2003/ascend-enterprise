export type ThemeMode =
  | "light"
  | "dark"
  | "system";

export type AccentColor =
  | "indigo"
  | "purple"
  | "cyan";

export interface ThemeState {
  mode: ThemeMode;
  accent: AccentColor;
  reducedMotion: boolean;
  highContrast: boolean;
}
