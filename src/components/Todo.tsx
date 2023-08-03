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
      <p className="description">
        {description} {id}
      </p>
      <p className="creation date">Created: {creationDate}</p>
      <p className="due date">Due: {dueDate}</p>
      <p className="status">
        Status:{" "}
        <select
          onChange={(e) => handleStatusChange(e.target.value)}
          value={status}
          className={"status " + status}
        >
          {" "}
          <option>
            <span className="status new">new</span>
          </option>
          <option>
            <span className="status in">in progress</span>
          </option>
          <option>
            <span className="status complete">complete</span>
          </option>
        </select>
      </p>
      <div className="button-container">
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
