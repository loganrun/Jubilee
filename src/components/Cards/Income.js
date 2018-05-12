import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
//import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grocery from '../../assets/Images/othergroceries.jpeg'
//import TransTable from '../../containers/Forms/TransTable'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';

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
          <Table className={classes.table}>
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow key={n.date}>
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.purchasedate}</TableCell>
                <TableCell numeric>{n.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

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