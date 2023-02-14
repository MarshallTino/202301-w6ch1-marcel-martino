import { loadToDosActionCreator } from "../store/features/todo/todosSlice";
import { useAppDispatch } from "../store/hooks";
import { ToDosStructure } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = "https://backend-to-do-list-5t02.onrender.com/toDoList";

  const loadTodos = async () => {
    const response = await fetch(apiUrl);
    const todosArray = (await response.json()) as ToDosStructure;
    dispatch(loadToDosActionCreator(todosArray));
  };
  return { loadTodos };
};

export default useApi;
