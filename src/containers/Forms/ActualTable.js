import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid'
import Indigo from 'material-ui/colors/indigo'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: Indigo[500],
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


function ActualTable(props) {
  const { classes } = props;

  return (
    <Grid item xs>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Category</CustomTableCell>
            <CustomTableCell>Actual Amount</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow key={n.id}>
                <CustomTableCell >
                  {n.name}
                </CustomTableCell>
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
//className={classes.row}component="th" scope="row"