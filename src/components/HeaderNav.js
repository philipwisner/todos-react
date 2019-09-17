import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.scss';
import InfoIcon from '../assets/images/info.svg';


const HeaderNav = () => {
  return (
    <div className="Header">
      <h1 className="NavHeader">
        <div className="NavChildTitle">
          <Link to="/">Todos</Link>
        </div>
        <div className="NavChildInfo">
          <Link to="/about"><img src={InfoIcon} alt="info"/></Link>
        </div>
      </h1>
    </div>
  );
};

export default HeaderNav;
