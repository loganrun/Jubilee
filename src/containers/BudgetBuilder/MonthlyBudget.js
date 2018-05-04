import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { income, expense } from '../../store.js'
import Aux from '../../hoc/Aux';
import BudetItem from '../Forms/BudgetItem'
import Header from '../../components/layouts/Header/header'
//import NewLayout from '../NewLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import ExpenseStream from '../../components/layouts/Main/ExpenseStream'
//import IncomeStream from '../../components/layouts/Main/IncomeStream'
//import BudgetMonth from '../../components/layouts/Main/BudgetMonth'
//import ActualMonth from '../../components/layouts/Main/ActualMonth'
//import IconButton from 'material-ui/IconButton';
//import { FormControl, FormHelperText } from 'material-ui/Form';
//import * as actionTypes from '../store/actions'
//import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
//import MenuItem from 'material-ui/Menu/MenuItem';
//import Visibility from '@material-ui/icons/Visibility';
//import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './MonthlyBudget.css'

//import LayoutBudget from '../../components/layouts/LayoutBudget'
//import BudgetCategories from '../../components/Budget/BudgetCategories/Budgetcategories'


// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
//   row: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//      Paper: { padding: 20, marginTop: 10, marginBottom: 10},
//   },
// });
     
 
 
 const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


 
class Monthlybudget extends Component{
    state = {
        income,
        expense
    }
    
    addItemExpense(e){
        e.preventDefault();
        const expense = this.state.expense;
        const newExpense = 'test';
        
        this.setState({
         expense: [...this.state.expense, newExpense]   
        })
    }
    
    change = e => {
        this.setState({
            [e.taget.name]: e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    submit = (values) =>{
         console.log(values)
     }
    
 render(){
     
    //  const incomeStreamComponent = this.state.income.map(incomeObject => {
    //      return (
    //          <Aux>
    //          <BudgetMonth {...incomeObject}/>
    //          </Aux>
    //          )
    //  })
     
    //  const expenseStreamComponent = this.state.expense.map(expenseObject => {
    //      return (
    //          <Aux>
    //          <ActualMonth {...expenseObject}/>
    //          </Aux>
    //          )
    //  })
     
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Header/>
         <div className = "container">
         <Grid container  spacing={8}>
            <Grid item sm >
                <Paper >
                   <Table >
                    <TableHead>
                      <TableRow>
                        <CustomTableCell>Category</CustomTableCell>
                        <CustomTableCell>Title</CustomTableCell>
                        <CustomTableCell>Type</CustomTableCell>
                        <CustomTableCell>Frequency</CustomTableCell>
                        <CustomTableCell numeric>Amount</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.income.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <CustomTableCell>{n.category}</CustomTableCell>
                            <CustomTableCell>{n.title}</CustomTableCell>
                            <CustomTableCell>{n.type}</CustomTableCell>
                            <CustomTableCell>{n.frequency}</CustomTableCell>
                            <CustomTableCell numeric>{n.amount}</CustomTableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    <TableFooter>
                    <p>Something oes here</p>
                    </TableFooter>
                  </Table>
                
                </Paper>
                <Paper>
                <form onSubmit= {(e) => {this.addBudgetItem(e)}} style = {{marginLeft: 400}}>
                <div>
                <TextField
                    label="id"
                    id="margin-none"
                    defaultValue="id"
                    helperText="Some important text"
                    value = {this.state.id} 
                    name = "id"
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="category"
                    id="margin-none"
                    defaultValue="category"
                    helperText="Housing, Debts"
                    name = "category"
                    value = {this.state.category} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="amount"
                    id="margin-none"
                    defaultValue="amount"
                    helperText="How much"
                    name = "amount"
                    value = {this.state.amount} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="title"
                    id="margin-none"
                    defaultValue="title"
                    helperText="name"
                    name = "title"
                    value = {this.state.amount} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="frequency"
                    id="margin-none"
                    defaultValue="frequency"
                    helperText="How often"
                    name = "frequency"
                    value = {this.state.amount} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="type"
                    id="margin-none"
                    defaultValue="type"
                    helperText="Income/Expense"
                    name = "type"
                    value = {this.state.amount} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <button onClick={(e) => this.onSubmit()} type="submit">Add</button>
                </div>
                </form>
                </Paper>
            </Grid>
            <Grid item sm >
            <Paper>
                  <Table >
                    <TableHead>
                      <TableRow>
                        <CustomTableCell>Category</CustomTableCell>
                        <CustomTableCell>Title</CustomTableCell>
                        <CustomTableCell>Type</CustomTableCell>
                        <CustomTableCell>Frequency</CustomTableCell>
                        <CustomTableCell numeric>Amount</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.expense.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <CustomTableCell>{n.category}</CustomTableCell>
                            <CustomTableCell>{n.title}</CustomTableCell>
                            <CustomTableCell>{n.type}</CustomTableCell>
                            <CustomTableCell>{n.frequency}</CustomTableCell>
                            <CustomTableCell numeric>{n.amount}</CustomTableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    <TableFooter>
                    <p>Something oes here</p>
                    </TableFooter>
                  </Table>
            </Paper>
            </Grid>
        </Grid>
        </div>
        <BudetItem/>
        </Aux>
        </MuiThemeProvider>
         
         );
    
 }   
}

 

export default Monthlybudget;




























//<BudgetCategories categories = {categories} budget = {budget} />

// this.state.categories.reduce((categories, category) =>{
//             const {type} = category
            
//             categories[type] = categories[type]
//             ? [...categories[type], category] : [type]
            
//             return categories
//         }, {})
//     )
//     } 

// const styles = {
//      grid: {marginLeft: '270px'}
//  }

// const LayoutBudget = () => (
// <Grid container style={styles} spacing={8}>
//         <Grid item sm >
//         <BudgetMonth/>
//         </Grid>
//         <Grid item sm>
//         <ActualMonth/>
//         </Grid>
// </Grid>
// )
//<Grid item sm >