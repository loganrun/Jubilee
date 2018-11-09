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
import BudgetTable2 from '../Tables/BudgetTable2'
//import BudgetTable from '../Tables/BudgetTable'

       

 
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
 }
 
    
 render(){
  
    const userId = this.props.uid
    
    let d = new Date();
    let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
    let endDate = (month[d.getMonth()]) +" "+ d.getFullYear();
    console.log(endDate);
  
  
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
    
     if(window.innerWidth >= 950){
     return(
         <MuiThemeProvider>
         <Aux>
         
         <Typography className="title" variant="display3" gutterBottom>Budget For {endDate}</Typography>
    
         <div className={'container'}>
         
         <BudgetTable2 data={incomeStream}/>
    
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
        
        
        <BudetItem onSubmit={values => this.props.dispatch(addBudgetItem(values, userId))}/>
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
         <Typography className="title" variant="display3" gutterBottom>Budget Creator</Typography>
        </Grid>
        </Grid>
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
        </Aux>
        </MuiThemeProvider>
         
         );
     }
    
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
//<BudgetTable2 data={incomeStream}/>
// <ProposedBudget data = {totalBudget}/>

// <IncomeTable    data={incomeStream} 
//         removeItem = {this.removeListItem}
                        
//                         header={[
//                             {
//                             name:   "Name",
//                             prop:   "name"
//                             },
//                             {
//                             name: "Category",
//                             prop: "category"
//                             },
//                             {
//                             name:   "Type",
//                             prop:   "type"
//                             },
//                             {
//                             name:   "Frequency", 
//                             prop:   "frequency"
//                             },
//                             {
//                             name:   "Amount",
//                             prop:   "amount"
//                             },
//                              {
//                             name:   " ",
//                             prop:   " "
//                             }
//                             ]}
//         />

 // <ExpenseTable    data={expenseStream}
 //                        removeItem= {this.removeListItem}
 //                        header={[
 //                            {
 //                            name: "Name",
 //                            prop: "name"
 //                            },
 //                            {
 //                            name:   "Category",
 //                            prop:   "category"
 //                            },
 //                            {
 //                            name:   "Type",
 //                            prop:   "type"
 //                            },
 //                            {
 //                            name:   "Frequency", 
 //                            prop:   "frequency"
 //                            },
 //                            {
 //                            name:   "Amount",
 //                            prop:   "amount"
 //                            },{
 //                            name:   " ",
 //                            prop:   " "
 //                            }
 //                            ]}
 //        />