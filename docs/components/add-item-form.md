# AddItemForm

This component is used to add a new todo item.

## Declaration

```ts
function AddItemForm(): React.JSX.Element
```

## Usage

```jsx
<AddItemForm />
```

## Definition

```jsx
function AddItemForm() {
  /** @type {React.RefObject<HTMLInputElement>} @default null */
  const inputRef = useRef(null);

  /**
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
```
