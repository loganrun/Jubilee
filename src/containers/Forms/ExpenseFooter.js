import React, {Component} from 'react'
import { TableFooter, TableCell, TableRow} from 'material-ui/Table';
//import { withStyles } from 'material-ui/styles';
import {connect} from 'react-redux'
import './IncomeFooter.css'

class expenseFooter extends Component {
    
    
    
    render(){
        const expenseStream = this.props.budget.filter(expenseObject =>{
        return expenseObject.type === 'expense'
    })
    
    const expenseTotal = expenseStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
       
    return(
        <TableFooter className="incomeTableFooter"><TableRow><TableCell colSpan = {5} className="incomeFooterCell">Total = {expenseTotal}</TableCell> </TableRow></TableFooter>
        
    )
    }
}

function mapStateToProps(state){
    return {
        budget: state.budget.budget
    }
}


 

export default connect(mapStateToProps)(expenseFooter);

