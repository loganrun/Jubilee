import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
//import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grocery from '../../assets/Images/othergroceries.jpeg'
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

function GroceryCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Grocery}
          title="Groceries"
        />
        <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
            Groceries
          </Typography>
          <TransTable/>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  );
}

GroceryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroceryCard);

//<img src={Grocery} alt={''} style={styles}/>