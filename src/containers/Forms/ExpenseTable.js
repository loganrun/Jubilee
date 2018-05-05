import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid'
import red from 'material-ui/colors/red';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: red[500],
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


// const 
// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const data = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const row = (x, i, header) =>
            <TableRow key={`tr-${i}`}>
              {
                  header.map((y,k) =>(
            <CustomTableCell key={`trc-${k}`}>
            {x[y.prop]}
            </CustomTableCell>
                      )) 
              }
              </TableRow>;

    const ExpenseTable = ({data, header}) => {
//   const { classes } = props;

  return (
    <Grid item xs>  
    <Paper>
      <Table>
      <TableHead>Expense</TableHead>
        <TableHead>
          <TableRow>
            {header.map((x,i) => 
              
              <CustomTableCell key={`thc-${i}`}>{x.name} </CustomTableCell>      
                
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x,i)=> row(x,i, header))}
        </TableBody>
        <TableFooter>Total</TableFooter>
      </Table>
    </Paper>
    </Grid>
  );
}

// IncomeTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ExpenseTable);
