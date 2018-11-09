import React from 'react';
//import {Doughnut} from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';
//import {Bar} from 'react-chartjs-2';
import Spinner from '../../components/layouts/Spinner/Spinner'
//import Grid from 'material-ui/Grid'
import './Chart.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    maxWidth: 450,
  },
  
  pos: {
    marginBottom: 12,
  },
};

const ExpenseChart = (props)=> {
    const { classes } = props;

    
const actualExpense = props.data.filter(expenseObject =>{
        return expenseObject.category !== 'income'
    })
    console.log(actualExpense)
    
    let expenseTotal = <Spinner/>
    if(Object.keys(actualExpense).length !== 0){ expenseTotal = actualExpense.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
    }

const debt = props.data.filter(expenseObject =>{
        return expenseObject.category === 'debt'
    })
    let debtExpense = <Spinner/>
    if(Object.keys(debt).length !== 0){debtExpense= debt.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    }
const housing = props.data.filter(expenseObject =>{
        return expenseObject.category === 'housing'
    })
    
    let housingExpense = <Spinner/>
    if(Object.keys(housing).length !== 0){housingExpense= housing.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    }

const transportation = props.data.filter(expenseObject =>{
        return expenseObject.category === 'transportation'
    })
    let transportationExpense= <Spinner/>
    if(Object.keys(transportation).length !== 0){transportationExpense= transportation.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    }
const groceries = props.data.filter(expenseObject =>{
        return expenseObject.category === 'groceries'
    })
    
    let groceriesExpense = <Spinner/>
    if(Object.keys(groceries).length !== 0){groceriesExpense= groceries.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    }

const shopping = props.data.filter(expenseObject =>{
        return expenseObject.category === 'shopping'
    })
    let shoppingExpense = <Spinner/>
    if(Object.keys(shopping).length !== 0){shoppingExpense= shopping.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )}

const dining = props.data.filter(expenseObject =>{
        return expenseObject.category === 'dining'
    })
    let diningExpense = <Spinner/>
    if(Object.keys(dining).length !== 0) {diningExpense= dining.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )}
    
const utilities = props.data.filter(expenseObject =>{
        return expenseObject.category === 'utilities'
    })
    
    let utilitiesExpense = <Spinner/>
    if(Object.keys(utilities).length !== 0){utilitiesExpense= utilities.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )}
    
const entertainment = props.data.filter(expenseObject =>{
        return expenseObject.category === 'entertainment'
    })
    
    let entertainmentExpense = <Spinner/>
    if(Object.keys(entertainment).length !== 0){entertainmentExpense= entertainment.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )}

const data = {
	labels: [
		'Debt','Housing','Transportation', 'Groceries', 'Shopping',
		'Dining', 'Utilities', 'Entertainment'
	],
	datasets: [{
		data: [debtExpense, housingExpense, transportationExpense, groceriesExpense,
		        shoppingExpense, diningExpense, utilitiesExpense, entertainmentExpense],
		label: 'Expense Beakdown',
		backgroundColor: [
		'#36A2EB',
		'#FF6384',
		'#5365A2',
		'#2E53D5',
		'#44646F',
		'#DA9066',
		'#A23213',
		'#D7BABB'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#FF6384',
		'#5365A2',
		'#2E53D5',
		'#44646F',
		'#DA9066',
		'#A23213',
		'#D7BABB'
		]
	}]
};

return (
      <div>
       <Card className={classes.card}>
        <CardContent>
        <h2>Itemized Expenses</h2>
        <HorizontalBar className='chart' data={data} />
        
        </CardContent>
        </Card>
      </div>

    );
}

ExpenseChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpenseChart)
//<Doughnut className='chart' data={data} />
// <Bar data={data}
//          height= {200}
//          width={400}
//           options={{
//             responsive: true,
//             maintainAspectRatio: true,
           
//             legend: {
//             display: false
//                 },
//           }}
          
//         />