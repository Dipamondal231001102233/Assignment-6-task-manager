import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";

function TaskCard({ task }) {
  const {
    pendingTask,
    completeTask,
    deleteTask,
  } = useTasks();

  return (
    <div className="task-card">
      <h3>{task.header}</h3>

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

      <div className="task-buttons">
        <Link to={`/tasks/${task.id}`}>
          View Details
        </Link>

        <Link to={`/tasks/${task.id}/edit`}>
          Edit
        </Link>

        {task.status === "Raised" && (
          <button onClick={() => pendingTask(task.id)}>
            Pending
          </button>
        )}

        {task.status !== "Closed" && (
          <button onClick={() => completeTask(task.id)}>
            Complete
          </button>
        )}

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;