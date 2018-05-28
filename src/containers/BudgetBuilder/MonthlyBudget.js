import React, {Component} from 'react';
//import axios from 'axios'
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import BudetItem from '../Forms/BudgetItem'
//import Dialog from '../Forms/DialogBox'
//import Header from '../../components/layouts/Header/header'
//import NewLayout from '../NewLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import ExpenseStream from '../../components/layouts/Main/ExpenseStream'
//import IncomeStream from '../../components/layouts/Main/IncomeStream'

//import * as actionTypes from '../store/actions'
import {connect} from 'react-redux'
import * as actions from '../store/Actions'
//import {bindactionCreators} from 'redux'
//import IncomeFooter from '../Forms/IncomeFooter'
import Typography from 'material-ui/Typography';
import IncomeTable from '../Forms/IncomeTable';
import ExpenseTable from '../Forms/ExpenseTable';
import {addBudgetItem} from '../store/Actions'
import {fetchBudget} from '../store/Actions'
import './MonthlyBudget.css'
import Spinner from '../../components/layouts/Spinner/Spinner'
import {removeBudgetItem} from '../store/Actions'


 
class Monthlybudget extends Component{
 
  componentDidMount() {
    this.props.dispatch(fetchBudget())
  }
    
 render(){
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
        removeItem = {removeBudgetItem}
                        
                        header={[
                            {
                            name:   "name",
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
                            name: "Category",
                            prop: "category"
                            },
                            {
                            name:   "Name",
                            prop:   "name"
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
        <BudetItem onSubmit={values => this.props.dispatch(addBudgetItem(values))}/>
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
        loading: state.loading
    }
}

// const mapDispatchToProps = dispatch =>{
//  return{
//   onGetBudget: () => dispatch(getBudget() )
//  }
// }

 

export default connect(mapStateToProps)(Monthlybudget);

 //<ResponsiveDialog/>

 
//<Header/>

//













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