import React, { Component} from 'react'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm} from 'redux-form'
import Modal from './Modal'
import MenuItem from 'material-ui/Menu/MenuItem';
import { Select, TextField } from 'redux-form-material-ui';


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

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  submit(e) {
    e.preventDefault();
    this.handleClose();
    this.props.handleSubmit();
  }

    render(){
        
        const { classes } = this.props;


    const { handleSubmit } = this.props;
        
        return(
            <Grid item xs>
            <Modal handleOpen={() => this.handleOpen()} handleClose = {() => this.handleClose()} open = {this.state.open}>
        
            
                <form style={{styles}} onSubmit= {e => this.submit(e)}>

                  <Field name="plan" component={Select} placeholder="Select a plan">
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly</MenuItem>
                    <MenuItem value="lifetime">Lifetime</MenuItem>
                  </Field>
            
                <div>
                <Field
                    label="id"
                    name = "id"
                    component={TextField}
                />
                </div>
                <div>

                  
                </div>
                 <div>
                <Field
                    label="amount"
                    name = "amount"
                    component={TextField}
                />
               
                </div>
                <div>
                <Field
                    label="title"
                    name = "title"
                    component={TextField}
                />
                </div>
                <div>
                <Field
                    label="frequency"
                    name = "frequency"
                    component={TextField}
                />
                </div>
                <div>
                <Field
                    label="type"
                    name = "type"
                    component={TextField}
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

