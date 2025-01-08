import type { FormEvent, JSX } from "react";
import { useRef } from "react";

import type { Todo } from "./types";
import { useStateStore } from "./stores";
import Item from "./Components/Item";

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
        <Item key={item.id} item={item} />
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
    <form className="mb-4 flex flex-row border-gray-500 border-b px-2" onSubmit={handleSubmit}>
      <input
        className="my-2 flex h-16 min-w-[60%] bg-gray-100 px-2 text-2xl text-gray-800 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
        ref={inputRef}
        type="text"
        placeholder="Enter todo title"
      />
      <div id="add-item-form-spacer" className="flex-1 border-gray-500 border-r" />
      <button type="submit" className="my-2 ml-2 flex h-16 min-w-16 items-center justify-center">
        Add
      </button>
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
