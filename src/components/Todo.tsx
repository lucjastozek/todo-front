import TodoProps from "../utils/TodoProps";
import axios from "axios";
import fetchTodos from "../utils/fetchTodos";
import { useState } from "react";

interface TodoItemProps {
  todo: TodoProps;
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

function Todo({ todo, setTodos }: TodoItemProps): JSX.Element {
  const { description, creationDate, dueDate, status, id } = todo;
  const [detail, setDetail] = useState(false);

  function handleDelete() {
    (async () => {
      await axios.delete(`https://todo-backend-r4rc.onrender.com/items/${id}`);
      await fetchTodos(setTodos);
    })();
  }

  function handleStatusChange(status: string) {
    (async () => {
      await axios.put(`https://todo-backend-r4rc.onrender.com/items/${id}`, {
        status: status,
      });
      await fetchTodos(setTodos);
    })();
  }

  return (
    <div className={"todo-item " + status}>
      <p className="description">{description}</p>

      <div className="button-container">
        <button className="info" onClick={() => setDetail((prev) => !prev)}>
          {detail ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-info"></i>
          )}
        </button>
        <button
          className="check"
          onClick={() => {
            if (status !== "complete") {
              handleStatusChange("complete");
            } else {
              handleStatusChange("in progress");
            }
          }}
        >
          {status === "complete" ? (
            <i className="fa-solid fa-arrow-rotate-left"></i>
          ) : (
            <i className="fa-solid fa-check"></i>
          )}
        </button>
        <button className="delete" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      {detail && (
        <div className="details">
          <p>ID: {id}</p>
          <p className="creation date">Created: {creationDate}</p>
          <p className="due date">Due: {dueDate}</p>
          <p className="status">
            Status:{" "}
            <select
              onChange={(e) => handleStatusChange(e.target.value)}
              value={status}
              className={"status " + status}
            >
              <option>new</option>
              <option>in progress</option>
              <option>complete</option>
            </select>
          </p>
        </div>
      )}
    </div>
  );
}

export default Todo;
