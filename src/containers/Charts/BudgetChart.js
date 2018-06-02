import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Spinner from '../../components/layouts/Spinner/Spinner'
import Grid from 'material-ui/Grid'
import './Chart.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    minWidth: 415,
  },
  
  pos: {
    marginBottom: 12,
  },
};



const BudgetChart = (props)=> {
    const { classes } = props;
	
    
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
       <Grid item item xs={6} sm={6} lg={3}>
       <Card className={classes.card}>
        <CardContent>
        <h2>Budgeted Income/ Expense</h2>
        <Doughnut className='chart' data={data} options={options} style={{maxWidth:'400px'}}/>
        </CardContent>
        </Card>
        </Grid>
      </div>
    );
}

BudgetChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BudgetChart)