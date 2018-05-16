import React from 'react';
import {Doughnut} from 'react-chartjs-2';




const ActualChart = (props)=> {
    
const actualIncome = props.data.filter(incomeObject =>{
        return incomeObject.category === 'income'
    })
 const incomeTotal = actualIncome.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
    
const actualExpense = props.data.filter(expenseObject =>{
        return expenseObject.category !== 'income'
    })
    
    const expenseTotal = actualExpense.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
        

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
        <Doughnut data={data} />
      </div>
    );
}

export default ActualChart