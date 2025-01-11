import type { State, Todo } from "./types";

export function updateState(state: State, updates: Partial<State>): State {
  return { ...state, ...updates };
}

export function updateTodo(todos: Todo[], id: string, updates: Partial<Todo>): Todo[] {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, ...updates, updatedAt: new Date().getTime() };
    }
    return todo;
  });
}

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
