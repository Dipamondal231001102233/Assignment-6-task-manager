import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  ).length;
  const pendingTasks = tasks.filter(
    (task) => task.status !== "Closed"
  ).length;

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Tasks</h3>
          <p>{pendingTasks}</p>
        </div>

        <div className="dashboard-card">
          <h3>Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>
      </div>

      <Link className="add-task-link" to="/add-task">
        + Add New Task
      </Link>
    </div>
  );
}

export default Dashboard;