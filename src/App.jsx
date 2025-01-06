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
 * @param {{ items: Todo[]}} props - List of todo items
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

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <ItemsList items={todos} />
    </div>
  );
}

export default App;
