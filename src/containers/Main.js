import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage'
import App from './App'
import PrivateRoute from '../components/PrivateRoutes/PrivateRoute'



class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{},
        }
    }
    
   
    render(props){
        
    return(
        
        <Switch>
              <Route exact path="/" component={LandingPage}/>
              <PrivateRoute path="/dashboard" component={App} />
        </Switch>
        )
    
}
}

export default Main