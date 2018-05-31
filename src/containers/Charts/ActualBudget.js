import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Spinner from '../../components/layouts/Spinner/Spinner'
import Grid from 'material-ui/Grid'
import './Chart.css'



const ActualChart = (props)=> {
    
const actualIncome = props.data.filter(incomeObject =>{
        return incomeObject.category === 'income'
    })
    
    let incomeTotal = <Spinner/>
    if(Object.keys(actualIncome).length !== 0){incomeTotal = actualIncome.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
    }
    const actualExpense = props.data.filter(expenseObject =>{
        return expenseObject.category !== 'income'
    })
    
    console.log(actualExpense)
    
    let expenseTotal = <Spinner/>
    if(Object.keys(actualExpense).length !== 0){expenseTotal = actualExpense.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
    }

const data = {
	labels: [
		'Actual Income',
		'Actual Expenses',
	],
	datasets: [{
		data: [incomeTotal, expenseTotal],
		backgroundColor: [
		'#36A2EB',
		'#FF6384'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#FF6384'
		]
	}]
};

return (
      <div>
        <h2>Actual Income/ Expense</h2>
        <Doughnut className='chart' data={data} />
      </div>
    );
}

export default ActualChart