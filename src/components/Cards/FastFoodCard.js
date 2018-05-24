import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import FastFood from '../../assets/Images/fastfood.jpeg'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Moment from 'moment'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};


function FastFoodCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={FastFood}
          title="Dining Out"
        />
        <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
            Dining Out
          </Typography>
          <Table className={classes.table}>
        <TableBody>
          {props.data.map((n,i) => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>${n.amount}</TableCell>
                 <TableCell>{Moment(n.date).format("MM/DD/YY")}</TableCell>
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

// FastFood.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(FastFoodCard);

