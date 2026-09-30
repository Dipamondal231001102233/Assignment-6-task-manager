import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const task = tasks.find((item) => item.id === Number(id));

  const [formData, setFormData] = useState(
    task || {
      header: "",
      description: "",
      priority: "Medium",
      category: "Academic",
      dueDate: "28 Aug 2026",
    }
  );

  if (!task) {
    return (
      <div className="page">
        <h2>Task Not Found</h2>
        <Link to="/tasks">Back to Tasks</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTask(task.id, {
      header: formData.header,
      description: formData.description,
      priority: formData.priority,
      category: formData.category,
      dueDate: formData.dueDate,
    });

    alert("Task updated successfully!");

    navigate(`/tasks/${task.id}`);
  };

  return (
    <div className="page">
      <form className="task-form" onSubmit={handleSubmit}>
        <h2>Edit Task</h2>

        <label>Task Header</label>
        <input
          type="text"
          name="header"
          value={formData.header}
          onChange={handleChange}
          required
        />

        <label>Task Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Academic">Academic</option>
          <option value="Personal">Personal</option>
        </select>

        <label>Due Date</label>
        <input
          type="text"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default EditTask;