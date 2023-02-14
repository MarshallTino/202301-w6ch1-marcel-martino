import { useCallback } from "react";
import { loadToDosActionCreator } from "../store/features/todo/todosSlice";
import { useAppDispatch } from "../store/hooks";
import { ToDosStructure, ToDoStructure } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = "https://backend-to-do-list-5t02.onrender.com/toDoList";

  const loadTodos = useCallback(async () => {
    const response = await fetch(apiUrl);
    const todosArray = (await response.json()) as ToDosStructure;
    dispatch(loadToDosActionCreator(todosArray));
  }, [dispatch]);

  const deleteToDo = useCallback(async (id: number) => {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  }, []);

  const toggleTodo = useCallback(async (toDo: ToDoStructure) => {
    await fetch(`${apiUrl}/${toDo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...toDo,
        isDone: !toDo.isDone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }, []);

  return { loadTodos, deleteToDo, toggleTodo };
};

export default useApi;
