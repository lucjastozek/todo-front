import TodoProps from "../utils/TodoProps";
import axios from "axios";
import fetchTodos from "../utils/fetchTodos";
import { useState } from "react";
import moment from "moment";

interface TodoAddProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

function TodoAdd({ setTodos }: TodoAddProps): JSX.Element {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("2023-08-02");
  const [detail, setDetail] = useState(false);

  function handleAdd() {
    (async () => {
      const todo = {
        description: description,
        dueDate: moment(date, "YYYY-MM-DD").format("DD/MM/YYYY"),
      };
      await axios.post("https://todo-backend-r4rc.onrender.com/items", todo);
      await fetchTodos(setTodos);
      setDescription("");
      setDate("2023-08-02");
    })();
  }

  return (
    <div className="todo-add">
      <div className="inputs">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a new Todo..."
          id="todo-description"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />{" "}
        {detail && (
          <div className="add-due">
            <label htmlFor="todo-due">Due date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="todo-due"
            />
          </div>
        )}
      </div>
      <button className="info" onClick={() => setDetail((prev) => !prev)}>
        {detail ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-ellipsis-vertical"></i>
        )}
      </button>
      <button onClick={handleAdd} className="add">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoAdd;
