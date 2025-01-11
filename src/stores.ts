import { create } from "zustand";

import { type Todo, type StateStore, TodoStatus, ThemeMode, type StateRepresentation } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import { removeTodo, updateState, updateTodo } from "./helpers";

/**
 * Creates a store for app state and actions
 *
 * @returns State and actions
 */
export const useStateStore = create<StateStore>()(
  persist(
    (set) => {
      const savedStateRepresentation: StateRepresentation = (() => {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
          return null;
        }
        return JSON.parse(serializedState);
      })();

      const themeMode: ThemeMode = (() => {
        if (window.matchMedia) {
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return ThemeMode.Dark;
          }
          return ThemeMode.Light;
        }
        return ThemeMode.Dark;
      })();

      const state = savedStateRepresentation?.state ?? {
        todos: [],
        themeMode: themeMode,
      };

      return {
        ...state,
        addTodo: (todo: Todo): void => {
          set((state) => {
            return updateState(state, { todos: [...state.todos, todo] });
          });
        },
        completeTodo: (id: string): void => {
          set((state) => {
            return updateState(state, {
              todos: updateTodo(state.todos, id, { status: TodoStatus.Completed }),
            });
          });
        },
        pauseTodo: (id: string): void => {
          set((state) => {
            return updateState(state, {
              todos: updateTodo(state.todos, id, { status: TodoStatus.Paused }),
            });
          });
        },
        resumeTodo: (id: string): void => {
          set((state) => {
            return updateState(state, {
              todos: updateTodo(state.todos, id, { status: TodoStatus.Pending }),
            });
          });
        },
        deleteTodo: (id: string): void => {
          set((state) => {
            return updateState(state, { todos: removeTodo(state.todos, id) });
          });
        },
        toggleThemeMode: (): void => {
          set((state) => {
            return updateState(state, {
              themeMode: state.themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark,
            });
          });
        },
      };
    },
    {
      name: "state",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
