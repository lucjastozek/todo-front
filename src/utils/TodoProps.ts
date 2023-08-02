interface TodoProps {
  description: string;
  creationDate: string;
  dueDate: string;
  status: "new" | "in progress" | "complete";
  id: number;
}

export default TodoProps;
