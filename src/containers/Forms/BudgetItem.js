import React, { Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
//import InputLabel  from 'material-ui/Input';
//import { MenuItem } from 'material-ui/Menu';
//import FormHelperText from 'material-ui/Form'
//import Select from 'material-ui/Select'
import { withStyles } from 'material-ui/styles';

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
    id: '',
    category: '',
    type: '',
    title: '',
    Amount: null,
    frequency: ''
}

change = e =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
        id: '',
    category: '',
    type: '',
    title: '',
    Amount: null,
    frequency: ''
    })
}
    render(){

        return(
            <Grid item xs>
            <Paper>
            
                <form style = {{styles}} >
            
                <div>
                <TextField
                    label="id"
                    id="margin-none"
                    defaultValue="id"
                    helperText="Some important text"
                    value = {this.state.id} 
                    name = "id"
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="category"
                    id="margin-none"
                    defaultValue="category"
                    helperText="Housing, Debts, Etc"
                    value = {this.state.category} 
                    name = "category"
                    onChange={e => this.change(e)}
                />
                  
                </div>
                 <div>
                <TextField
                    label="amount"
                    id="margin-none"
                    defaultValue="amount"
                    helperText="Amount spent"
                    name = "amount"
                    value = {this.state.amount} 
                    onChange={e => this.change(e)}
                />
               
                </div>
                <div>
                <TextField
                    label="title"
                    id="margin-none"
                    defaultValue="title"
                    helperText="name"
                    name = "title"
                    value = {this.state.title} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="frequency"
                    id="margin-none"
                    defaultValue="frequency"
                    helperText="How often"
                    name = "frequency"
                    value = {this.state.frequency} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <TextField
                    label="type"
                    id="margin-none"
                    defaultValue="type"
                    helperText="Income/Expense"
                    name = "type"
                    value = {this.state.type} 
                    onChange={e => this.change(e)}
                />
                </div>
                <div>
                <Button variant="raised" color="primary" Primary style = {{styles}} onClick={e => this.onSubmit(e)} type="submit">Submit</Button>
                </div>
                </form>
                </Paper>
                </Grid>
            )
    }
}

// const mapStateToProps = (state) => {
//      return {
//          income: state.income,
//          expense: state.expense
//      };
//  }

//  const mapDispatchToProps = (dispatch) => {
//      return{
//                   addBudgetItem: (values) => dispatch({type: actionTypes.ADD_BUDGET_ITEM, values })
        
//      }
//  }
 
  

export default withStyles(styles)  (BudgetItem)


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

