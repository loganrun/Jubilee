import React, {Component} from 'react'

class IncomeStream extends Component{
    render(){
        return (
            <ul>
            <li>Name:{this.props.title}, categrory:{this.props.category} amount: {this.props.amount} frequency: {this.props.frequency}</li>
            </ul>
        )
    }
}

export default IncomeStream