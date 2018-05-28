import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css'



function Navigation() {
  return (
    <ul className="navigation" >
      <NavLink className='NavLink' activeClassName= "active-link" exact to="/dashboard">Monthly Budget</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/dashboard/budgetitems">Budget Creator</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/dashboard/spending">Daily Spending</NavLink>
      <NavLink className='NavLink' to="/">Log Out</NavLink>
    </ul>
  );
}

export default Navigation;