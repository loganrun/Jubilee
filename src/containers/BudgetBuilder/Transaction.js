import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import GroceryCard from '../../components/Cards/GroceryCard'
import FastFoodCard from '../../components/Cards/FastFoodCard'
import TransportationCard from '../../components/Cards/Transportation'
import ShoppingCard from '../../components/Cards/Shopping'
import EntertainmentCard from '../../components/Cards/Entertainment'
import UtilitiesCard from '../../components/Cards/Utilities'
import HousingCard from '../../components/Cards/Housing'
import IncomeCard from '../../components/Cards/Income'
import DebtCard from '../../components/Cards/Debt'
import TransactionItem from '../Forms/TransactionItem'

import Grid from '@material-ui/core/Grid'
import {connect} from 'react-redux'
import {addTransactionItem, fetchTransactions} from '../store/Actions'
import Typography from '@material-ui/core/Typography';
import './Transaction.css'


class Transaction extends Component {
    
     componentDidMount() {
     const userId = this.props.uid    
    this.props.dispatch(fetchTransactions(userId))
  }

    

    render(){
        const groceryStream = this.props.transaction.filter(groceryObject =>{
        return groceryObject.category === 'groceries'
    })
    
        const incomeStream = this.props.transaction.filter(incomeObject =>{
        return incomeObject.category === 'income'
    })
        const fastfoodStream = this.props.transaction.filter(foodObject =>{
        return foodObject.category === 'dining'
    })
         const housingStream = this.props.transaction.filter(housingObject =>{
        return housingObject.category === 'housing'
    })
      const transportStream = this.props.transaction.filter(transportObject =>{
        return transportObject.category === 'transportation'
    })
    
      const utilityStream = this.props.transaction.filter(utilityObject =>{
        return utilityObject.category === 'utilities'
    })  
    
    const shoppingStream = this.props.transaction.filter(shoppingObject =>{
        return shoppingObject.category === 'shopping'
    })  
    const entertainmentStream = this.props.transaction.filter(entertainmentObject =>{
        return entertainmentObject.category === 'entertainment'
    })
    const debtStream = this.props.transaction.filter(debtObject =>{
        return debtObject.category === 'debt'
    })
    const userId = this.props.uid
        
    if(window.innerWidth >= 950){    
        return(
            <MuiThemeProvider>
            <Aux>
            <Typography className="title" variant="display3" gutterBottom>Daily Spending / Income </Typography>
             <div className={'container'}>
             <IncomeCard data={incomeStream}/>
            <DebtCard data={debtStream}/>
            <GroceryCard data={groceryStream}/>
             <FastFoodCard data={fastfoodStream}/>
            <HousingCard data={housingStream}/>
            <TransportationCard data={transportStream}/>
            <UtilitiesCard data={utilityStream}/>
            <ShoppingCard data={shoppingStream}/>
            <EntertainmentCard data={entertainmentStream}/>
            
            <TransactionItem onSubmit={values => this.props.dispatch(addTransactionItem(values, userId))}/>
            </div>
            </Aux>
            </MuiThemeProvider>
             );
    }else{
        return(
            <MuiThemeProvider>
            <Aux>
            <Typography className="title" variant="display3" gutterBottom>Daily Spending / Income </Typography>
            <Grid container spacing={24}>
            <Grid item xs>
             <IncomeCard data={incomeStream}/>
             </Grid>
             <Grid item xs>
            <DebtCard data={debtStream}/>
            </Grid>
            <Grid item xs>
            <GroceryCard data={groceryStream}/>
            </Grid>
             <Grid item xs>
             <FastFoodCard data={fastfoodStream}/>
             </Grid>
             <Grid item xs>
            <HousingCard data={housingStream}/>
             </Grid>
             <Grid item xs>
            <TransportationCard data={transportStream}/>
            </Grid>
            <Grid item xs>
                 <UtilitiesCard data={utilityStream}/>
             </Grid>
            <Grid item xs>
            <ShoppingCard data={shoppingStream}/>
            </Grid>
            <Grid item xs>
            <EntertainmentCard data={entertainmentStream}/>
            </Grid>
            
            
            <TransactionItem onSubmit={values => this.props.dispatch(addTransactionItem(values, userId))}/>
            </Grid>
            </Aux>
            </MuiThemeProvider>
             );
    }
    }
}

function mapStateToProps(state){
    return{
        transaction: state.budget.transaction,
         uid: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Transaction);

