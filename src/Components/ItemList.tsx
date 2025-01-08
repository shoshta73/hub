import type { JSX } from "react";

import type { Todo } from "../types";
import Item from "./Item";

/**
 * Renders list of todo items
 *
 * @param items - List of todo items
 *
 * @returns Rendered list of todo items
 */
export default function ItemsList({
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
