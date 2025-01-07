import { type FormEvent, useRef, useState } from "react";

type Todo = {
  title: string;
  status: number;
  id: string;
};

/**
 * Renders list of todo items
 *
 * @param {Object} params - List of todo items
 * @param {Todo[]} params.items - List of todo items
 *
 * @returns {React.JSX.Element}
 */
function ItemsList({
  items,
}: {
  items: Todo[];
}): React.JSX.Element {
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
 * @param {(Todo) => void} props.addTodo - Function for adding new todo item
 *
 * @returns {React.JSX.Element}
 * @throws {Error} addTodo function is required
 */
function AddItemForm({
  addTodo,
}: {
  addTodo: (todo: Todo) => void;
}): React.JSX.Element {
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
  const [todos, setTodos] = useState<Todo[]>([
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
  const addTodo = (todo: Todo): void => {
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
