import { create } from "zustand";

import { type Todo, type StateStore, TodoStatus, ThemeMode } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import { removeTodo, updateState, updateTodo } from "./helpers";
import { getDefaultThemeMode, getSavedState } from "./utils";

/**
 * Creates a store for app state and actions
 *
 * @returns State and actions
 */
export const useStateStore = create<StateStore>()(
  persist(
    (set) => {
      const state = getSavedState() ?? {
        todos: [],
        themeMode: getDefaultThemeMode(),
      };

      return {
        ...state,
        addTodo: (todo: Todo): void => {
          set((state) => updateState(state, { todos: [...state.todos, todo] }));
        },
        completeTodo: (id: string): void => {
          set((state) =>
            updateState(state, {
              todos: updateTodo(state.todos, id, { status: TodoStatus.Completed }),
            }),
          );
        },
        pauseTodo: (id: string): void => {
          set((state) =>
            updateState(state, {
              todos: updateTodo(state.todos, id, { status: TodoStatus.Paused }),
            }),
          );
        },
        resumeTodo: (id: string): void => {
          set((state) =>
            updateState(state, {
              todos: updateTodo(state.todos, id, { status: TodoStatus.Pending }),
            }),
          );
        },
        deleteTodo: (id: string): void => {
          set((state) => updateState(state, { todos: removeTodo(state.todos, id) }));
        },
        toggleThemeMode: (): void => {
          set((state) =>
            updateState(state, {
              themeMode: state.themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark,
            }),
          );
        },
      };
    },
    {
      name: "state",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
