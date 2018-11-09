import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'
import SummaryTable from '../Forms/SummaryTable';
import Typography from 'material-ui/Typography';
import {fetchBudget, fetchTransactions} from '../store/Actions'
import ActualTable from '../Forms/ActualTable'
import BiggestExpenseChart from '../Charts/BiggestExpenseChart.js'
import BudgetChart from '../Charts/BudgetChart.js'
import SavingsChart from '../Charts/SavingsChart.js'
import ActualBudget from '../Charts/ActualBudget.js'
import Expenses from '../Charts/Expenses'
import '../Charts/Chart.css'
import Spinner from '../../components/layouts/Spinner/Spinner'
import './BudgetSummary.css'
import IncomeTable from '../Tables/IncomeTable'

 
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
     
     console.log(incomeStream)
    
     
     let expenseStream = <Spinner/>
     if(!this.props.loading) { expenseStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === 'expense' 
    })
     }
     
    
    const totalBudget = incomeStream.concat(expenseStream)
    
    const incomeTransaction = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category ==='income'
    })
    
    console.log(incomeTransaction)
    
    const expenseTransaction = this.props.transaction.filter(incomeObject =>{
          return incomeObject.category !== 'income'
      })
      
    const totalTransactions = incomeTransaction.concat(expenseTransaction)
    //const incomeSnap = incomeTransaction.concat(incomeStream)
    
    //const expenseSnap= expenseTransaction.concat(expenseStream)
    console.log(incomeStream);
    console.log(incomeTransaction);
    
    if(window.innerWidth >= 950){
     return(
         <MuiThemeProvider>
         <Aux>
          <Grid container spacing={24} direction={'row'}>
          <Grid item xs={6} sm={6} lg={12}>
          <Typography className="title" variant="display2" gutterBottom>Budget Snapshot</Typography>
         </Grid>
         </Grid>
         
       <div className= "container">
         <SavingsChart/>
         <BiggestExpenseChart/>
         <BudgetChart/>
         <ActualBudget/>
         <Expenses data= {totalTransactions}/>
         <IncomeTable/>
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
        
       </div>
        </Aux>
        </MuiThemeProvider>
         
         );
    }else{
     return(
         <MuiThemeProvider>
         <Aux>
         <Grid container spacing={24} direction={'row'}>
         <Grid item xs={6} sm={6} lg={12}>
         <Typography className="title" variant="display2" gutterBottom>Snapshot</Typography>
        </Grid>
        </Grid>
        <Grid container spacing={24} direction={'row'}>
         <BudgetChart className='chart'style={{maxWidth:'400px'}} data={totalBudget}/>
         <ActualBudget className='chart' data ={totalTransactions}/>
         <Expenses className='chart' data={totalTransactions}/>
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
        </Aux>
        </MuiThemeProvider>
         
         );
    }
     
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
// <SavingsChart className='chart'/>

 //<Grid container spacing={24} direction={'row'}>
 
  // <SummaryTable data={totalBudget}
  //       header={[
  //                           {
  //                           name:   "Name",
  //                           prop:   "name"
  //                           },
  //                           {
  //                           name: "Type",
  //                           prop: "type"
  //                           },
  //                           {
  //                           name:   "Category",
  //                           prop:   "category"
  //                           },
  //                           {
  //                           name:   "Frequency", 
  //                           prop:   "frequency"
  //                           },
  //                           {
  //                           name:   "Budgeted Amount",
  //                           prop:   "amount"
  //                           }
  //                           ]}/>
                           
  //       <ActualTable data={totalTransactions}
  //                          header={[
  //                           {
  //                           name:   "Name",
  //                           prop:   "name"
  //                           },
  //                           {
  //                           name:   "Date",
  //                           prop:   "date"
  //                           },
  //                           {
  //                           name: "Category",
  //                           prop: "category"
  //                           },
  //                           {
  //                           name:   "Actual Amount",
  //                           prop:   "amount"
  //                           },
  //                           ]}/>