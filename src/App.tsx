import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoProps from "./utils/TodoProps";
import "./styles.css";
import fetchTodos from "./utils/fetchTodos";
import TodoAdd from "./components/AddTodo";
import Menu from "./components/Menu";
import moment from "moment";

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [sortOption, setSortOption] = useState("creationDate");
  const [overChecked, setOverChecked] = useState(false);
  const [compChecked, setCompChecked] = useState(false);
  const [displayedTodos, setDisplayedTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    let arr = [...todos];
    if (overChecked) {
      arr = arr.filter(
        (item) =>
          moment(item.dueDate, "DD/MM/YYYY").diff(
            moment(moment(), "DD/MM/YYYY")
          ) >= 0
      );
    }

    if (compChecked) {
      arr = arr.filter((item) => item.status !== "complete");
    }

    if (sortOption === "name") {
      arr.sort((a, b) => (a.description > b.description ? 1 : -1));
    } else if (sortOption === "creationDate") {
      arr.sort((a, b) =>
        moment(a.creationDate, "DD/MM/YYYY").diff(
          moment(b.creationDate, "DD/MM/YYYY")
        )
      );
    } else if (sortOption === "dueDate") {
      arr.sort((a, b) =>
        moment(a.dueDate, "DD/MM/YYYY").diff(moment(b.dueDate, "DD/MM/YYYY"))
      );
    }

    setDisplayedTodos(arr);
  }, [todos, compChecked, overChecked, sortOption]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  return (
    <div className="app">
      <div className="sticky">
        {/* <h1>Todo ✅</h1> */}
        <TodoAdd setTodos={setTodos} />
        <Menu
          sortOption={sortOption}
          setSortOption={setSortOption}
          overChecked={overChecked}
          setOverChecked={setOverChecked}
          compChecked={compChecked}
          setCompChecked={setCompChecked}
        />
      </div>
      <TodoList todos={displayedTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
