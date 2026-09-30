import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TaskProvider } from "./context/TaskContext.jsx";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";
import EditTask from "./pages/EditTask";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-task"
            element={
              <ProtectedRoute>
                <AddTask />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tasks/:id"
            element={
              <ProtectedRoute>
                <TaskDetails />
              </ProtectedRoute>
            }
          >
            <Route
              path="edit"
              element={<EditTask />}
            />
          </Route>

          <Route
            path="/completed"
            element={
              <ProtectedRoute>
                <CompletedTasks />
              </ProtectedRoute>
            }
          />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;