import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'
import SummaryTable from '../Forms/SummaryTable';
import Typography from 'material-ui/Typography';
import {fetchBudget, fetchTransactions} from '../store/Actions'
import ActualTable from '../Forms/ActualTable'
//import './MonthlyBudget.css'
import BudgetChart from '../Charts/BudgetChart.js'
import ActualBudget from '../Charts/ActualBudget.js'
import Expenses from '../Charts/Expenses'


 
class BudgetSummary extends Component{
 
  componentDidMount () {
       const userId = this.props.uid
       console.log(userId)
        this.props.dispatch(fetchBudget(userId));
        this.props.dispatch(fetchTransactions(userId))
    }
    
    
    
 render(){
     
     const incomeStream = this.props.budget.filter(incomeObject =>{
         return incomeObject.type === 'income'
     })
     const userId = this.props.uid
     console.log(userId)
     
     console.log(incomeStream)
     
      const expenseStream = this.props.budget.filter(incomeObject =>{
          return incomeObject.type === 'expense'
      })
    
    const totalBudget = incomeStream.concat(expenseStream)
    console.log(totalBudget)
    
    const incomeTransaction = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category ==='income'
    })
    
    console.log(incomeTransaction)
    
    const expenseTransaction = this.props.transaction.filter(incomeObject =>{
          return incomeObject.category !== 'income'
      })
      console.log(expenseTransaction)
      
    const totalTransactions = incomeTransaction.concat(expenseTransaction)
    console.log(totalTransactions)
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Typography className="title" variant="display3" gutterBottom>Budget vs. Actual </Typography>
         <Grid container spacing={24}>
         <Grid item xs >
         <BudgetChart data={totalBudget}/>
         </Grid>
         <Grid item xs>
         <ActualBudget data ={totalTransactions}/>
         </Grid>
         <Grid item xs>
         <Expenses data={totalTransactions}/>
         </Grid>
         </Grid>
         <Grid container spacing={24}>
         <Grid item xs>
        <SummaryTable data={totalBudget}
        header={[
                            {
                            name:   "Name",
                            prop:   "name"
                            },
                            {
                            name: "Type",
                            prop: "type"
                            },
                            {
                            name:   "Category",
                            prop:   "category"
                            },
                            {
                            name:   "Frequency", 
                            prop:   "frequency"
                            },
                            {
                            name:   "Budgeted Amount",
                            prop:   "amount"
                            }
                            ]}/>
        </Grid>
        <Grid item xs>
        <ActualTable data={totalTransactions}
                           header={[
                            {
                            name:   "Name",
                            prop:   "name"
                            },
                            {
                            name: "Category",
                            prop: "category"
                            },
                            {
                            name:   "Actual Amount",
                            prop:   "amount"
                            },
                            ]}/>
        </Grid>
        </Grid>
        </Aux>
        </MuiThemeProvider>
         
         );
    
 }   
}
function mapStateToProps(state){
    return{
        transaction: state.budget.transaction,
        budget: state.budget.budget,
        uid: state.firebase.auth.uid
    }
}
 

export default connect(mapStateToProps)(BudgetSummary);


 