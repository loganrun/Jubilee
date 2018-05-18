import React from 'react'
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from './LandingPage'
import App from './App'


const Main = (props) => {
    return(
        <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/dashboard" component={App} />
           </Switch>
        )
    
    
}

export default Main