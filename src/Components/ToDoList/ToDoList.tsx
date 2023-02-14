import { useEffect } from "react";
import useApi from "../../hooks/useApi";

import { useAppSelector } from "../../store/hooks";
import ToDoCard from "../ToDoCard/ToDoCard";

const ToDoList = (): JSX.Element => {
  const { loadTodos } = useApi();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);
  const toDos = useAppSelector((state) => state.toDos);

  return (
    <ul className="todos">
      {toDos.map((todo) => (
        <li key={todo.id}>
          <ToDoCard toDo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
