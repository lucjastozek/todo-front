import TodoProps from "../utils/TodoProps";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoProps[];
}

function TodoList({ todos }: TodoListProps): JSX.Element {
  return (
    <div className="todo-list">
      {todos.map((todo: TodoProps) => (
        <Todo
          description={todo.description}
          creationDate={todo.creationDate}
          dueDate={todo.creationDate}
          status={todo.status}
          id={todo.id}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
