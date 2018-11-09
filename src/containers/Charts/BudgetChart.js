import React, {Component}from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Spinner from '../../components/layouts/Spinner/Spinner'
//import Grid from 'material-ui/Grid'
import {connect} from 'react-redux'
import {compose} from 'redux'
import './Chart.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = {
//   card: {
//     maxWidth: 450,
//   },
  
  pos: {
    marginBottom: 12,
  },
};



class BudgetChart extends Component {

   
	
 render(){    
 
    let incomeStream = <Spinner/>
     if(!this.props.loading) { incomeStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === "income"
    })
     }
     
     console.log(incomeStream)
    
     
     let incomeTrans = <Spinner/>
     if(!this.props.loading) { incomeTrans = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category === 'income' 
    })
     }
     
    let budgetIncome = <Spinner/>
    if(Object.keys(incomeStream).length !== 0){budgetIncome = incomeStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    
    let actualIncome = <Spinner/>
    if(Object.keys(incomeTrans).length !== 0){actualIncome = incomeTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    
    // console.log(incomeTransaction)
    
    // const expenseTransaction = this.props.transaction.filter(incomeObject =>{
    //       return incomeObject.category !== 'income'
    //   })
      
    // const totalTransactions = incomeTransaction.concat(expenseTransaction)
    // //const incomeSnap = incomeTransaction.concat(incomeStream)
    
    // //const expenseSnap= expenseTransaction.concat(expenseStream)
    // console.log(incomeStream);
    // console.log(incomeTransaction);

        
const options = {
	responsive: true
}
const data = {
	labels: [
		'Actual Income',
		'Planned Income'
		
 	],
 	datasets: [{
 		data: [actualIncome, budgetIncome ],
 		label: 'Income',
 		backgroundColor: [
 		'#334960',
 		'#F46524'
 		],
 		hoverBackgroundColor: [
 		'#334960',
 		'#F46524'
 		]
 	}]
 };
 

      const { classes } = this.props;

 return (
       <div>
       <Card className={classes.card}>
         <CardContent>
         <h2>Planned/Actual Income</h2>
         <HorizontalBar className='chart' data={data} options={options} style={{maxWidth:'400px'}}/>
         </CardContent>
         </Card>
       </div>
       );
 }
}

 BudgetChart.propTypes = {
   classes: PropTypes.object.isRequired,
 };

function mapStateToProps(state){
    return{
        transaction: state.budget.transaction,
        budget: state.budget.budget,
        uid: state.firebase.auth.uid
    }
    
}

const styledComponent = withStyles(styles)


export default compose(styledComponent, connect(mapStateToProps, null))(BudgetChart)

//filter(incomeObject =>{
//        return incomeObject.type === 'income'
  //  })
  
//   const incomeBud = this.props.budget

    
//  let incomeTotal = <Spinner/>
//   if(Object.keys(incomeBud).length !== 0){incomeTotal = incomeBud.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
//     ) 
//     }
    
// const expenseStream = this.props.transaction.filter(expenseObject =>{
//         return expenseObject.type === 'expense'
//     })
    
//     let expenseTotal = <Spinner/>
//      if(Object.keys(expenseStream).length !== 0){expenseTotal = expenseStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
//     )
//     }