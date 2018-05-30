import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import BudetItem from '../Forms/BudgetItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'
import Typography from 'material-ui/Typography';
import IncomeTable from '../Forms/IncomeTable';
import ExpenseTable from '../Forms/ExpenseTable';
import {addBudgetItem, fetchBudget, removeBudgetItem} from '../store/Actions'
import './MonthlyBudget.css'
import Spinner from '../../components/layouts/Spinner/Spinner'

       

 
class Monthlybudget extends Component{
 constructor(props){
 super(props)
 
 this.removeListItem=this.removeListItem.bind(this)
 }
 
  componentDidMount() {
    const userId = this.props.uid
   
    this.props.dispatch(fetchBudget(userId))
  }
 removeListItem (e) {
     const value = e.currentTarget.parentNode.parentNode.getAttribute("data-id")
    this.props.dispatch(removeBudgetItem(value))
     console.log(value)
 }
 
    
 render(){
  
    const userId = this.props.uid
    console.log(userId)
  
     let incomeStream = <Spinner/>
     if(!this.props.loading) { incomeStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === "income"
    })
    
    const income = incomeStream.sort((a,b) =>{
      return (a.name > b.name )  
    })
    
    console.log(income)
     }
     
     let expenseStream = <Spinner/>
     if(!this.props.loading) { expenseStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === 'expense' 
    })
    
     }
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Typography className="title" variant="display3" gutterBottom>Budget Creator </Typography>
         <div className="Monthlybudget_table">
         <Grid container spacing={24}>
        <IncomeTable    data={incomeStream} 
        removeItem = {this.removeListItem}
                        
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
                            name:   "Type",
                            prop:   "type"
                            },
                            {
                            name:   "Frequency", 
                            prop:   "frequency"
                            },
                            {
                            name:   "Amount",
                            prop:   "amount"
                            },
                             {
                            name:   " ",
                            prop:   " "
                            }
                            ]}
        />
        <ExpenseTable    data={expenseStream}
                        
                        header={[
                            {
                            name: "Name",
                            prop: "name"
                            },
                            {
                            name:   "Category",
                            prop:   "category"
                            },
                            {
                            name:   "Type",
                            prop:   "type"
                            },
                            {
                            name:   "Frequency", 
                            prop:   "frequency"
                            },
                            {
                            name:   "Amount",
                            prop:   "amount"
                            },{
                            name:   " ",
                            prop:   " "
                            }
                            ]}
        />
        <BudetItem onSubmit={values => this.props.dispatch(addBudgetItem(values, userId))}/>
        </Grid>
        </div>
        </Aux>
        </MuiThemeProvider>
         
         );
    
 }   
}
function mapStateToProps(state){
    return {
        budget: state.budget.budget,
        loading: state.loading,
        uid: state.firebase.auth.uid
    }
}


export default connect(mapStateToProps)(Monthlybudget);

 