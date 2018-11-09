import React, {Component} from 'react';
//import {Doughnut} from 'react-chartjs-2';
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
  card: {
    maxWidth: 450,
  },
  
  pos: {
    marginBottom: 12,
  },
};



class ActualChart extends Component{
    
    render(){
      const { classes } = this.props;
      
      let expenseStream = <Spinner/>
     if(!this.props.loading) { expenseStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === "expense"
    })
     }
     
     console.log(this.props.transaction)
     
     let expenseTrans = <Spinner/>
     if(!this.props.loading) { expenseTrans = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category !== 'income' 
    })
     }
     
     
    let budgetExpense = <Spinner/>
    if(Object.keys(expenseStream).length !== 0){budgetExpense = expenseStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    
    let actualExpense = <Spinner/>
    if(Object.keys(expenseTrans).length !== 0){actualExpense = expenseTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    


const data = {
	labels: [
		'Actual Expenses',
		'Planned Expenses',
	],
	datasets: [{
		data: [actualExpense, budgetExpense],
		label: 'Expenses',
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

return (
      <div>
       <Card className={classes.card}>
        <CardContent>
        <h2>Planned/Actual Expense</h2>
        <HorizontalBar className='chart' data={data} />
        </CardContent>
        </Card>
      </div>
    );
}
}

ActualChart.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styledComponent = withStyles(styles)

function mapStateToProps(state){
    return{
        transaction: state.budget.transaction,
        budget: state.budget.budget,
        uid: state.firebase.auth.uid
    }
    
}

export default compose(styledComponent, connect(mapStateToProps, null))(ActualChart)


