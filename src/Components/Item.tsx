import { isTodoStatus, type Todo } from "../types";

/**
 * Renders todo item
 *
 * If todo item status is invalid, it will throw an error with message "Invalid todo status"
 *
 * @param item - Todo item
 *
 * @returns Rendered todo item
 * @throws Error with message "Invalid todo status"
 */
export default function Item({ item }: { item: Todo }) {
  if (!isTodoStatus(item.status)) {
    throw new Error("Invalid todo status");
  }

  return (
    <div className="mb-2 flex flex-row border-gray-500 border-y bg-gray-100 p-2 dark:bg-gray-900">
      <div>{item.title}</div>
    </div>
  );
}
