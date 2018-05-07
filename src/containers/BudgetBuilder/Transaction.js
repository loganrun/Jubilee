import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GroceryCard from '../../components/Cards/GroceryCard'
import Grid from 'material-ui/Grid'

class Transaction extends Component {


    
    render(){
        return(
            <MuiThemeProvider>
            <Aux>
            <Grid container spacing={24}>
            <GroceryCard/>
            <div></div>
            </Grid>
            </Aux>
            </MuiThemeProvider>
             );
        
    }
}

export default Transaction;