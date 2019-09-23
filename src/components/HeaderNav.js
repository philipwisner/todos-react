import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.scss';
import { settings } from '../assets/images';

const HeaderNav = ({ themeColor }) => {
  return (
    <div className="header">
      <h1 className="nav-header">
        <div className="nav-child-title">
          <Link to="/" style={{ color: themeColor }}>
            Todos
          </Link>
        </div>
        <div className="nav-child-icon">
          <Link to="/settings">
            <img src={settings} alt="info" />
          </Link>
        </div>
      </h1>
    </div>
  );
};

export default HeaderNav;
