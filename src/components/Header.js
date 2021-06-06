
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hackathon</h1>
      <div className="nav-link m-2">
        <NavLink to="/top"  activeClassName="active">
          <button style={{fontSize:15}}>Top Stories</button>
        </NavLink>&nbsp;
        <NavLink to="/new" activeClassName="active">
          <button style={{fontSize:15}}>Latest Stories
            </button>
        </NavLink>&nbsp;
        <NavLink to="/best" activeClassName="active">
          <button style={{fontSize:15}}>Best Stories
            </button>
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;
