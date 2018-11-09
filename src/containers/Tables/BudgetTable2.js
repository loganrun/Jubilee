import React from 'react';
import {EditingState} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow,TableEditRow, TableEditColumn, } from '@devexpress/dx-react-grid-material-ui';
import find from 'lodash/find';
import without from 'lodash/without';
import Paper from '@material-ui/core/Paper';
//import { withStyles } from '@material-ui/core/styles';
import './tables.css';


class BudgetTable2 extends React.PureComponent {
    
     render() {
    const { rows, columns } = this.state;
   
    return (
      <Paper>
      <Grid rows={rows} columns={columns} getRowId={this.getRowId}>
      <EditingState onCommitChanges={this.commitChanges} />
        <Table  />
        <TableHeaderRow className='tableInfo' />
         <TableEditRow />
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
      </Grid>
      </Paper>
    );
  }
  
  getRowId(row) {return row.id;};

  commitChanges({ added, changed, deleted }) {
    const rowById = id => find(this.state.rows, r => r.id === parseInt(id));
    if (changed) {
      for (let id in changed) {
        const changedRow = rowById(id);
        const otherRows = without(this.state.rows, changedRow);

        this.setState({
          rows: [
            ...otherRows,
            {
              ...changedRow,
              ...changed[id]
            }
          ]
        });
      }
    }
    if (deleted) {
      for (let id of deleted) {
        const deletedRow = rowById(id);
        this.setState({
          rows: without(this.state.rows, deletedRow)
        });
      }
    }
    if (added) {
      let largestId = this.state.rows.reduce((r,v) => v.id > r ? v.id : r , 0);
      for (let newObject of added)
        this.setState({
          rows: [
            ...this.state.rows,
            {
              ...newObject,
              id: ++largestId
            }
          ]
        });
    }
  }
  
  constructor(props) {
    super(props);
    
    const values = this.props.data;
    
    this.commitChanges = this.commitChanges.bind(this);
    
    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'category', title: 'Category' },
        { name: 'type', title: 'Type' },
        { name: 'frequency', title: 'Frequency' },
        { name: 'amount', title: 'Amount' },
      ],
      rows: values
    };
    
    
  }
  
  

 
}

export default (BudgetTable2);