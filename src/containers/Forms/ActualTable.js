import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid'
import lightGreen from 'material-ui/colors/lightGreen'
//import {connect} from 'react-redux'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: lightGreen[500],
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

function ActualTable(props) {
  const { classes } = props;

  return (
    <Grid item xs>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Type</CustomTableCell>
            <CustomTableCell>Category</CustomTableCell>
            <CustomTableCell>Budgeted Amount</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell numeric>{n.type}</CustomTableCell>
                <CustomTableCell numeric>{n.category}</CustomTableCell>
                <CustomTableCell numeric>{n.amount}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      
    </Paper>
    </Grid>
  );
}

ActualTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActualTable);
