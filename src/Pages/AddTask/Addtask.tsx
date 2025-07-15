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
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddTask = (task: Task) => {
    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = task;
      setTasks(updated);
    } else {
      setTasks(prev => [...prev, task]);
    }
    setShowPopup(false);
    setEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setShowPopup(true);
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
        <button 
          className="add-task-btn" 
          onClick={() => {
            setEditingIndex(null);
            setShowPopup(true);
          }}
        >
          <FaPlus className="plus-icon" /> Add
        </button>
      </div>

      {showPopup && (
        <Popup onClose={() => {
          setShowPopup(false);
          setEditingIndex(null);
        }}>
          <Addform 
            onSubmit={handleAddTask} 
            initialData={editingIndex !== null ? tasks[editingIndex] : undefined}
          />
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
              onEdit={() => handleEdit(index)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AddTask;
