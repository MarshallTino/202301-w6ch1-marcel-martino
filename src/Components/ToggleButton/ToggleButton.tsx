import useApi from "../../hooks/useApi";
import { toggleToDosisDoneActionCreator } from "../../store/features/todo/todosSlice";
import { useAppDispatch } from "../../store/hooks";
import { ToDoStructure } from "../../types";
import Button from "../Button/genericButton";

interface ToggleButonProps {
  id: number;
  isDone: boolean;
  todo: ToDoStructure;
}
const ToggleButton = ({ id, isDone, todo }: ToggleButonProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { toggleTodo } = useApi();
  const toggleToDo = async () => {
    await toggleTodo(todo);
    dispatch(toggleToDosisDoneActionCreator(id));
  };

  return (
    <Button
      className="togglebutton"
      text={isDone ? "done" : "to do"}
      action={toggleToDo}
    />
  );
};

export default ToggleButton;
