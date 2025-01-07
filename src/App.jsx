import { useRef, useState } from "react";

/**
 * @typedef {Object} Todo - Todo object
 * @property {string} title - Todo title
 * @property {number} status - Todo status (0: pending, 1: paused, 2: done)
 * @property {string} id - Todo id
 */

/**
 * Renders list of todo items
 *
 * @param {Object} params - List of todo items
 * @param {Todo[]} params.items - List of todo items
 *
 * @returns {React.JSX.Element}
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
 *
 * It will throw an error if addTodo function is not provided
 * as a prop, with error message "addTodo function is required"
 *
 * @param {Object} props - Form props
 * @param {() => void} props.addTodo - Function for adding new todo item
 *
 * @returns {React.JSX.Element}
 * @throws {Error} addTodo function is required
 */
function AddItemForm({ addTodo }) {
  /** @type {React.RefObject<HTMLInputElement>} @default null */
  const inputRef = useRef(null);

  if (!addTodo) {
    throw new Error("addTodo function is required");
  }

  /**
   * Handles form submit
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
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
  /**
   * @type {[Todo[], React.Dispatch<React.SetStateAction<Todo[]>>]}
   */
  const [todos, setTodos] = useState([
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
  ]);

  /**
   * Adds new todo item to the list
   *
   * @param {Todo} todo - Todo item to add
   * @returns {void}
   */
  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  return (
    <div>
      <AddItemForm addTodo={addTodo} />
      <ItemsList items={todos} />
    </div>
  );
}

export default App;
