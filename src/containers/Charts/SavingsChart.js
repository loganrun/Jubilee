import React, {Component} from 'react';
//import {Doughnut} from 'react-chartjs-2';
//import {HorizontalBar} from 'react-chartjs-2';
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



class SavingsChart extends Component{
    
    render(){
      const { classes } = this.props;
      
      let monthIncome = <Spinner/>
     if(!this.props.loading) { monthIncome = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category === "income"
    })
     }
     console.log(this.props.transaction)
     
     let expenseTrans = <Spinner/>
     if(!this.props.loading) { expenseTrans = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category !== 'income' 
    })
     }
     
     
    let monthlyIncome = <Spinner/>
    if(Object.keys(monthIncome).length !== 0){monthlyIncome = monthIncome.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    
    let actualExpense = <Spinner/>
    if(Object.keys(expenseTrans).length !== 0){actualExpense = expenseTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    
    let savings = monthlyIncome - actualExpense
    console.log(savings)




return (
      <div>
       <Card className={classes.card}>
        <CardContent className={"positive"}>
        <h2>Monthly Savings</h2>
        <h3>You have Saved ${savings} this month!!!</h3>
        </CardContent>
        </Card>
      </div>
    );
}
}

SavingsChart.propTypes = {
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

export default compose(styledComponent, connect(mapStateToProps, null))(SavingsChart)

