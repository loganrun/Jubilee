import React, {Component} from 'react';
//import firebase from 'react-redux-firebase'
import UserDialog from './UserDialog'
//import {auth} from '../../config/firebase'
//import './Signup.css'
//import PropTypes from 'prop-types';
//import TextField from '@material-ui/core/TextField';
//import { withStyles, createMuiTheme} from '@material-ui/core/styles';
import { withRouter} from 'react-router-dom';
import TextField from 'material-ui/TextField';
//import { withStyles } from 'material-ui/styles';
import { Field, reduxForm} from 'redux-form'
import aux from '../../hoc/Aux'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'


const styles = {
     marginLeft: 250
 }

// const styles = theme => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing.unit * 2,
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 120,
//   },
// });

const required = value => value ? undefined : 'Required'

// const maxLength = max => value =>
//      value && value.length > max ? `Must be ${max} characters or less` : undefined
//      const maxLength28 = maxLength(28)

//  const minLength = min => value =>
//      value && value.length < min ? `Must be at least ${min} characters` : undefined
//      const minLength6 = minLength(6)

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength28 = maxLength(28)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength6 = minLength(6)

 const email = value =>
   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
   'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined

class LogInPage extends Component {
    
    state = { 
        open: false,
        //selectedDate: new Date(),
    };
    
    handleOpen = () => {
      this.setState({ open: true});  
    };
    
    handleClose = () => {
    this.setState({ open: false });
    };

    
    // submit(e) {
    //     e.preventDefault();
    //     this.props.handleSubmit();
    //     this.handleClose();
    // }

    render(){

    const { handleSubmit} = this.props;
    //const lower = value => value && value.toLowerCase()
    
    const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <aux>
        <TextField label={label} defaultValue="" {...input}  />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </aux>
 

)
        
        return(
            <Grid item xs>
            
            
        <UserDialog>
            <h2>Log In</h2>
                <form style={{styles}} onSubmit= {handleSubmit}>
                <div>
                <Field
                    label="email"
                    name = "email"
                    component={renderTextField}
                    validate={[ required, email]}
                />
                </div>
                <div>
                <Field
                    label="Password"
                    name = "password"
                    type= "password"
                    component={renderTextField}
                    validate={[ required, minLength6, maxLength28 ]}
                />
                </div>
                 <div>
                <Button variant="raised" color="primary" 
                Primary style = {{styles}} 
                type="submit">Submit</Button>
        
                </div>
                </form>
                </UserDialog>     
                </Grid>
            )
    }
}


 
  const LoginForm = reduxForm({
      form: 'login'
  }) (LogInPage)
  
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
export default withRouter(LoginForm);