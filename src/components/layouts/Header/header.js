import React from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
//import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
//import AddIcon from '@material-ui/icons/Add';
//import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
//import MenuIcon from 'material-ui/icons/Menu';


const header = () => {

    return <div>
       <AppBar position="static">
        <Toolbar>
          <IconButton  color="inherit" aria-label="Menu">
            
          </IconButton>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
};

export default header;