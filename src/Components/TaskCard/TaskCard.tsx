import React from "react";
import './TaskCard.css';

interface Task {
  title: string;
  date: string;
  time: string;
  status: string;
  priority: string;
  description: string;
  document: string | null;
}

interface TaskCardProps {
  task: Task;
  onDelete: () => void;
  onEdit?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete, onEdit }) => {

  
  const cardClass = `task-card ${task.priority.toLowerCase()}`;

  return (
    <div className={cardClass}>
      <div className="card-header">
        <h3>{task.title}</h3>
        <div>
          <button className="edit-btn" onClick={onEdit}>✏️</button>
          <button className="delete-btn" onClick={onDelete}>🗑</button>
        </div>
      </div>

      <div className={`status-badge ${task.status.toLowerCase().replace(' ', '-')}`}>Status : {task.status}
      </div>

      <div className="task-info"><strong>Date:</strong> {task.date}</div>
      <div className="task-info"><strong>Time:</strong> {task.time}</div>
      <div className="task-info"><strong>Priority:</strong> {task.priority}</div>
      
      <div className="task-description">{task.description}</div>

      {task.document && (
        <div className="task-document">
          <a href={task.document} target="_blank" rel="noopener noreferrer">
            📄 View Document
          </a>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
