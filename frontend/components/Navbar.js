import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const renderBackButton = () => {
    if (location.pathname.startsWith('/users/')) {
      return <button onClick={() => navigate('/users')}>Back</button>;
    } else if (location.pathname === '/users') {
      return <button onClick={() => navigate('/')}>Back</button>;
    }
    return null;
  };

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        ☰ Menu
      </button>
      <h1 className="navbar-title">User Management App</h1>
      <div className="navbar-buttons">
        {renderBackButton()}
      </div>
    </nav>
  );
}

export default Navbar;
