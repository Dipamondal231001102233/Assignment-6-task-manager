import { Link, Outlet, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";

function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return (
      <div className="page">
        <h2>Task Not Found</h2>
        <Link to="/tasks">Back to Tasks</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Task Details</h1>

      <div className="task-details">
        <h2>{task.header}</h2>

        <p>
          <strong>Description:</strong> {task.description}
        </p>

        <p>
          <strong>Priority:</strong> {task.priority}
        </p>

        <p>
          <strong>Category:</strong> {task.category}
        </p>

        <p>
          <strong>Raised Date & Time:</strong> {task.raisedDate}
        </p>

        <p>
          <strong>Due Date:</strong> {task.dueDate}
        </p>

        <p>
          <strong>Status:</strong> {task.status}
        </p>

        <Link to={`/tasks/${task.id}/edit`}>
          Edit This Task
        </Link>

        <br />

        <Link to="/tasks">
          ← Back to Tasks
        </Link>

        <Outlet />
      </div>
    </div>
  );
}

export default TaskDetails;