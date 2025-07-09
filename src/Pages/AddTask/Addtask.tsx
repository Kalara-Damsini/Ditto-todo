import React , { useState } from "react";
import './Addtask.css';
import { FaPlus } from "react-icons/fa";
import Popup from "../../Components/Popup/Popup";
import Addform from "../../Components/Addform/Addform";

const AddTask: React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="add-task-container">
      
      <div className="add-button">
        <h1>Add New Task</h1>
        <button className="add-task-btn" onClick={()=>setShowPopup(true)}><FaPlus className="plus-icon"/>Add</button>

        {showPopup && (
          <Popup onClose={() => setShowPopup(false)}>
            <Addform />
          </Popup>
        )}
      </div>
    </div>
  );
};

export default AddTask;