import React, { Component } from 'react';
import Monthlybudget from './BudgetBuilder/MonthlyBudget';
import Transaction from './BudgetBuilder/Transaction'
import BudgetSummary from './BudgetBuilder/BudgetSummary'
import { Route, Switch, Redirect } from 'react-router-dom';
import NewLayout from './NewLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'

import './App.css';

class App extends Component {
  render() {
    if (!this.props.loggedIn) {
            return <Redirect to = "/"/> 
        }
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

function mapStateToProps(state){
  return{
    loggedIn: state.budget.loggedIn
  }
}


export default connect(mapStateToProps)(App);
