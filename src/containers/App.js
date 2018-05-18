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
    const { match } = this.props
    return (
      <div>
      <MuiThemeProvider>
     
        <NewLayout>
          <Switch>
              <Route exact path={`${match.url}/`} component={BudgetSummary} />
              <Route exact path={`${match.url}/budgetitems`} component={Monthlybudget} />
              <Route exact path={`${match.url}/spending`} component={Transaction} />
           </Switch>
         </NewLayout>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
