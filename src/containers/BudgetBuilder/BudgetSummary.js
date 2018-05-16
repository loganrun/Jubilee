import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'
import SummaryTable from '../Forms/SummaryTable';
import Typography from 'material-ui/Typography';
import {fetchBudget} from '../store/actions'
import ActualTable from '../Forms/ActualTable'
//import './MonthlyBudget.css'
import BudgetChart from '../Charts/BudgetChart.js'
import ActualBudget from '../Charts/ActualBudget.js'


 
class BudgetSummary extends Component{
 
  componentDidMount () {
       
        this.props.fetchBudget();
    }
    
 render(){
     
     const budgetProjection = this.props.budget
     const actualSpending = this.props.transaction
     
     const incomeStream = this.props.budget.filter(incomeObject =>{
         return incomeObject.type === 'income'
     })
     
     console.log(incomeStream)
     
      const expenseStream = this.props.budget.filter(incomeObject =>{
          return incomeObject.type === 'expense'
      })
    
    const totalBudget = incomeStream.concat(expenseStream)
    console.log(totalBudget)
    
    const incomeTransaction = this.props.transaction.filter(incomeObject =>{
        return incomeObject.type ==='income'
    })
    
    const expenseTransaction = this.props.transaction.filter(incomeObject =>{
          return incomeObject.type === 'expense'
      })
      
    const totalTransactions = incomeTransaction.concat(expenseTransaction)
    console.log(totalTransactions)
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Typography className="title" variant="display3" gutterBottom>Actual Spending / Income </Typography>
         
         <Grid container spacing={24}>
         <Grid item xs>
         <BudgetChart data={budgetProjection}/>
         <ActualBudget data ={actualSpending}/>
         </Grid>
         <Grid item xs>
        <SummaryTable data={totalBudget}/>
        </Grid>
        <Grid item xs>
        <ActualTable data={totalTransactions}/>
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
        budget: state.budget.budget
    }
}
 

export default connect(mapStateToProps, {fetchBudget})(BudgetSummary);


 // axios.get( 'https://jsonplaceholder.typicode.com/posts' )
        //     .then( response => {
        //         const posts = response.data.slice(0, 4);
        //         const updatedPosts = posts.map(post => {
        //             return {
        //                 ...post,
        //                 author: 'Max'
        //             }
        //         });
        //         this.setState({posts: updatedPosts});
        //         // console.log( response );
        //     } )
        //     .catch(error => {
        //         // console.log(error);
        //         this.setState({error: true});
        //     });