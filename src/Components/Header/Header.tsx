import React from "react";
import "./Header.css";
import { ImSearch } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

interface HeaderProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

const Header: React.FC <HeaderProps> = ({ searchTerm, onSearch }) =>{
    return(
        <div className="header">

            <div className="todo">
                <p>ToDo</p>
            </div>

            <div className="search">
                <input 
                type="text" 
                id="search" 
                name="search" 
                placeholder="Search your task here"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                />
                <ImSearch className="search-icon"/>
            </div>

            <div className="icon">
                <FaRegBell className="bell-icon"/>
                <SlCalender className="calender-icon"/>
                <div className="cal">
                <p>Teusday</p>
                <p id="date">20/06/2023</p>
            </div>
            </div>

            

            
        </div>
    );
};

export default Header;