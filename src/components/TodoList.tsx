import TodoProps from "../utils/TodoProps";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps): JSX.Element {
  return (
    <div className="todo-list">
      {todos.map((todo: TodoProps) => (
        <Todo todo={todo} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
