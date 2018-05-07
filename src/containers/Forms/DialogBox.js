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

import BudgetItem from './BudgetItem'

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
      <div>
        <Button onClick={this.handleClickOpen}>Open responsive dialog</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"No More Budget Items? Hit finish to close"}</DialogTitle>
          <DialogContent>
          <BudgetItem/>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              FINISHED
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);

// <DialogContentText>
//               Let Google help apps determine location. This means sending anonymous location data to
//               Google, even when no apps are running.
//             </DialogContentText>