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
import {createUser} from './store/Actions'
import {connect} from 'react-redux'
import {compose} from 'redux'

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
      <SignUp onSubmit={values => props.dispatch(createUser(values.email, values.password))}/>
    </div>
   
    </Aux>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return{
    loggedIn: state.loggedIn
  }
}

const styledComponent = withStyles(styles)

export default compose(styledComponent, connect(mapStateToProps,null))(LandingPage);






















//onSubmit={values => this.props.dispatch(createUser(values))}
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