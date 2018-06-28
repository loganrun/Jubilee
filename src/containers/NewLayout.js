import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import deepOrange from 'material-ui/colors/deepOrange'
import Navigation from '../components/layouts/Navigation/Navigation'
import {logOutUser} from './store/Actions/index'
import {connect} from 'react-redux'
import {compose} from 'redux'
import blueGrey from '@material-ui/core/colors/blueGrey';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    //overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
   zIndex: theme.zIndex.drawer + 1,
   color: 'default'
    
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    marginTop: '60px',
    width: drawerWidth,
    backgroundColor: blueGrey[900],
    color: 'fff',
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default ,
    padding: theme.spacing.unit * 3,
  },
  drawer: {
    position: "absolute"
  
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
      <Navigation logOut={()=> this.props.dispatch(logOutUser())}/>  
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar} color='#ffffff'>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              JUBILEE
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden smDown>
        <div className={classes.toolbar} >
        </div>
        </Hidden>
        <div >
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            style={{styles}}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <div >
          <Drawer
            variant="permanent"
            position="fixed"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
            
          >
            {drawer}
          </Drawer>
          </div>
        </Hidden>
        </div>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps(state){
    return {
        budget: state.budget.budget,
        loading: state.loading,
        uid: state.firebase.auth.uid
    }
}

const styledComponent = withStyles(styles, { withTheme: true })

export default compose(styledComponent, connect(mapStateToProps,null))(ResponsiveDrawer);
