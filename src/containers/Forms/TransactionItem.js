import React, { Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import {connect} from 'react-redux'
import * as actionTypes from '../store/actions'
//import InputLabel  from 'material-ui/Input';
//import { MenuItem } from 'material-ui/Menu';
//import FormHelperText from 'material-ui/Form'
//import Select from 'material-ui/Select'
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm} from 'redux-form'
import Modal from './Modal'
import MenuItem from 'material-ui/Menu/MenuItem';


const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

const categories = [
  {
    value: 'Groceries',
    label: 'Groceries',
  },
  {
    value: 'Dining Out',
    label: 'Dining Out',
  },
  {
    value: 'Shopping',
    label: 'Shopping',
  },
  {
    value: 'Transportation',
    label: 'Transportation',
  },
  {
    value: 'Entertainment',
    label: 'Entertainment',
  },
];


class TransactionItem extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            
        }
    }
    handleChange = name => event => {
        this.setState({
        [name]: event.target.value,
        });
     };
    render(){
        
        const { classes } = this.props;


    const { handleSubmit } = this.props;
    
    const renderTextField = ({input, label}) =>(
        <TextField
        label={label} defaultValue="" {...input} styles={styles}/>
        );
    const renderCategory = ({input, label}) =>(
        <TextField
          id="select-category"
          select label={label}
          defaultValue= "" {...input}
          value = {this.state.category}
          className={classes.textField}
          onChange={this.handleChange('category')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please Select Category"
          margin="normal"
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        )
        
        return(
            <Grid item xs>
            <Modal>
        
            
                <form style={{styles}} onSubmit= {handleSubmit}>
            
                <div>
                <Field
                    label="id"
                    name = "id"
                    component={renderTextField}
                />
                </div>
                <div>
                <Field
                    label="category"
                    name = "category"
                    component={renderCategory}
                />
                  
                </div>
                 <div>
                <Field
                    label="amount"
                    name = "amount"
                    component={renderTextField}
                />
               
                </div>
                <div>
                <Field
                    label="title"
                    name = "title"
                    component={renderTextField}
                />
                </div>
                <div>
                <Field
                    label="frequency"
                    name = "frequency"
                    component={renderTextField}
                />
                </div>
                <div>
                <Field
                    label="type"
                    name = "type"
                    component={renderTextField}
                />

                </div>
                 <div>
                <Button variant="raised" color="primary" Primary style = {{styles}} type="submit">Submit</Button>
                </div>
                </form>
                </Modal>
                </Grid>
            )
    }
}


 
  const TransactionForm = reduxForm({
      form: 'transaction'
  }) (TransactionItem)
  
//   const mapStateToProps = (state) => {
//       return {
//           income: state.income,
//           expense: state.expense
//       };
//   }

// const mapDispatchToProps = (dispatch) => {
//       return{
//                   addBudgetItem: (values) => dispatch({type: actionTypes.ADD_BUDGET_ITEM, values })
        
//       }
//   }

export default withStyles(styles) (TransactionForm)

