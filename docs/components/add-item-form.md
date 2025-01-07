# AddItemForm

This component is used to add a new todo item.

## Parameters

- `addTodo`: A function that adds a new todo item to the list.

```ts
interface params {
  addTodo: (todo: Todo) => void;
}
```

## Declaration

```ts
function AddItemForm({ addTodo }: {
    addTodo: () => void;
}): React.JSX.Element
```

## Usage

```jsx
const addTodo = (todo) => {
  todos = [...todos, todo];
};

<AddItemForm addTodo={addTodo} />
```

## Definition

```jsx
/**
 * @param {Object} props - Form props
 * @param {() => void} props.addTodo - Function for adding new todo item
 */
function AddItemForm({ addTodo }) {
  /** @type {React.RefObject<HTMLInputElement>} @default null */
  const inputRef = useRef(null);

  if (!addTodo) {
    throw new Error("addTodo function is required");
  }

  /**
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
```
