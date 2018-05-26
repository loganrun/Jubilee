import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Spinner from '../../components/layouts/Spinner/Spinner'




const BudgetChart = (props)=> {
	
    
const incomeStream = props.data.filter(incomeObject =>{
        return incomeObject.type === 'income'
    })
    console.log(incomeStream)
 let incomeTotal = <Spinner/>
  if(Object.keys(incomeStream).length !== 0){incomeTotal = incomeStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    ) 
    }
    
const expenseStream = props.data.filter(expenseObject =>{
        return expenseObject.type === 'expense'
    })
    
    let expenseTotal = <Spinner/>
     if(Object.keys(expenseStream).length !== 0){expenseTotal = expenseStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
    }
        
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