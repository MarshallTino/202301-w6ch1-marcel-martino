import { ToDoStructure } from "../../types";
import RemoveButton from "../RemoveButton/RemoveButton";
import ToggleButton from "../ToggleButton/ToggleButton";

interface ToDoCardProps {
  toDo: ToDoStructure;
}

const ToDoCard = ({
  toDo: { id, name, isDone },
}: ToDoCardProps): JSX.Element => {
  return (
    <div className="toDo">
      <h2 className="toDo__name">{name}</h2>
      <RemoveButton id={id} />
      <ToggleButton id={id} isDone={isDone} />
    </div>
  );
};

export default ToDoCard;
