import React from "react";
import "./Sidebar.css";
import { LuNotebookPen } from "react-icons/lu";
import { FaFolder } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelpCircle } from "react-icons/io5";
import {  MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {

    return(

        <div className="navbar">
            <div className="profile-container">
                <img src="../../assets/ChatGPT Image Jul 5, 2025, 01_07_45 PM.png"  className="profile-img"/>
                <div className="profile-text">
                    <h4>Kalara Abeyratne</h4>
                    <p>kalarabey@gmail.com</p>
                </div>
            </div>
            <div className="menu">
                <NavLink to="/AddTask"  className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                 <LuNotebookPen className="icon"/> Add tasks</NavLink>
                
                <div className="menu-item"><FaFolder className="icon"/> Create Categories</div>
                <div className="menu-item"><FaExclamation className="icon"/> Pending Task</div>
                <div className="menu-item"><MdOutlineDone className="icon"/> Completed Tasks</div>
                <div className="menu-item"><FcTodoList className="icon"/> All Tasks</div>
                <div className="menu-item"><IoSettingsOutline className="icon"/> Settings</div>
                <div className="menu-item"><IoHelpCircle className="icon"/> Help</div>
            </div>

            <div className="logout">
                <MdLogout className="icon"/> Logout
            </div>

        </div>
);
};

export default Sidebar;