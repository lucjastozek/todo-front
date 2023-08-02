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

  return (
    <div className="todo-item">
      <p className="description">
        {description} {id}
      </p>
      <p className="creation date">Created: {creationDate}</p>
      <p className="due date">Due: {dueDate}</p>
      <p className="status">
        Status: <span className="color">{status}</span>
      </p>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
      <button className="add" onClick={handleInPro}>
        Change status to in progress
      </button>
    </div>
  );
}

export default Todo;
