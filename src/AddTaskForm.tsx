import { useState, ChangeEvent, FormEvent } from "react";

interface AddTaskFormProps {
  handleAddTask: (taskName: string) => void;
}

function AddTaskForm({ handleAddTask }: AddTaskFormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle adding a new task
  const handleAddClick = (): void => {
    handleAddTask(inputValue);
    setInputValue(""); // Clear the input field
  };

  // Function to handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAddClick();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="New task"
        className="border p-1 flex-grow"
        onChange={handleInputChange}
        value={inputValue}
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-1 rounded whitespace-nowrap"
      >
        Add task
      </button>
    </form>
  );
}

export default AddTaskForm;
