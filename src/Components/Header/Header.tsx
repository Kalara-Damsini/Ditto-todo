import React from "react";
import "./Header.css";
import { ImSearch } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Header: React.FC = () =>{
    return(
        <div className="header">

            <div className="todo">
                <p>ToDo</p>
            </div>

            <div className="search">
                <input type="text" id="search" name="search" placeholder="Search your task here"></input>
                <ImSearch className="search-icon"/>
            </div>

            <div className="icon">
                <FaRegBell className="bell-icon"/>
                <SlCalender className="calender-icon"/>
                <div className="date">
                <p>Teusday</p>
                <p id="date">20/06/2023</p>
            </div>
            </div>

            

            
        </div>
    );
};

export default Header;