import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css'



function Navigation() {
  return (
    <ul className="navigation" >
      <NavLink className='NavLink' activeClassName= "active-link" exact to="/">Monthly Budget</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/budgetitems">BreakDown</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/spending">Daily spending</NavLink>
    </ul>
  );
}

export default Navigation;