import { useRef } from "react";

/**
 * @typedef {Object} Todo - Todo object
 * @property {string} title - Todo title
 * @property {number} status - Todo status (0: pending, 1: paused, 2: done)
 * @property {string} id - Todo id
 */

/** @type {Todo[]} */
const todos = [
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
];

/**
 * Renders list of todo items
 *
 * @param {Object} params - List of todo items
 * @param {Todo[]} params.items - List of todo items
 */
function ItemsList({ items }) {
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
 */
function AddItemForm() {
  /** @type {React.RefObject<HTMLInputElement>} @default null */
  const inputRef = useRef(null);

  /**
   * Handles form submit
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value;

    todos.push({
      title,
      status: 0,
      id: (todos.length + 1).toString(),
    });

    inputRef.current.value = "";

    console.log(todos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Enter todo title" />
      <button type="submit">Add</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <AddItemForm />
      <ItemsList items={todos} />
    </div>
  );
}

export default App;
