import React from "react";
import './Addform.css';
import { MdCalendarMonth } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const Addform: React.FC = () => {
  return (
    <div className="add-form-container">

      <form>

        <div className="day">
          <div className="title">
            <label>Title</label>
            <input type="text" name="title" ></input>
          </div>

          <div className="date">
            <label>Date</label>
            <input type="date" name="date" ></input><MdCalendarMonth className="calender"/>
          </div>
        </div>

        <div className="cont1">
          <div className="time">
            <label>Time</label>
            <input type="time" name="time" ></input><LuAlarmClock className="clock"/>
          </div>

          <div className="status">
            <label>Status</label>
          </div>
        </div>
        

        <div className="priority">
          <label>Priority</label>
        </div>

        <div className="cont2">
          <div className="description">
            <label>Description</label>
            <textarea name="description" rows={5} cols={30}></textarea>
          </div>

          <div className="document">
            <label>Document</label>
            <input type="file" name="document" ></input>
          </div>
        </div>

        

      </form>
      
      
    </div>
  );
};

export default Addform;