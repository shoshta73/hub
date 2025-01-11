import { create } from "zustand";

import { type Todo, type StateStore, TodoStatus } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * Creates a store for app state and actions
 *
 * @returns State and actions
 */
export const useStateStore = create<StateStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: Todo): void => {
        set((state) => ({
          todos: [...state.todos, todo],
        }));
      },
      completeTodo: (id: string): void => {
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === id ? { ...item, updatedAt: new Date().getTime(), status: TodoStatus.Completed } : item,
          ),
        }));
      },
      pauseTodo: (id: string): void => {
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === id ? { ...item, updatedAt: new Date().getTime(), status: TodoStatus.Paused } : item,
          ),
        }));
      },
      resumeTodo: (id: string): void => {
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === id ? { ...item, updatedAt: new Date().getTime(), status: TodoStatus.Pending } : item,
          ),
        }));
      },
      deleteTodo: (id: string): void => {
        set((state) => ({
          todos: (() => {
            const newTodos: Todo[] = [];
            for (let i = 0; i < state.todos.length; i++) {
              const todo = state.todos[i];
              if (todo.id !== id) {
                newTodos.push(todo);
              }
            }
            return newTodos;
          })(),
        }));
      },
    }),
    {
      name: "state",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
