export enum TodoStatus {
  Pending = 0,
  Paused = 1,
  Completed = 2,
}

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export function isTodoStatus(status: number): status is TodoStatus {
  return status >= 0 && status <= 2;
}

/**
 * Type for item representation
 */
export type Todo = {
  /**
   * Title of the todo item
   */
  title: string;

  /**
   * 0 - pending
   * 1 - paused
   * 2 - completed
   */
  status: TodoStatus;

  /**
   * Timestamp of the creation
   */
  createdAt: number;

  /**
   * Timestamp of the last update
   */
  updatedAt: number;

  /**
   * Unique identifier
   */
  id: string;
};

/**
 * Type for app state storage
 */
export type State = {
  /**
   * List of todo items
   */
  todos: Todo[];

  /**
   * Current theme mode
   */
  themeMode: ThemeMode;
};

export type StateRepresentation = { state: State; version: number };

/**
 * Type for app actions
 */
type Actions = {
  /**
   * Adds new todo item to the list
   *
   * @param {Todo} todo - Todo item to add
   * @returns {void}
   */
  addTodo: (todo: Todo) => void;

  /**
   * Completes todo item with given id
   *
   * @param {string} id - Id of the todo item to complete
   * @returns {void}
   */
  completeTodo: (id: string) => void;

  /**
   * Pauses todo item with given id
   *
   * @param {string} id - Id of the todo item to pause
   * @returns {void}
   */
  pauseTodo: (id: string) => void;

  /**
   * Resumes todo item with given id
   *
   * @param {string} id - Id of the todo item to resume
   * @returns {void}
   */
  resumeTodo: (id: string) => void;

  /**
   * Deletes todo item with given id
   *
   * @param {string} id - Id of the todo item to delete
   * @returns {void}
   */
  deleteTodo: (id: string) => void;

  /**
   * Toggles theme mode
   *
   * @returns {void}
   */
  toggleThemeMode: () => void;
};

/**
 * Amalgamated type for app state and actions
 */
export type StateStore = State & Actions;
