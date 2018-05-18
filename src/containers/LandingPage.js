import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './TileData';
import './LandingPage.css'
import Aux from '../hoc/Aux'
import Overlay from '../components/LandingPage/overlay'
import LoginPage from './LogIn/LoginPage'
import SignUp from './Signup/SignupPage'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    zIndex: 1
  },
  gridList: {
    width: '100vw',
    height: '100vh',
  },
  subheader: {
    width: '100%',
  },
});

function LandingPage(props) {
  const { classes } = props;

  return (
    <Aux>  
    
     <div className={classes.root} >
    <Overlay/>
      <GridList cellHeight={260} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <LoginPage/>
      <SignUp/>
    </div>
   
    </Aux>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
//  <div className={classes.root} >
//     <div className= {classes.overlay}>
//       <GridList cellHeight={260} className={classes.gridList} cols={3}>
//         {tileData.map(tile => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//     </div>