import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
//import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import Shopping from '../../assets/Images/shopping.jpeg'
import TransTable from '../../containers/Forms/TransTable'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function ShoppingCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Shopping}
          title="Shopping"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Shopping
          </Typography>
          <TransTable/>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>
  );
}

ShoppingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShoppingCard);