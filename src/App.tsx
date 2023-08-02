import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoProps from "./utils/TodoProps";
import "./styles.css";
import fetchTodos from "./utils/fetchTodos";
import axios from "axios";

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  function handleAdd() {
    (async () => {
      const todo = { description: "congratulate yourself for adding a Todo" };
      await axios.post("https://todo-backend-r4rc.onrender.com/items", todo);
      await fetchTodos(setTodos);
    })();
  }

  return (
    <div className="app">
      <h1>Todo ✅</h1>
      <button onClick={handleAdd} className="add">
        Add a Todo!
      </button>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
