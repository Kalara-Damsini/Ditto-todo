import React from "react";
import './Popup.css';

interface PopupProps {
    onClose: () => void;
    children: React.ReactNode;
  }
  
  const Popup: React.FC<PopupProps> = ({ onClose, children }) => {
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          {children}
            <h1>Add New Task</h1>
          <button className="close-btn" onClick={onClose}>Go back</button>
        </div>
      </div>
    );
  };
  
  export default Popup;