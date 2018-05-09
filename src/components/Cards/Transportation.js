import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
//import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Transport from '../../assets/Images/transport.jpeg'

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

function TransportationCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Transport}
          title="Transportation"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Transportation
          </Typography>
          <TransTable/>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>
  );
}

TransportationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransportationCard);