import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid'
import indigo from 'material-ui/colors/indigo'
//import {connect} from 'react-redux'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: indigo[500],
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

function SummaryTable(props) {
  const { classes } = props;

  return (
    <Grid item xs>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {props.header.map((x,i) => 
              <CustomTableCell key={`thc-${i}`}>{x.name} </CustomTableCell>      
            )}
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
                <CustomTableCell numeric>{n.frequency}</CustomTableCell>
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

SummaryTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryTable);
