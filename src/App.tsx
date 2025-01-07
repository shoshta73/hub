import type { FormEvent, JSX } from "react";
import { useRef } from "react";
import { create } from "zustand";

/**
 * Type for item representation
 */
type Todo = {
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
 * Creates a store for app state and actions
 *
 * @returns State and actions
 */
const useStateStore = create<State & Actions>()((set) => ({
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

/**
 * Renders list of todo items
 *
 * @param items - List of todo items
 *
 * @returns Rendered list of todo items
 */
function ItemsList({
  items,
}: {
  items: Todo[];
}): JSX.Element {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

/**
 * Renders form for adding new todo item
 *
 * It will throw an error if addTodo function is not provided
 * as a prop, with error message "addTodo function is required"
 *
 * @param addTodo - Function for adding new todo item
 *
 * @returns Rendered form
 * @throws Error with message "addTodo function is required"
 */
function AddItemForm({
  addTodo,
}: {
  addTodo: (todo: Todo) => void;
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  if (!addTodo) {
    throw new Error("addTodo function is required");
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) {
      return;
    }

    const title = inputRef.current.value;

    addTodo({
      title,
      status: 0,
      id: new Date().getTime().toString(),
    });

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Enter todo title" />
      <button type="submit">Add</button>
    </form>
  );
}

function App() {
  const { todos, addTodo } = useStateStore();

  return (
    <div>
      <AddItemForm addTodo={addTodo} />
      <ItemsList items={todos} />
    </div>
  );
}

export default App;
