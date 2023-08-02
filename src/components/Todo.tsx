import TodoProps from "../utils/TodoProps";

function Todo({
  description,
  creationDate,
  dueDate,
  status,
}: TodoProps): JSX.Element {
  return (
    <div className="todo-item">
      <p className="description">{description}</p>
      <p className="creation date">Created: {creationDate}</p>
      <p className="due date">Due: {dueDate}</p>
      <p className="status">
        Status: <span className="color">{status}</span>
      </p>
    </div>
  );
}

export default Todo;
