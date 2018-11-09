import React, { Component} from 'react'
import { Select, TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm} from 'redux-form'
import MenuItem from 'material-ui/Menu/MenuItem';
import Typography from 'material-ui/Typography';
import DialogBox from './DialogBox'
import aux from '../../hoc/Aux'

const styles = {
     marginLeft: 250
 }


const required = value => value ? undefined : 'Required'

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined


class BudgetItem extends Component {
    
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
    
    let d = new Date();
    let endDate = d.getFullYear() + "-" + (d.getMonth() + 1);

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
                    label={endDate}
                    name = "month"
                    component={renderTextField}
                    value={endDate}
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
  


export default withStyles(styles) (BudgetForm)

