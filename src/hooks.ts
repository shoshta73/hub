import { useEffect } from "react";
import { useStateStore } from "./stores";

export function useAutoSort() {
  const sortTodos = useStateStore().sortTodos;
  useEffect(() => {
    const interval = setInterval(() => {
      sortTodos();
    }, 10000);
    return () => clearInterval(interval);
  });
}
