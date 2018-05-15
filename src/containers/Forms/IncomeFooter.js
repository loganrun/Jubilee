import React, {Component} from 'react'
import TableFooter from 'material-ui/Table'
//import { withStyles } from 'material-ui/styles';
import {connect} from 'react-redux'
import './IncomeFooter.css'

class incomeFooter extends Component {
    
    
    
    render(){
        const incomeStream = this.props.budget.filter(incomeObject =>{
        return incomeObject.type === 'income'
    })
    
    const incomeTotal = incomeStream.map(function(b){return b.amount}).reduce(function(p,c){return p + c}
    
    )
       
    return(
       <TableFooter className="incomeTableFooter"> Total = {incomeTotal} </TableFooter>
        
    )
    }
}

function mapStateToProps(state){
    return {
        budget: state.budget.budget
    }
}


 

export default connect(mapStateToProps)(incomeFooter);

