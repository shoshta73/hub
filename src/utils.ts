import { type State, type StateRepresentation, ThemeMode } from "./types";

/**
 * Gets default theme mode
 * If no preference found, returns dark mode
 * @returns Default theme mode
 */
export function getDefaultThemeMode(): ThemeMode {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return ThemeMode.Dark;
    }
    return ThemeMode.Light;
  }
  return ThemeMode.Dark;
}

/**
 * Gets saved state from local storage
 * If no state found, returns null
 * @returns Saved state or null
 */
export function getSavedState(): State | null {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) {
    return null;
  }
  return (JSON.parse(serializedState) as StateRepresentation).state;
}
