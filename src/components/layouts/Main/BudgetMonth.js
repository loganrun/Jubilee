import React from 'react';
import NewLayout from '../../../containers/NewLayout'
import Aux from '../../../hoc/Aux'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const MonthlyBudget = (props) => (
     <Aux>
     <NewLayout>
     <main>
     <Grid item sm >
                <Paper >
                   <Table >
                    <TableHead>
                      <TableRow>
                        <CustomTableCell>Category</CustomTableCell>
                        <CustomTableCell>Title</CustomTableCell>
                        <CustomTableCell>Type</CustomTableCell>
                        <CustomTableCell>Frequency</CustomTableCell>
                        <CustomTableCell numeric>Amount</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <CustomTableCell>{n.category}</CustomTableCell>
                            <CustomTableCell>{n.title}</CustomTableCell>
                            <CustomTableCell>{n.type}</CustomTableCell>
                            <CustomTableCell>{n.frequency}</CustomTableCell>
                            <CustomTableCell numeric>{n.amount}</CustomTableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    <TableFooter>
                    <p>Something oes here</p>
                    </TableFooter>
                  </Table>
                </Paper>
                <form onSubmit= {(e) => {this.addItemExpense(e)}}>
                <TextField
                    label="id"
                    id="margin-none"
                    defaultValue="id"
                    helperText="Some important text"
                    value = {props.id} 
                    name = "id"
                    onChange={e => this.change(e)}
                />
                <TextField
                    label="category"
                    id="margin-none"
                    defaultValue="category"
                    helperText="Housing, Debts"
                    name = "category"
                    value = {props.category} 
                    onChange={e => this.change(e)}
                />
                <TextField
                    label="amount"
                    id="margin-none"
                    defaultValue="amount"
                    helperText="How much"
                    name = "amount"
                    value = {props.amount} 
                    onChange={e => this.change(e)}
                />
                <button onClick={(e) => this.onSubmit()} type="submit">Add</button>
                </form>
            </Grid>
            </main>
            </NewLayout>
            </Aux>

)

export default MonthlyBudget;