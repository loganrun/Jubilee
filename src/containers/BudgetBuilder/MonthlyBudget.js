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
import ProposedBudget from '../Charts/ProposeBudget'

       

 
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
     const userId = this.props.uid
    this.props.dispatch(removeBudgetItem(value,userId))
     console.log(value)
 }
 
    
 render(){
  
    const userId = this.props.uid
  
  
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
    console.log(totalBudget)
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Grid container spacing={24} direction={'row'}>
         <Grid item xs={6} sm={6} lg={12}>
         <Typography className="title" variant="display3" gutterBottom>Budget Creator</Typography>
        </Grid>
        </Grid>
         <div className={'container'}>
         <Grid container direction={'row'} spacing={24}>
         <Grid item xs={12} sm={6} lg={6}>
         <ProposedBudget data = {totalBudget}/>
         </Grid>
         </Grid>
      
         
         <Grid container direction={'row'} spacing={24}>
         <Grid item xs={12} sm={6} lg={12}>
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
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
        <ExpenseTable    data={expenseStream}
                        removeItem= {this.removeListItem}
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
        </Grid>
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

 