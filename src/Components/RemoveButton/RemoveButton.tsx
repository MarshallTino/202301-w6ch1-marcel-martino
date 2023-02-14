import useApi from "../../hooks/useApi";
import { removeToDosActionCreator } from "../../store/features/todo/todosSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/genericButton";
interface RemoveButtonProps {
  id: number;
}
const RemoveButton = ({ id }: RemoveButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { deleteToDo } = useApi();

  const removeTodo = async () => {
    dispatch(removeToDosActionCreator(id));
    await deleteToDo(id);
  };

  return (
    <Button className="remove__todo button" text={"🗑️"} action={removeTodo} />
  );
};

export default RemoveButton;
