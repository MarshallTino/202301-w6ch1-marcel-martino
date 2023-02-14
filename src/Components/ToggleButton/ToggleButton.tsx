import { toggleToDosisDoneActionCreator } from "../../store/features/todo/todosSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/genericButton";

interface ToggleButonProps {
  id: number;
  isDone: boolean;
}
const ToggleButton = ({ id, isDone }: ToggleButonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleToDo = () => {
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
