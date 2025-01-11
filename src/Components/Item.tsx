import { isTodoStatus, TodoStatus, type Todo } from "../types";
import classNames from "classnames";

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

  const className = classNames({
    "mb-2 flex flex-row border-gray-500 border-y bg-gray-100 p-2 dark:bg-gray-900 text-xl font-bold": true,
    "text-green-500": item.status === TodoStatus.Completed,
    "text-yellow-500": item.status === TodoStatus.Paused,
    "text-scarlet-500": item.status === TodoStatus.Pending,
  });

  return (
    <div className={className}>
      <div>{item.title}</div>
    </div>
  );
}
