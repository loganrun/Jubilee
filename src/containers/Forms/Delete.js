import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/DeleteSweep';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing.unit,
  },
});

function SvgMaterialIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <DeleteIcon className={classes.icon} />
    </div>
  );
}

SvgMaterialIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgMaterialIcons);