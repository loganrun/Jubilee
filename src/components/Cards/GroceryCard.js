import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import Button from 'material-ui/Button';
import Aux from '../../hoc/Aux';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grocery from '../../assets/Images/othergroceries.jpeg'
//import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
  },
  img: {
      height: 32
  }
};

function GroceryCard(props) {
  const { classes } = props;
  return (
    <Aux>
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image= {Grocery}
          title="Contemplative Reptile">
          
        </CardMedia>
        <CardContent>
           <Table>
      <TableHead>Expense</TableHead>
        <TableHead>
          <TableRow>
            info
          </TableRow>
        </TableHead>
        <TableBody>
          info
        </TableBody>
        <TableFooter>Total</TableFooter>
      </Table>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
    </Aux>
  );
}

GroceryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroceryCard);

//<img src={Grocery} alt={''} style={styles}/>