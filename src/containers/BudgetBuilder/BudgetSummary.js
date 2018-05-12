import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
//import Paper from 'material-ui/Paper'
//import { income, expense } from '../../store.js'
import Aux from '../../hoc/Aux';
//import BudetItem from '../Forms/BudgetItem'
//import ResponsiveDialog from '../Forms/DialogBox'
//import Header from '../../components/layouts/Header/header'
//import NewLayout from '../NewLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'
//import ExpenseStream from '../../components/layouts/Main/ExpenseStream'
//import IncomeStream from '../../components/layouts/Main/IncomeStream'
//import BudgetMonth from '../../components/layouts/Main/BudgetMonth'
//import ActualMonth from '../../components/layouts/Main/ActualMonth'
//import IconButton from 'material-ui/IconButton';
//import { FormControl, FormHelperText } from 'material-ui/Form';
//import * as actionTypes from '../store/actions'
//import {connect} from 'react-redux'
//import TextField from 'material-ui/TextField';
//import Table, { TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
//import { withStyles } from 'material-ui/styles';
import SummaryTable from '../Forms/SummaryTable';
//import createMuiTheme from 'material-ui/styles'
//import MenuItem from 'material-ui/Menu/MenuItem';
//import Visibility from '@material-ui/icons/Visibility';
//import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './MonthlyBudget.css'

//import LayoutBudget from '../../components/layouts/LayoutBudget'
//import BudgetCategories from '../../components/Budget/BudgetCategories/Budgetcategories'


// const muiTheme = createMuiTheme ({
//     palette: {
//         primary1Color: 'orange500',
//         accentColor: 'deepOrange500',
//     }
//})
 
class BudgetSummary extends Component{
    state = {
        data: [],
    }
    
    
    

    
 render(){
     
    //  const incomeStream = this.state.data.filter(incomeObject =>{
    //     return incomeObject.type === 'income'
    // })
     
    //  const expenseStream = this.state.data.filter(incomeObject =>{
    //     return incomeObject.type === 'expense'
    // })
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Grid container spacing={24}>
        <SummaryTable/>
        
        </Grid>
        </Aux>
        </MuiThemeProvider>
         
         );
    
 }   
}
function mapStateToProps(state){
    return{
        transaction: state.budget.transaction,
        budget: state.budget.budget
    }
}
 

export default connect(mapStateToProps)(BudgetSummary);
