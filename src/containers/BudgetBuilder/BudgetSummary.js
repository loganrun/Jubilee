import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'
import SummaryTable from '../Forms/SummaryTable';
import Typography from 'material-ui/Typography';
import {fetchBudget, fetchTransactions} from '../store/Actions'
import ActualTable from '../Forms/ActualTable'

import BudgetChart from '../Charts/BudgetChart.js'
import ActualBudget from '../Charts/ActualBudget.js'
import Expenses from '../Charts/Expenses'
import '../Charts/Chart.css'
import Spinner from '../../components/layouts/Spinner/Spinner'

 
class BudgetSummary extends Component{
 
  componentDidMount () {
       const userId = this.props.uid
   
       if (userId){
        this.props.dispatch(fetchBudget(userId));
        this.props.dispatch(fetchTransactions(userId))
       }
    }
    
    
    
 render(){
  
    let incomeStream = <Spinner/>
     if(!this.props.loading) { incomeStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === "income"
    })
     }
     
     let expenseStream = <Spinner/>
     if(!this.props.loading) { expenseStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === 'expense' 
    })
     }
     
    
    const totalBudget = incomeStream.concat(expenseStream)
    
    const incomeTransaction = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category ==='income'
    })
    
    const expenseTransaction = this.props.transaction.filter(incomeObject =>{
          return incomeObject.category !== 'income'
      })
      
    const totalTransactions = incomeTransaction.concat(expenseTransaction)
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Grid container spacing={24} direction={'row'}>
         <Grid item xs={6} sm={6} lg={12}>
         <Typography className="title" variant="display3" gutterBottom>Budget vs. Actual </Typography>
        </Grid>
        </Grid>
        <Grid container spacing={24} direction={'row'}>
         <Grid item xs={12} sm={6} lg={4}>
         <BudgetChart className='chart'style={{maxWidth:'400px'}} data={totalBudget}/>
         </Grid>
         <Grid item xs={12} sm={6} lg={4}>
         <ActualBudget className='chart' data ={totalTransactions}/>
         </Grid>
         <Grid item xs={12} sm={6} lg={4}>
         <Expenses className='chart' data={totalTransactions}/>
         </Grid>
         </Grid>
         <Grid container direction={'row'} spacing={24}>
         <Grid item xs={12} sm={6} lg={6}>
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
        <Grid item sm>
        <ActualTable data={totalTransactions}
                           header={[
                            {
                            name:   "Name",
                            prop:   "name"
                            },
                            {
                            name:   "Date",
                            prop:   "date"
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


 