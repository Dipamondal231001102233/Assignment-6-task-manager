import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <div className="page">
      <h1>Tasks</h1>

      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Raised")}>Raised</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Closed")}>Closed</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <div className="task-list">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;