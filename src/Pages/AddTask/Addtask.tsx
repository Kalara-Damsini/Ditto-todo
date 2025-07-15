import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Popup from "../../Components/Popup/Popup";
import Addform from "../../Components/Addform/Addform";
import TaskCard from "../../Components/TaskCard/TaskCard";
import Header from "../../Components/Header/Header";
import "./Addtask.css";

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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleAddTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
    setShowPopup(false);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} />

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
          {filteredTasks.length === 0 ? (
            <div className="task-item">
              <p>No tasks found.</p>
            </div>
          ) : (
            filteredTasks.map((task, index) => (
              <TaskCard
                key={index}
                task={task}
                onDelete={() =>
                  setTasks(prev => prev.filter((_, i) => i !== index))
                }
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AddTask;
