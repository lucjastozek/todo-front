import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoProps from "./utils/TodoProps";
import "./styles.css";
import fetchTodos from "./utils/fetchTodos";

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  return (
    <div className="app">
      <h1>Todo ✅</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
