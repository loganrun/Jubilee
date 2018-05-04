import React from 'react';



const ActualBudget = (props) => (
    
    <ul>
    <li key = {props.id}>Name:{props.title}, category:{props.category} amount: {props.amount} frequency: {props.frequency}</li>
    </ul>
)

export default ActualBudget;