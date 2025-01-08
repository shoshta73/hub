import { create } from "zustand";

import type { Todo, StateStore } from "./types";

/**
 * Creates a store for app state and actions
 *
 * @returns State and actions
 */
export const useStateStore = create<StateStore>()((set) => ({
  todos: [
    {
      title: "Buy milk",
      status: 0,
      id: "1",
    },
    {
      title: "Buy bread",
      status: 0,
      id: "2",
    },
    {
      title: "Buy eggs",
      status: 0,
      id: "3",
    },
  ],
  addTodo: (todo: Todo): void => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
}));
