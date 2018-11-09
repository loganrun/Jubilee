import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../components/layouts/Spinner/Spinner';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Typography from '@material-ui/core/Typography';
import './tables.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: 700,
  },
});

class incomeTable extends Component {

render(){
  const { classes } = this.props;
  
  let incomeStream = <Spinner/>
     if(!this.props.loading) { incomeStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === "income"
    })
     }
     
     console.log(incomeStream)
    
     
     let incomeTrans = <Spinner/>
     if(!this.props.loading) { incomeTrans = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category === 'income' 
    })
     }
     
    let budgetIncome = <Spinner/>
    if(Object.keys(incomeStream).length !== 0){budgetIncome = incomeStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    
    let actualIncome = <Spinner/>
    if(Object.keys(incomeTrans).length !== 0){actualIncome = incomeTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c})}
    
    let diffIncome =  actualIncome - budgetIncome; 
    
    console.log(diffIncome);
  

const employmentTrans =this.props.transaction.filter(expenseObject =>{
        return expenseObject.name === 'Employment'
    })
    console.log(employmentTrans)
    let employmentActual = <Spinner/>
    if(Object.keys(employmentTrans).length !== 0){employmentActual= employmentTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    } else {
        employmentActual = 0;
    }
    
const employBud = incomeStream.filter(incomeObject =>{
        return incomeObject.name === 'Employment'
    })
    console.log(employBud)
    let employmentBud = <Spinner/>
    if(Object.keys(employBud).length !== 0){employmentBud= employBud.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    } else {
        employmentBud = 0;
    }
    console.log(employmentBud);
    console.log(employmentActual);
    
    let employDifference = employmentActual-employmentBud;
    


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
        <TableRow><Typography variant="title" id="tableTitle">
            INCOME
          </Typography></TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Planned</TableCell>
            <TableCell>Actual</TableCell>
            <TableCell>Diff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>totals</TableCell>
            <TableCell>{budgetIncome}</TableCell>
            <TableCell>{actualIncome}</TableCell>
            <TableCell>{diffIncome}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow>
                <TableCell className={'tableCell'} component="th" scope="row"> Employment</TableCell>
                <TableCell className={'tableCell'} numeric>{employmentBud}</TableCell>
                <TableCell className={'tableCell'} numeric>{employmentActual}</TableCell>
                <TableCell className={'tableCell'} numeric>{employDifference}</TableCell>
              </TableRow>   
        </TableBody>
      </Table>
    </Paper>
  );
}
}

incomeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
    return{
        transaction: state.budget.transaction,
        budget: state.budget.budget,
        uid: state.firebase.auth.uid
    }
    
}

const styledComponent = withStyles(styles)


export default compose(styledComponent, connect(mapStateToProps, null))(incomeTable)

  
//   const budgetExpense = this.props.budget.filter(expenseObject =>{
//         return expenseObject.category !== 'income'
//     })
//     console.log(budgetExpense)
    
//     let expenseTotal = <Spinner/>
//     if(Object.keys(actualExpense).length !== 0){ expenseTotal = actualExpense.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
//     )
//     }
// const investmentTrans = this.props.transaction.filter(expenseObject =>{
//         return expenseObject.name === 'investment'
//     })
    
//     let investmentActual = <Spinner/>
//     if(Object.keys(investmentTrans).length !== 0){investmentActual= investmentTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
//     )
//     }else{
//         investmentActual = 0;
//     }
    
// const bonusTrans = this.props.transaction.filter(expenseObject =>{
//         return expenseObject.name === 'bonus'
//     })
    
//     let bonusActual = <Spinner/>
//     if(Object.keys(bonusTrans).length !== 0){bonusActual= bonusTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
//     )
//     }else{
//         bonusActual = 0;
//     }
// const interestTrans = this.props.transaction.filter(expenseObject =>{
//         return expenseObject.name === 'interest'
//     })
    
//     let interestActual = <Spinner/>
//     if(Object.keys(interestTrans).length !== 0){interestActual= interestTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
//     )
//     }else{
//         interestActual = 0;
//     }
// const otherTrans = this.props.transaction.filter(expenseObject =>{
//         return expenseObject.name === 'other'
//     })
    
//     let otherActual = <Spinner/>
//     if(Object.keys(otherTrans).length !== 0){otherActual= otherTrans.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
//     )
//     }else{
//         otherActual = 0;
//     }
