import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GroceryCard from '../../components/Cards/GroceryCard'
import FastFoodCard from '../../components/Cards/FastFoodCard'
import TransportationCard from '../../components/Cards/Transportation'
import ShoppingCard from '../../components/Cards/Shopping'
import EntertainmentCard from '../../components/Cards/Entertainment'
import TransactionItem from '../Forms/TransactionItem'
import Grid from 'material-ui/Grid'

class Transaction extends Component {

    doSomething(values){
        //these are the values of teh form
       console.log(values);
    }
    
    render(){
        return(
            <MuiThemeProvider>
            <Aux>
            <Grid container spacing={24}>
            <Grid item xs>
            <GroceryCard/>
            </Grid>
             <Grid item xs>
            <FastFoodCard/>
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
            <TransactionItem onSubmit={values => this.doSomething(values)}/>
            </Grid>
            </Aux>
            </MuiThemeProvider>
             );
        
    }
}

export default Transaction;
