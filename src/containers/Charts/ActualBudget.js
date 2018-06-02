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



const ActualChart = (props)=> {
      const { classes } = props;
    
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
      <Grid item item xs={6} sm={6} lg={3}>
       <Card className={classes.card}>
        <CardContent>
        <h2>Actual Income/ Expense</h2>
        <Doughnut className='chart' data={data} />
        </CardContent>
        </Card>
        </Grid>
      </div>
    );
}

ActualChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActualChart)