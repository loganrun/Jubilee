import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css'



function Navigation() {
  return (
    <ul className="navigation" >
      <NavLink className='NavLink' activeClassName= "active-link" exact to="/">Monthly Budget</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/budgetitems">Budget Creator</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/spending">Daily Spending</NavLink>
    </ul>
  );
}

export default Navigation;