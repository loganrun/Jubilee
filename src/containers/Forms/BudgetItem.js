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
//import Modal from './Modal'
import DialogBox from './DialogBox'

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

    const { handleSubmit } = this.props;
    
    const renderTextField = ({input, label}) =>(
        <TextField
        label={label} defaultValue="" {...input}/>
        );
        
        return(
            <Grid item xs>
            
        <DialogBox>
            
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
                    component={renderTextField}
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

