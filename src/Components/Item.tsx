import { CheckIcon, PauseIcon, RotateCcwIcon, TrashIcon } from "lucide-react";
import { isTodoStatus, TodoStatus, type Todo } from "../types";
import classNames from "classnames";
import { useStateStore } from "../stores";

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
  const completeItem = useStateStore().completeTodo;
  const pauseItem = useStateStore().pauseTodo;
  const resumeItem = useStateStore().resumeTodo;
  const deleteItem = useStateStore().deleteTodo;

  if (!isTodoStatus(item.status)) {
    throw new Error("Invalid todo status");
  }

  const itemClassName = classNames({
    "mb-2 flex flex-row border-gray-500 border-y bg-gray-100 p-2 dark:bg-gray-900 text-xl font-bold min-h-16 items-center": true,
    "text-green-500": item.status === TodoStatus.Completed,
    "text-yellow-500": item.status === TodoStatus.Paused,
    "text-red-500": item.status === TodoStatus.Pending,
  });

  return (
    <div className={itemClassName}>
      <div>{item.title}</div>
      <div id="item-spacer" className="flex-1" />
      <button
        id={`delete-item-${item.id}`}
        title={"Delete"}
        type="button"
        onClick={() => deleteItem(item.id)}
        className="text-red-500"
      >
        <TrashIcon className="mx-2 h-8 w-8" />
      </button>
      {item.status !== TodoStatus.Pending && (
        <button
          id={`resume-item-${item.id}`}
          title={"Resume"}
          type="button"
          onClick={() => resumeItem(item.id)}
          className="text-orange-500"
        >
          <RotateCcwIcon className="mx-2 h-8 w-8" />
        </button>
      )}
      {item.status !== TodoStatus.Paused && item.status !== TodoStatus.Completed && (
        <button
          id={`pause-item-${item.id}`}
          title={"Pause"}
          type="button"
          onClick={() => pauseItem(item.id)}
          className="text-yellow-500"
        >
          <PauseIcon className="mx-2 h-8 w-8" />
        </button>
      )}
      {item.status !== TodoStatus.Completed && (
        <button
          id={`complete-item-${item.id}`}
          title={"Complete"}
          type="button"
          onClick={() => completeItem(item.id)}
          className="text-green-500"
        >
          <CheckIcon className="mx-2 h-8 w-8" />
        </button>
      )}
    </div>
  );
}
