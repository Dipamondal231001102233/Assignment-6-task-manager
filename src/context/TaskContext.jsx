import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...task,
        id: Date.now(),
        raisedDate: new Date().toLocaleString(),
        status: "Raised",
      },
    ]);
  };

  // Update an existing task
  const updateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedTask }
          : task
      )
    );
  };

  // Change task status to Pending
  const pendingTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: "Pending" }
          : task
      )
    );
  };

  // Change task status to Closed
  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: "Closed" }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        pendingTask,
        completeTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}