import React, {Component} from 'react';
import UserDialog from './UserDialog'
import { withRouter} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import { Field, reduxForm} from 'redux-form'
import aux from '../../hoc/Aux'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'


const styles = {
     marginLeft: 250
 }



const required = value => value ? undefined : 'Required'

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength28 = maxLength(28)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength6 = minLength(6)

 const email = value =>
   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
   'Invalid email address' : undefined

class LogInPage extends Component {
    
    state = { 
        open: false,
    };
    
    handleOpen = () => {
      this.setState({ open: true});  
    };
    
    handleClose = () => {
    this.setState({ open: false });
    };

    
    

    render(){

    const { handleSubmit} = this.props;

    
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
  
export default withRouter(LoginForm);