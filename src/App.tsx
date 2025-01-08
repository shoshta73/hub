import { useStateStore } from "./stores";
import ItemsList from "./Components/ItemList";
import AddItemForm from "./Components/AddItemForm";

function App() {
  const { todos, addTodo } = useStateStore();

  return (
    <div>
      <AddItemForm addTodo={addTodo} />
      <ItemsList items={todos} />
    </div>
  );
}

export default App;
