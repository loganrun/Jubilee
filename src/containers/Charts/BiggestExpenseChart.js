import React, {Component} from 'react';
import Spinner from '../../components/layouts/Spinner/Spinner'
import {connect} from 'react-redux'
import {compose} from 'redux'
import './Chart.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import maxBy from 'lodash/maxBy';


const styles = {
  card: {
    maxWidth: 450,
  },
  
  pos: {
    marginBottom: 12,
  },
};



class biggestExpeneseChart extends Component{
    
    render(){
      const { classes } = this.props;
      
      let monthExpense = <Spinner/>
     if(!this.props.loading) { monthExpense = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category !== "income"
    })
     }
     
     let largestExpense = <Spinner/>
     if(Object.keys(monthExpense).length !== 0){largestExpense = maxBy(monthExpense, function(o){return o.amount})}


return (
      <div>
       <Card className={classes.card}>
        <CardContent className={"negative"}>
        <h2>Largest Expense</h2>
        <h3>You spent ${largestExpense.amount} on {largestExpense.name} this month!!!</h3>
        </CardContent>
        </Card>
      </div>
    );
}
}

biggestExpeneseChart.propTypes = {
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

export default compose(styledComponent, connect(mapStateToProps, null))(biggestExpeneseChart)
