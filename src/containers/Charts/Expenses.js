import React from 'react';
import {Doughnut} from 'react-chartjs-2';




const ExpenseChart = (props)=> {

    
const actualExpense = props.data.filter(expenseObject =>{
        return expenseObject.category !== 'income'
    })
    console.log(actualExpense)
    
    const expenseTotal = actualExpense.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )

const debt = props.data.filter(expenseObject =>{
        return expenseObject.category === 'debt'
    })
    
const debtExpense= debt.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
const housing = props.data.filter(expenseObject =>{
        return expenseObject.category === 'housing'
    })
const housingExpense= housing.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )

const transportation = props.data.filter(expenseObject =>{
        return expenseObject.category === 'transportation'
    })
const transportationExpense= transportation.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    
const groceries = props.data.filter(expenseObject =>{
        return expenseObject.category === 'groceries'
    })
const groceriesExpense= groceries.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )

const shopping = props.data.filter(expenseObject =>{
        return expenseObject.category === 'shopping'
    })
const shoppingExpense= shopping.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )

const dining = props.data.filter(expenseObject =>{
        return expenseObject.category === 'dining'
    })
const diningExpense= dining.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    
const utilities = props.data.filter(expenseObject =>{
        return expenseObject.category === 'utilities'
    })
const utilitiesExpense= utilities.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    
const entertainment = props.data.filter(expenseObject =>{
        return expenseObject.category === 'entertainment'
    })    
const entertainmentExpense= entertainment.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )

const data = {
	labels: [
		'Debt','Housing','Transportation', 'Groceries', 'Shopping',
		'Dining', 'Utilities', 'Entertainment'
	],
	datasets: [{
		data: [debtExpense, housingExpense, transportationExpense, groceriesExpense,
		        shoppingExpense, diningExpense, utilitiesExpense, entertainmentExpense],
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
        <h2>Expenses</h2>
        <Doughnut data={data} />
      </div>
    );
}

export default ExpenseChart