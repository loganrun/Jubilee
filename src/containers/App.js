import React, { Component } from 'react';
//import Header from '../components/layouts/Header/header';
//import Layout from '../components/layouts/Layout';
import Monthlybudget from './BudgetBuilder/MonthlyBudget';
import Transaction from './BudgetBuilder/Transaction'
import BudgetSummary from './BudgetBuilder/BudgetSummary'
import { Route, Switch } from 'react-router-dom';
import NewLayout from './NewLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Transaction from './BudgetBuilder/Transaction';
//import LayoutBudget from '../components/layouts/LayoutBudget'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
     
        <NewLayout>
          <Switch>
              <Route exact path="/" component={BudgetSummary} />
              <Route path="/budgetitems" component={Monthlybudget} />
              <Route path="/spending" component={Transaction} />
           </Switch>
         </NewLayout>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
