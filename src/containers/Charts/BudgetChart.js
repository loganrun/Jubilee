import React from 'react';
import {Doughnut} from 'react-chartjs-2';




const BudgetChart = (props)=> {
    
const incomeStream = props.data.filter(incomeObject =>{
        return incomeObject.type === 'income'
    })
 const incomeTotal = incomeStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
    
const expenseStream = props.data.filter(expenseObject =>{
        return expenseObject.type === 'expense'
    })
    
    const expenseTotal = expenseStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
        
const options = {
	responsive: true
}
const data = {
	labels: [
		'Total Budgeted Income',
		'Total Budgeted Expenses',
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
        <h2>Budgeted Income/ Expense</h2>
        <Doughnut data={data} options={options} />
      </div>
    );
}

export default BudgetChart