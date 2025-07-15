import React from 'react';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import './Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return (
    <>
      <Header /> 
      <div className="bar">
        <Sidebar />
      </div>
      <main className="content">
        {children}
      </main>
    </>
  );
};

export default Layout;
