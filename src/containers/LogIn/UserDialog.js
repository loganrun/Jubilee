import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
 // DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
//import AddIcon from '@material-ui/icons/Add';
import './UserDialog.css'
//import BudgetItem from './BudgetItem'

class ResponsiveDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div className="dialog-button">
        <Button variant="raised" color="primary" onClick={this.handleClickOpen} className="login-button">Login</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title"></DialogTitle>
          <DialogContent>
            {this.props.children}
          </DialogContent>
          
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);

// <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               FINISHED
//             </Button>
//           </DialogActions>