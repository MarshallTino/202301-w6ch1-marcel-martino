import { toggleToDosisDoneActionCreator } from "../../store/features/todo/todosSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/genericButton";

interface ToggleButonProps {
  id: number;
}
const ToggleButton = ({ id }: ToggleButonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleToDo = () => {
    dispatch(toggleToDosisDoneActionCreator(id));
  };

  return <Button className="togglebutton" text={"done"} action={toggleToDo} />;
};

export default ToggleButton;
