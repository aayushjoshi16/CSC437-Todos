import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";
import Modal from "./Modal";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

function App() {
  const INITIAL_TASK_LIST: Task[] = [
    { id: "1", name: "Eat", completed: false },
    { id: "2", name: "Sleep", completed: false },
    { id: "3", name: "Repeat", completed: false },
  ];
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to handle checking a task
  const handleCheckTask = (id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to handle deleting a task
  const handleDeleteTask = (id: string): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Function to handle adding a new task
  const handleAddTask = (name: string): void => {
    if (name.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      name,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsModalOpen(false);
  };

  // Function to open the modal
  const openModal = (): void => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <main className="m-4">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        New Task
      </button>

      <Modal
        headerLabel="New Task"
        isOpen={isModalOpen}
        onCloseRequested={closeModal}
      >
        <AddTaskForm handleAddTask={handleAddTask} />
      </Modal>

      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              {...task}
              handleCheckTask={handleCheckTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
