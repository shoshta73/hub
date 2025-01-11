import type { FormEvent, JSX } from "react";
import { useRef } from "react";

import type { Todo } from "../types";
import { PlusIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

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
export default function AddItemForm({
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

    const timeNow = new Date().getTime();

    addTodo({
      title,
      status: 0,
      createdAt: timeNow,
      updatedAt: timeNow,
      id: uuidv4(),
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
      <button
        type="submit"
        className="my-2 ml-2 flex h-16 min-w-16 items-center justify-center"
        title="Add item button"
      >
        <PlusIcon className="h-8 w-8" />
      </button>
    </form>
  );
}
