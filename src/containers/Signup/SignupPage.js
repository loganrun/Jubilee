import React, {Component} from 'react';
import firebase from 'react-redux-firebase'
import SignBox from './SignBox'
import {auth} from '../../config/firebase'
import './Signup.css'
//import PropTypes from 'prop-types';
//import TextField from '@material-ui/core/TextField';
//import { withStyles, createMuiTheme} from '@material-ui/core/styles';
import { withRouter} from 'react-router-dom';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});


const INITIAL_STATE = {
             
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            submitted: false,
            error: null
        };
        
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = this.state = { ...INITIAL_STATE };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(event) {
       event.preventDefault(); 
        const {history}= this.props
        const {
      email,
      password,
    } = this.state;
    console.log(password)

    auth.auth().createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE}));
        history.push('/dashboard');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

       
     }

    render(props) {
        const { firstName, lastName, email, passwordOne,passwordTwo, error} = this.state;
        
        const isInvalid =
              passwordOne !== passwordTwo ||
              passwordOne === '' ||
              email === '' ||
              lastName === '' ||
              firstName === '';
              
        // const { classes } = props;


        return (
            <SignBox>
            <div>
            <h2>Sign Up</h2>
            <form name = "form" onSubmit={this.onSubmit} className="bootstrapRoot">
                 <input style={{styles}} className="form-input"
                  value={firstName} 
                  onChange={event => this.setState(byPropKey('firstName', event.target.value))}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  value={lastName}
                  onChange={event => this.setState(byPropKey('lastName', event.target.value))}
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  value={email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  value={passwordOne}
                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                  type="password"
                  placeholder="Password"
                />
                <input
                  value={passwordTwo}
                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                  type="password"
                  placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                  Sign Up
                </button>
        
                { error && <p>{error.message}</p> }
             </form>
        </div>
        </SignBox>
        );
    }
}

// function mapStateToProps(state) {
//     const { registering } = state.registration;
//     return {
//         registering
//     };
// }

// SignUpPage.propTypes = {
//   classes: PropTypes.object.isRequired,
// };



export default withRouter(SignUpPage);
//const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
//<Link to="/login" className="btn btn-link">Cancel</Link>
//{registering &&<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                       // }
                       
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

//import { userActions } from '../_actions';

// this.setState({ submitted: true });
//         const { user } = this.state;
//         const { dispatch } = this.props;
//         if (user.firstName && user.lastName && user.email && user.password) {
//           // dispatch(userActions.register(user));
//           const  data = {credentials:user}
//           this.props.firebase.createUser(user).then(
//               auth => console.log(auth)
//               )
//         }