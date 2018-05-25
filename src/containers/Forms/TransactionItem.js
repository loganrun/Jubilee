import React, { Component} from 'react'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm} from 'redux-form'
import MenuItem from 'material-ui/Menu/MenuItem';
import { Select, TextField } from 'redux-form-material-ui';
import DialogBox from './DialogBox'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
//import { DatePicker } from 'material-ui-pickers';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets-moment'
import Typography from 'material-ui/Typography';


import 'react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment)

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

const required = value => value ? undefined : 'Required'
//const maxLength = max => value =>
 // value && value.length > max ? `Must be ${max} characters or less` : undefined
//const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
//const minValue = min => value =>
  //value && value < min ? `Must be at least ${min}` : undefined

class TransactionItem extends Component {
    
   


    render(){
        
   
     
     const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>(
          <DateTimePicker
            onChange={onChange}
            format="DD MMM YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
          />
    )
    
    const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <aux>
        <TextField label={label} defaultValue="" {...input}  />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
         
  
        </aux>
 

)

    
        
    const { handleSubmit, reset } = this.props;
        
        return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            
            <Grid item xs>
            <DialogBox>
                <form style={{styles}} onSubmit= {handleSubmit}>
                <div>
                <Field
                  name="date"
                  showTime={false}
                  component={renderDateTimePicker}
                  validate={[ required]}
                />
                </div>
                <div>
                <Field
                    label="name"
                    name = "name"
                    component={renderTextField}
                    validate={[ required]}
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
                    parse={value => Number(value)}
                    label="amount"
                    name = "amount"
                    type="number"
                    component={renderTextField}
                    validate={[ required, number]}
                    
                />
                </div>
                
                 <div>
                <Button variant="raised" color="primary" Primary style = {{styles}} type="submit">Submit</Button>
                <Button variant="raised" color="secondary" Primary style = {{styles}} onClick={reset}>Reset</Button>
                </div>
                </form>
                </DialogBox>
                </Grid>
                
                </MuiPickersUtilsProvider>
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

