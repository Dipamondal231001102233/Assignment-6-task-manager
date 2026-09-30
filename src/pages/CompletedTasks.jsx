import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function CompletedTasks() {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <div className="page">
      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <div className="task-list">
          {completedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;