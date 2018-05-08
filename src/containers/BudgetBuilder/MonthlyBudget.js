import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import BudetItem from '../Forms/BudgetItem'
import ResponsiveDialog from '../Forms/DialogBox'
//import Header from '../../components/layouts/Header/header'
//import NewLayout from '../NewLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import ExpenseStream from '../../components/layouts/Main/ExpenseStream'
//import IncomeStream from '../../components/layouts/Main/IncomeStream'

import * as actionTypes from '../store/actions'
import {connect} from 'react-redux'
//import {bindactionCreators} from 'redux'
import IncomeTable from '../Forms/IncomeTable';
import ExpenseTable from '../Forms/ExpenseTable';
import {addBudgetItem} from '../store/actions'
import './MonthlyBudget.css'


 
class Monthlybudget extends Component{
    
 render(){
     const incomeStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === 'income'
    })
    
    
     const expenseStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === 'expense'
    })
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Grid container spacing={24}>
        <IncomeTable    data={incomeStream}
                        
                        header={[
                            {
                            name: "Category",
                            prop: "category"
                            },
                            {
                            name:   "Title",
                            prop:   "title"
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
                            name:   "Title",
                            prop:   "title"
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
                            }
                            ]}
        />
        <BudetItem onSubmit={values => this.props.dispatch(addBudgetItem(values))}/>
        <ResponsiveDialog/>
        </Grid>
        </Aux>
        </MuiThemeProvider>
         
         );
    
 }   
}
function mapStateToProps(state){
    return {
        budget: state.budget.budget
    }
}


 

export default connect(mapStateToProps)(Monthlybudget);



 
//<Header/>















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