import React, { Component} from 'react'
//import Paper from 'material-ui/Paper'
import { Select, TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
//import {connect} from 'react-redux'
//import * as actionTypes from '../store/actions'
//import InputLabel  from 'material-ui/Input';
//import { MenuItem } from 'material-ui/Menu';
//import FormHelperText from 'material-ui/Form'
//import Select from 'material-ui/Select'
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm} from 'redux-form'
import MenuItem from 'material-ui/Menu/MenuItem';
import Typography from 'material-ui/Typography';
//import Modal from './Modal'
import DialogBox from './DialogBox'
import aux from '../../hoc/Aux'

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
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined

class BudgetItem extends Component {
    
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

    const { handleSubmit, reset,  } = this.props;
    const lower = value => value && value.toLowerCase()
    
    const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <aux>
        <TextField label={label} defaultValue="" {...input}  />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
         
  
        </aux>
 

)
        
        return(
            <Grid item xs>
            
        <DialogBox>
            
                <form style={{styles}} onSubmit= {handleSubmit}>
                <div>
                <Field
                    label="name"
                    name = "name"
                    component={renderTextField}
                    validate={[ required]}
                />
                </div>
                 <div>
                
                <Field
                    parse={value => Number(value)}
                    label="amount"
                    name = "amount"
                    type="number"
                    component={renderTextField}
                    validate={[ required, number]}
                />
               
                </div>
                <div>
                 <Field name="category" label="category" component={Select} placeholder="Pick a Category" validate={[ required]}>
                   <MenuItem value="income">Income</MenuItem>
                    <MenuItem value="debt">Debt</MenuItem>
                   <MenuItem value="groceries">Groceries</MenuItem>
                   <MenuItem value="dining">Dining Out</MenuItem>
                   <MenuItem value="housing">Housing</MenuItem>
                   <MenuItem value="transportation">Transportation</MenuItem>
                   <MenuItem value="utilities">Utilities</MenuItem>
                   <MenuItem value="shopping">Shopping</MenuItem>
                   <MenuItem value="entertainment">Entertainment</MenuItem>
                 </Field>
                  <Typography variant="subheading" gutterBottom>Categories</Typography>
                 </div>
                
                
                
                <div>
                <Field
                    label="frequency - monthly,once"
                    name = "frequency"
                    component={renderTextField}
                    validate={[required]}
                />
                </div>
                <div>
                <Field
                    label="type - income/expense"
                    name = "type"
                    component={renderTextField}
                    validate={[ required]}
                    normalize={lower}
                />

                </div>
                 <div>
                <Button variant="raised" color="primary" Primary style = {{styles}} type="submit">Submit</Button>
                <Button variant="raised" color="secondary" Primary style = {{styles}} onClick={reset}>Reset</Button>
                </div>
                </form>
                </DialogBox>     
                </Grid>
            )
    }
}


 
  const BudgetForm = reduxForm({
      form: 'budget'
  }) (BudgetItem)
  
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

export default withStyles(styles) (BudgetForm)

// <Field
//                     label="category - job,debt,housing,etc"
//                     name = "category"
//                     component={renderTextField}
//                     validate={[ required]}
//                 />
                  
//                 </div>

//disabled={pristine || submitting}

// <div>
//                 <Field
//                     label="id"
//                     name = "id"
//                     component={renderField}
//                     validate={[ required]}
//                 />
//                 </div>

        // <TextField
        // label={label} defaultValue="" {...input}/>


//onSubmit= {(e) => {this.addBudgetItem(e)}}



 // <TextField
                //     label="amount"
                //     id="margin-none"
                //     defaultValue="amount"
                //     helperText="How much"
                //     name = "amount"
                //     value = {this.state.amount} 
                //     onChange={e => this.change(e)}
                // />




//<Modal  handleOpen={() => this.handleOpen()} handleClose = {() => this.handleClose()} open = {this.state.open}> </Modal>











// ContactForm = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ContactForm)

//export default  contactForm
// const validate = values => {
//   const errors = {}
//   const requiredFields = [
//     'title',
//     'category',
//     'type',
//     'frequency',
//     'amount'
//   ]
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required'
//     }
//   })
//   if (
//     values.email &&
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'
//   }
//   return errors
// }

// const renderTextField = ({
//   input,
//   label,
//   meta: { touched, error },
//   ...custom
// }) => (
//   <TextField
//     hintText={label}
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     {...custom}
//   />
// )

// const renderCheckbox = ({ input, label }) => (
//   <Checkbox
//     label={label}
//     checked={input.value ? true : false}
//     onCheck={input.onChange}
//   />
// )

// // const renderRadioGroup = ({ input, ...rest }) => (
// //   <RadioButtonGroup
// //     {...input}
// //     {...rest}
// //     valueSelected={input.value}
// //     onChange={(event, value) => input.onChange(value)}
// //   />
// // )

// const renderSelectField = ({
//   input,
//   label,
//   meta: { touched, error },
//   children,
//   ...custom
// }) => (
//   <SelectField
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     children={children}
//     {...custom}
//   />
// )
// const contactForm = props => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//       // eslint-disable-next-line
//     <form onSubmit={handleSubmit} style= {{marginLeft: 500}}>
//       <div>
//         <Field
//           name="firstName"
//           component={renderTextField}
//           label="First Name"
//         />
//       </div>
//       <div>
//         <Field name="lastName" component={renderTextField} label="Last Name" />
//       </div>
//       <div>
//         <Field name="email" component={renderTextField} label="Email" />
//       </div>
      
//       <div>
//         <Field
//           name="favoriteColor"
//           component={renderSelectField}
//           label="Favorite Color"
//         >
//           <MenuItem value="ff0000" primaryText="Red" />
//           <MenuItem value="00ff00" primaryText="Green" />
//           <MenuItem value="0000ff" primaryText="Blue" />
//         </Field>
//       </div>
//       <div>
//         <Field name="employed" component={renderCheckbox} label="Employed" />
//       </div>
//       <div>
//         <Field
//           name="notes"
//           component={renderTextField}
//           label="Notes"
//           multiLine={true}
//           rows={2}
//         />
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>
//           Submit
//         </button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   )
// }

// export default reduxForm({
//   form: 'contactForm', // a unique identifier for this form
//   validate
// })(contactForm)

// class ContactForm extends Component {
    
//     render(){
  
//   const {handleSubmit} = this.props 
//         return(
//          <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name</label>
//         <Field name="firstName" component="input" type="text" />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name</label>
//         <Field name="lastName" component="input" type="text" />
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <Field name="email" component="input" type="email" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//         )
//     }
// }

