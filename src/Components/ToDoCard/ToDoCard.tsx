import { ToDoStructure } from "../../types";
import RemoveButton from "../RemoveButton/RemoveButton";
import ToggleButton from "../ToggleButton/ToggleButton";

interface ToDoCardProps {
  toDo: ToDoStructure;
  toDoo: ToDoStructure;
}

const ToDoCard = ({
  toDo: { id, name, isDone },
  toDoo,
}: ToDoCardProps): JSX.Element => {
  return (
    <div className="toDo">
      <h2 className="toDo__name">{name}</h2>
      <RemoveButton id={id} />
      <ToggleButton id={id} isDone={isDone} todo={toDoo} />
    </div>
  );
};

export default ToDoCard;
