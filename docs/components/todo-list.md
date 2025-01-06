# TodoList

This component is used to display a list of todos.

## Parameters

- `todos`: The list of todos to display.

```ts
interface params {
  todos: Todo[];
}
```

## Declaration

```ts
function ItemsList({ items }: {
    items: Todo[];
}): React.JSX.Element
```

## Usage

```jsx
<ItemsList items={todos} />
```

## Definition

```jsx
function ItemsList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
```
