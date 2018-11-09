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

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

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
                <Button position="fixed" variant="raised" color="primary" Primary style = {{styles}} type="submit">Submit</Button>
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
  
export default withStyles(styles) (TransactionForm)
