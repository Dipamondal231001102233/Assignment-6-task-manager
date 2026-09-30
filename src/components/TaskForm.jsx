import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useTasks();

  const [formData, setFormData] = useState({
    header: "",
    description: "",
    priority: "Medium",
    category: "Academic",
    dueDate: "28 Aug 2026",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.header || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }

    addTask(formData);

    setFormData({
      header: "",
      description: "",
      priority: "Medium",
      category: "Academic",
      dueDate: "28 Aug 2026",
    });

    alert("Task added successfully!");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <label>Task Header</label>
      <input
        type="text"
        name="header"
        value={formData.header}
        onChange={handleChange}
        placeholder="Enter task header"
        required
      />

      <label>Task Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter task description"
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
        value={formData.dueDate}
        readOnly
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;