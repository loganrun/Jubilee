import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import Button from 'material-ui/Button';
import Aux from '../../hoc/Aux';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 10,
    paddingTop: '50.25%', // 16:9
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
          image="./smgrocery.jpg"
          title="Contemplative Reptile">
          <img src={"./smgrocery.jpg"} alt={''} style={styles}/>
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
      <Paper>
      <img src="./smgrocery.jpg" alt={''} style={styles}/>
       <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
    </Aux>
  );
}

GroceryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroceryCard);
