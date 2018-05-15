import React, {Component} from 'react';
import Grid from 'material-ui/Grid'
import Aux from '../../hoc/Aux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'
import SummaryTable from '../Forms/SummaryTable';
import Typography from 'material-ui/Typography';
import {fetchBudget} from '../store/actions'
import './MonthlyBudget.css'


 
class BudgetSummary extends Component{
 
  componentDidMount () {
       
        this.props.fetchBudget();
    }
    
 render(){
     
    //  const incomeStream = this.state.data.filter(incomeObject =>{
    //     return incomeObject.type === 'income'
    // })
     
    //  const expenseStream = this.state.data.filter(incomeObject =>{
    //     return incomeObject.type === 'expense'
    // })
    const bud = this.props.budget
    console.log(bud)
    
    const trans = this.props.transaction
    console.log(trans)
    
     return(
         <MuiThemeProvider>
         <Aux>
         <Typography className="title" variant="display3" gutterBottom>Actual Spending / Income </Typography>
         <Grid container spacing={24}>
        <SummaryTable/>
        
        </Grid>
        </Aux>
        </MuiThemeProvider>
         
         );
    
 }   
}
function mapStateToProps(state){
    return{
        transaction: state.budget.transaction,
        budget: state.budget.budget
    }
}
 

export default connect(mapStateToProps, {fetchBudget})(BudgetSummary);


 // axios.get( 'https://jsonplaceholder.typicode.com/posts' )
        //     .then( response => {
        //         const posts = response.data.slice(0, 4);
        //         const updatedPosts = posts.map(post => {
        //             return {
        //                 ...post,
        //                 author: 'Max'
        //             }
        //         });
        //         this.setState({posts: updatedPosts});
        //         // console.log( response );
        //     } )
        //     .catch(error => {
        //         // console.log(error);
        //         this.setState({error: true});
        //     });