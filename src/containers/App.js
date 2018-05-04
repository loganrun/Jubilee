import React, { Component } from 'react';
//import Header from '../components/layouts/Header/header';
//import Layout from '../components/layouts/Layout';
import Monthlybudget from './BudgetBuilder/MonthlyBudget';
//import NewLayout from './NewLayout';
//import Transaction from './BudgetBuilder/Transaction';
//import LayoutBudget from '../components/layouts/LayoutBudget'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
    
       <Monthlybudget/>
      </div>
    );
  }
}

export default App;
