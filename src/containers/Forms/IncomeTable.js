import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid'
import blue from 'material-ui/colors/blue'
import IncomeFooter from './IncomeFooter'
import DeleteIcon from './Delete'


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: blue[500],
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

    const IncomeTable = ({data,header,removeItem}) => {
   

  return (
    <Grid item xs>  
    <Paper>
      <Table>
      <TableHead>Income</TableHead>
              <TableHead>
                <TableRow>
                  {header.map((x, i) =>

                      <CustomTableCell key={`thc-${i}`}>{x.name} </CustomTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((n,i) => {
                  return (
                      <TableRow key={n.id} data-id={n.id}>
                        <CustomTableCell>{n.category}</CustomTableCell>
                        <CustomTableCell>{n.name}</CustomTableCell>
                        <CustomTableCell>{n.type}</CustomTableCell>
                        <CustomTableCell>{n.frequency}</CustomTableCell>
                        <CustomTableCell numeric>{n.amount}</CustomTableCell>
                        <CustomTableCell><span onClick={(e)=> {return removeItem(e)}}><DeleteIcon/></span></CustomTableCell>
                      </TableRow>
                  );
                })}
                         
              </TableBody>
           <IncomeFooter/>   
      </Table>
    </Paper>
    </Grid>
  );
}



export default withStyles(styles)(IncomeTable);
   

 
 //{(key) => this.props.dispatch(removeItem(key))}