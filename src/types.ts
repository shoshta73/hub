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
  status: number;

  /**
   * Unique identifier
   */
  id: string;
};

/**
 * Type for app state storage
 */
type State = {
  /**
   * List of todo items
   */
  todos: Todo[];
};

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
};

/**
 * Amalgamated type for app state and actions
 */
export type StateStore = State & Actions;
