import { type State, type StateRepresentation, ThemeMode } from "./types";

export function getDefaultThemeMode(): ThemeMode {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return ThemeMode.Dark;
    }
    return ThemeMode.Light;
  }
  return ThemeMode.Dark;
}

export function getSavedState(): State | null {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) {
    return null;
  }
  return (JSON.parse(serializedState) as StateRepresentation).state;
}
