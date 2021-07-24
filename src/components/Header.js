
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Tech News</h1>
      <div className="nav-link m-2">
        <NavLink to="/top"  activeClassName="active">
         Top Stories
        </NavLink>&nbsp;
        <NavLink to="/new" activeClassName="active">
         Latest Stories
        </NavLink>&nbsp;
        <NavLink to="/best" activeClassName="active">
         Best Stories
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;
