import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../components/layouts/Spinner/Spinner'
import {connect} from 'react-redux'
import {compose} from 'redux'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class incomeTable extends Component {

render(){
  const { classes } = this.props;
  const actualExpense = this.props.transaction.filter(expenseObject =>{
        return expenseObject.category !== 'income'
    })
    console.log(actualExpense)
    
    let expenseTotal = <Spinner/>
    if(Object.keys(actualExpense).length !== 0){ expenseTotal = actualExpense.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
    }

const debt =this.props.transaction.filter(expenseObject =>{
        return expenseObject.category === 'debt'
    })
    let debtExpense = <Spinner/>
    if(Object.keys(debt).length !== 0){debtExpense= debt.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    )
    }
const housing = props.data.filter(expenseObject =>{
        return expenseObject.category === 'housing'
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


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
              </TableRow>
            );
          })}
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