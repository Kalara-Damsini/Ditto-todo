import React, { useState } from "react";
import './Addtask.css';
import { FaPlus } from "react-icons/fa";
import Popup from "../../Components/Popup/Popup";
import Addform from "../../Components/Addform/Addform";
import TaskCard from "../../Components/TaskCard/TaskCard";

export interface Task {
  title: string;
  date: string;
  time: string;
  status: string;
  priority: string;
  description: string;
  document: string | null;
}

const AddTask: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
    setShowPopup(false);
  };

  const handleDelete = (index: number) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="add-task-container">
      <div className="add-header">
        <h1>Add New Task</h1>
        <button className="add-task-btn" onClick={() => setShowPopup(true)}>
          <FaPlus className="plus-icon" /> Add
        </button>
      </div>

      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <Addform onSubmit={handleAddTask} />
        </Popup>
      )}

      <div className="task-list">
        <h2>Task List</h2>
        {tasks.length === 0 ? (
          <div className="task-item">
            <p>No tasks added yet.</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              onDelete={() => handleDelete(index)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AddTask;
