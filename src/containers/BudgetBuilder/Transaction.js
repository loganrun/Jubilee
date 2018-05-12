import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GroceryCard from '../../components/Cards/GroceryCard'
//import FastFoodCard from '../../components/Cards/FastFoodCard'
import TransportationCard from '../../components/Cards/Transportation'
import ShoppingCard from '../../components/Cards/Shopping'
import EntertainmentCard from '../../components/Cards/Entertainment'
//import UtilitiesCard from '../../components/Cards/Utilities'
//import HousingCard from '../../components/Cards/Housing'
//import IncomeCard from '../../components/Cards/Income'
import TransactionItem from '../Forms/TransactionItem'
import Grid from 'material-ui/Grid'
import {connect} from 'react-redux'
import {addTransactionItem} from '../store/actions'
import Typography from 'material-ui/Typography';
import './Transaction.css'

class Transaction extends Component {
    

    render(){
        const groceryStream = this.props.transaction.filter(groceryObject =>{
        return groceryObject.category === 'groceries'
    })
        
        console.log(groceryStream);
        
        return(
            <MuiThemeProvider>
            <Aux>
            <Typography className="title" variant="display3" gutterBottom>Daily Spending / Income </Typography>
            <Grid container spacing={24}>
            
            <Grid item xs>
            <GroceryCard data={groceryStream}/>
            </Grid>
            
             <Grid item xs>
            <TransportationCard/>
            </Grid>
            <Grid item xs>
            <ShoppingCard/>
            </Grid>
            <Grid item xs>
            <EntertainmentCard/>
            </Grid>
            
            
            <TransactionItem onSubmit={values => this.props.dispatch(addTransactionItem(values))}/>
            </Grid>
            </Aux>
            </MuiThemeProvider>
             );
        
    }
}

function mapStateToProps(state){
    return{
        transaction: state.budget.transaction
    }
}

export default connect(mapStateToProps)(Transaction);

//  <Grid item xs>
//             <FastFoodCard/>
//             </Grid>
// <Grid item xs>
//             <UtilitiesCard/>
//             </Grid>
// <Grid item xs>
//             <HousingCard/>
//             </Grid>
// <Grid item xs>
//             <IncomeCard/>
//             </Grid>