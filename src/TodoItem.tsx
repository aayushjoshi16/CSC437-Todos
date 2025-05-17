import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  id: string;
  name: string;
  completed: boolean;
  handleCheckTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

function TodoItem({ id, name, completed, handleCheckTask, handleDeleteTask }: TodoItemProps) {
  return (
    <li className="flex items-center py-1 cursor-pointer">
      <label className="pr-10">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleCheckTask(id)}
        />{" "}
        {name}
      </label>
      <button
        onClick={() => handleDeleteTask(id)}
        className="text-gray-500 cursor-pointer"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

export default TodoItem;
