import React from 'react';
import {Bar} from 'react-chartjs-2';
import Spinner from '../../components/layouts/Spinner/Spinner'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    minWidth: 275,
  },
  
  pos: {
    marginBottom: 12,
  },
};


const ProposedBudget = (props)=> {
const { classes } = props;
const projectedIncome = props.data.filter(incomeObject =>{
        return incomeObject.type === 'income'
    }) 
    console.log(projectedIncome)
    let projIncome = <Spinner/>
    if(Object.keys(projectedIncome).length !== 0){projIncome= projectedIncome.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    }
    
const projectedExpense = props.data.filter(expenseObject =>{
        return expenseObject.type !== 'income'
    })
    let projExpense = <Spinner/>
    if(Object.keys(projectedExpense).length !== 0){projExpense= projectedExpense.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
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
        return expenseObject.category == 'housing'
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
		'Projected Income','Projected Expenses','Debt','Housing','Transportation', 'Groceries', 'Shopping',
		'Dining', 'Utilities', 'Entertainment'
	],
	datasets: [{
		data: [projIncome, projExpense,debtExpense, housingExpense, transportationExpense, groceriesExpense,
		        shoppingExpense, diningExpense, utilitiesExpense, entertainmentExpense],
		backgroundColor: [
		'#3F51B5',
		'#F44336',
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
		'#3F51B5',
		'#F44336',    
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
     <Grid item item xs={6} sm={6} lg={12}>
       <Card className={classes.card}>
        <CardContent>
        <h2>Projected Budget</h2>
        <Bar data={data}
         height= {500}
         width={800}
          options={{
            responsive: true,
            maintainAspectRatio: true,
           
            legend: {
            display: false
                },
          }}
          
        />
        </CardContent>
        </Card>
        </Grid>
      </div>
    );
}

ProposedBudget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (ProposedBudget)