 // <div className="picker">
                // <Field
                // label="date"
                // component={renderDatePicker}
                // />
                // </div>

// componentDidUpdate () {
//         if ( this.props.id ) {
//             if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
//                 axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
//                     .then( response => {
//                         // console.log(response);
//                         this.setState( { loadedPost: response.data } );
//                     } );
//             }
//         }
//     }

//     deletePostHandler = () => {
//         axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
//             .then(response => {
//                 console.log(response);
//             });
//     }
// <Field
                //   name="date"
                //   showTime={false}
                //   component={renderDateTimePicker}
                // />


// const required = value => value ? undefined : 'Required'
//         const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// import React, { Component} from 'react'
// //import Paper from 'material-ui/Paper'
// //import TextField from 'material-ui/TextField';
// import Button from 'material-ui/Button'
// import Grid from 'material-ui/Grid'
// //import {connect} from 'react-redux'
// //import * as actionTypes from '../store/actions'
// //import InputLabel  from 'material-ui/Input';
// //import { MenuItem } from 'material-ui/Menu';
// //import FormHelperText from 'material-ui/Form'
// //import Select from 'material-ui/Select'
// import { withStyles } from 'material-ui/styles';
// import { Field, reduxForm} from 'redux-form'
// import Modal from './Modal'
// import MenuItem from 'material-ui/Menu/MenuItem';
// import {Select, TextField} from 'redux-form-material-ui'
// //import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// //import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
// //import { DatePicker } from 'material-ui-pickers';

// const styles = theme => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing.unit * 2,
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 120,
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
// });

// // const categories = [
// //   {
// //     value: 'Groceries',
// //     label: 'Groceries',
// //   },
// //   {
// //     value: 'Dining Out',
// //     label: 'Dining Out',
// //   },
// //   {
// //     value: 'Shopping',
// //     label: 'Shopping',
// //   },
// //   {
// //     value: 'Transportation',
// //     label: 'Transportation',
// //   },
// //   {
// //     value: 'Entertainment',
// //     label: 'Entertainment',
// //   },
// // ];


// class TransactionItem extends Component {
    
//     state = { 
//         open: false,
//         //selectedDate: new Date(),
//     };
    
//     handleOpen = () => {
//       this.setState({ open: true});  
//     };
    
//     handleClose = () => {
//     this.setState({ open: false });
//     };

    
//     submit(e) {
//         e.preventDefault();
//         this.props.handleSubmit();
//         this.handleClose();
//     }
    
// //     handleDateChange = (date) => {
// //     this.setState({ selectedDate: date });
// //   }
//     // constructor(props){
//     //     super(props)
        
//     //     this.state = {
            
//     //     }
//     // }
//     // handleChange = name => event => {
//     //     this.value({
//     //     [name]: event.target.value,
//     //     });
//     //  };
//      render(){
//          const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
//   <Select
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     children={children}
//     {...custom}/>
// )
        
//          //const { classes } = this.props;

//     //const { selectedDate } = this.state;
//         //const { handleSubmit } = this.props;
    
//     // const renderTextField = ({input, label}) =>(
//     //     <TextField
//     //     label={label} defaultValue="" {...input} styles={styles}/>
//     //     );
//     // const renderCategory = ({input, label}) =>(
//     //     <TextField
//     //       id="select-category"
//     //       select label={label}
//     //       defaultValue= "" {...input}
//     //      // value = {this.state.category}
//     //       className={classes.textField}
//     //       onChange={(event, index, value) => input.onChange(value)}
//     //       SelectProps={{
//     //         MenuProps: {
    
//     //         },
//     //       }}
//     //       helperText="Please Select Category"
//     //       margin="normal"
//     //     >
//     //       {categories.map(option => (
//     //         <MenuItem key={option.value} value={option.value}>
//     //           {option.label}
//     //         </MenuItem>
//     //       ))}
//     //     </TextField>
//     //     )
// //         const renderSelectField = ({
// //   input,
// //   label,
// //   meta: { touched, error },
// //   children,
// //   ...custom
// // }) => (
// //   <SelectField
// //     floatingLabelText={label}
// //     errorText={touched && error}
// //     {...input}
// //     onChange={(event, index, value) => input.onChange(value)}
// //     children={children}
// //     {...custom}
// //   />
// // )

        
//         return(
            
//             <Grid item xs>
//             <Modal handleOpen={() => this.handleOpen()} handleClose = {() => this.handleClose()} open = {this.state.open}>
        
            
//                 <form style={{styles}} onSubmit= {e => this.submit(e)}>
//                 <div>
//                 <Field
//                     label="Name"
//                     name = "name"
//                     component={TextField}
//                 />
               
//                 </div>
//                 <div>
//                 <Field
//                     label="Amount"
//                     name = "amount"
//                     component={TextField}
//                 />
//                 </div>
                
//                 <div>
//                 <Field name="category" component={Select} placeholder="Pick a Category">
//                   <MenuItem value="groceries">Groceries</MenuItem>
//                   <MenuItem value="dining">Dining Out</MenuItem>
//                   <MenuItem value="transportation">Transportation</MenuItem>
//                   <MenuItem value="shopping">Shopping</MenuItem>
//                   <MenuItem value="entertainment">Entertainment</MenuItem>
//                 </Field>
//                 <Field name="plan" component={Select} placeholder="Select a plan">
//                   <MenuItem value="monthly">Monthly</MenuItem>
//                   <MenuItem value="yearly">Yearly</MenuItem>
//                   <MenuItem value="lifetime">Lifetime</MenuItem>
//                 </Field>
//                 <div>
//                 <Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
//           <MenuItem value="ff0000" primaryText="Red"/>
//           <MenuItem value="00ff00" primaryText="Green"/>
//           <MenuItem value="0000ff" primaryText="Blue"/>
//         </Field>
//         </div>

//                 </div>
//                  <div>
//                 <Field
//                     label="amount"
//                     name = ""
//                     component={TextField}
//                 />
//                 </div>
//                 <div>
//                 <Field
//                     label="title"
//                     name = ""
//                     component={TextField}
//                 />
//                 </div>
//                 <div>
//                 </div>
//                  <div>
//                 <Button variant="raised" color="primary" Primary style = {{styles}} type="submit">Submit</Button>
//                 </div>
//                 </form>
//                 </Modal>
//                 </Grid>
                
//             )
//     }
// }


 
//   const TransactionForm = reduxForm({
//       form: 'transaction'
//   }) (TransactionItem)
  
//   //<MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
  
// //   const mapStateToProps = (state) => {
// //       return {
// //           income: state.income,
// //           expense: state.expense
// //       };
// //   }

// // const mapDispatchToProps = (dispatch) => {
// //       return{
// //                   addBudgetItem: (values) => dispatch({type: actionTypes.ADD_BUDGET_ITEM, values })
        
// //       }
// //   }

// export default withStyles(styles)(TransactionForm)
 
// //onChange={this.handleChange('category')}

// // <Field
// //                     label="category"
// //                     name = "category"
// //                     component={renderCategory}
// //                 />

// // <Field
//                 //     label="frequency"
//                 //     name = "frequency"
//                 //     component={renderTextField}
//                 // />
//                 // </div>
//                 // <div>
//                 // <Field
//                 //     label="type"
//                 //     name = "type"
//                 //     component={renderTextField}
//                 // />
                
//                 // <div className="picker">
//                 //   <DatePicker
//                 //     label="With today button"
//                 //     showTodayButton
//                 //     disableFuture
//                 //     maxDateMessage="Date must be less than today"
//                 //     value={selectedDate}
//                 //     onChange={this.handleDateChange}
//                 //     animateYearScrolling={false}
//                 //   />
//                 //   </div>