import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogContent,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import './UserDialog.css'

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
          <h2> demo account- garybrown@hotmail.com </h2>
          <h2> password: 1234567 </h2>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);

