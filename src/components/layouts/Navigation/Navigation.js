import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css'
import {connect} from 'react-redux'
import {logOutUser} from '../../../containers/store/Actions/index'



function Navigation(props, {logOut}) {
  return (
    <ul className="navigation" >
      <NavLink className='NavLink' activeClassName= "active-link" exact to="/dashboard">Monthly Budget</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/dashboard/budgetitems">Budget Creator</NavLink>
      <NavLink className='NavLink' activeClassName= "active-link" to="/dashboard/spending">Daily Spending</NavLink>
      <li className='NavLink' activeClassName="active-link"><span onClick={()=> props.dispatch(logOutUser())}>Log Out</span></li>
    </ul>
  );
}

function mapStateToProps(state){
    return {
      
    }
}
export default connect(mapStateToProps)(Navigation);