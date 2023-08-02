import axios from "axios";
import TodoProps from "./TodoProps";

async function fetchTodos(
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
) {
  const response = await axios.get(
    `https://todo-backend-r4rc.onrender.com/items`
  );

  const jsonBody = response.data;

  setTodos(jsonBody);
}

export default fetchTodos;
