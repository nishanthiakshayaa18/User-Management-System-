import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <button className="close-button" onClick={toggleSidebar}>
        &times;
      </button>
      <ul>
        <li>
          <Link to="/users" onClick={toggleSidebar}>Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;