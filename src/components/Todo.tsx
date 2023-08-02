import TodoProps from "../utils/TodoProps";
import axios from "axios";
import fetchTodos from "../utils/fetchTodos";

interface TodoItemProps {
  todo: TodoProps;
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

function Todo({ todo, setTodos }: TodoItemProps): JSX.Element {
  const { description, creationDate, dueDate, status, id } = todo;

  function handleDelete() {
    (async () => {
      await axios.delete(`https://todo-backend-r4rc.onrender.com/items/${id}`);
      await fetchTodos(setTodos);
    })();
  }

  function handleInPro() {
    (async () => {
      await axios.put(`https://todo-backend-r4rc.onrender.com/items/${id}`, {
        status: "in progress",
      });
      await fetchTodos(setTodos);
    })();
  }

  function handleComplete() {
    (async () => {
      await axios.put(`https://todo-backend-r4rc.onrender.com/items/${id}`, {
        status: "complete",
      });
      await fetchTodos(setTodos);
    })();
  }

  function handleNew() {
    (async () => {
      await axios.put(`https://todo-backend-r4rc.onrender.com/items/${id}`, {
        status: "new",
      });
      await fetchTodos(setTodos);
    })();
  }

  return (
    <div className={"todo-item " + status}>
      <p className="description">
        {description} {id}
      </p>
      <p className="creation date">Created: {creationDate}</p>
      <p className="due date">Due: {dueDate}</p>
      <p className="status">
        Status: <span className={"color " + status}>{status}</span>
      </p>
      <div className="button-container">
        {status !== "new" && (
          <button className="status new" onClick={handleNew}>
            Change status to new
          </button>
        )}
        {status !== "in progress" && (
          <button className="status in" onClick={handleInPro}>
            Change status to in progress
          </button>
        )}{" "}
        {status !== "complete" && (
          <button className="status complete" onClick={handleComplete}>
            Change status to complete
          </button>
        )}
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
