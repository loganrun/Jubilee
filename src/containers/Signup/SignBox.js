import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
 // DialogActions,
  DialogContent,
 // DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
//import AddIcon from '@material-ui/icons/Add';
import './SignBox.css'
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
        <Button variant="raised" color="primary" onClick={this.handleClickOpen} className="Sign-Up">Sign Up</Button>
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
          <h2>demo account- garybrown@hotmail.com</h2>
          <h2>password: 1234567</h2>
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