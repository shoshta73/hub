# Todo

This type is used to represent a todo item.
It contains the following properties:

- `id`: The id of the todo item.
- `title`: The title of the todo item.
- `status`: The status of the todo item, which can be either `0`, `1` or `2`.

it is defined as follows:

```ts
type Todo = {
  title: string;
  status: number;
  id: string;
};
```

## Status

The status of the todo item can be one of the following:

- `0`: The todo item is pending.
- `1`: The todo item is paused.
- `2`: The todo item is completed.
