import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.scss';
import { settings } from '../assets/images';

const HeaderNav = () => {
  return (
    <div className="Header">
      <h1 className="NavHeader">
        <div className="NavChildTitle">
          <Link to="/">Todos</Link>
        </div>
        <div className="NavChildInfo">
          <Link to="/settings">
            <img src={settings} alt="info" />
          </Link>
        </div>
      </h1>
    </div>
  );
};

export default HeaderNav;
