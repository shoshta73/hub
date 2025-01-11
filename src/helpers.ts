import type { State, Todo } from "./types";

/**
 * Updates state with given updates
 *
 * @param state - Current state
 * @param updates - Updates to apply
 *
 * @returns Updated state
 */
export function updateState(state: State, updates: Partial<State>): State {
  return { ...state, ...updates };
}

/**
 * Updates todo item with given id with given updates
 *
 * @param todos - List of todo items
 * @param id - Id of the todo item to update
 * @param updates - Updates to apply
 *
 * @returns Updated list of todo items
 */
export function updateTodo(todos: Todo[], id: string, updates: Partial<Todo>): Todo[] {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, ...updates, updatedAt: new Date().getTime() };
    }
    return todo;
  });
}

/**
 * Removes todo item with given id from list of todo items
 *
 * @param todos - List of todo items
 * @param id - Id of the todo item to remove
 *
 * @returns Updated list of todo items
 */
export function removeTodo(todos: Todo[], id: string): Todo[] {
  const newTodos: Todo[] = [];
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (todo.id !== id) {
      newTodos.push(todo);
    }
  }
  return newTodos;
}
