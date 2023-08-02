import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoProps from "./utils/TodoProps";
import "./styles.css";

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(
        `https://todo-backend-r4rc.onrender.com/items`
      );
      const jsonBody = await response.json();

      setTodos(jsonBody);
    }

    fetchTodos();
  }, []);

  return (
    <div className="app">
      <h1>Todo ✅</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
