import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Main from './containers/Main';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import BudgetReducer from './containers/store/reducer'
import UserReducer from './containers/store/userReducer'
import SessionReducer from './containers/store/sessionReducer'

//import {reactReduxFirebase,firebaseReducer} from 'react-redux-firebase'
//import firebase from 'firebase'
//import {firebaseApp} from './config/firebase'

// const firebaseConfig = { apiKey: "AIzaSyBW_sPqfpdIw_B0cJXhYhVxhFAmA2-_DrM",
//     authDomain: "jubilee2018-34a0a.firebaseapp.com",
//     databaseURL: "https://jubilee2018-34a0a.firebaseio.com",
//     projectId: "jubilee2018-34a0a",
//     storageBucket: "",
//     messagingSenderId: "471910822129"}
    
//     firebase.initializeApp(firebaseConfig)

// const rrconfig = {
//     userProfile: 'users'
// }
    
// const createStoreWithFirebase = compose(applyMiddleware(thunk),
// reactReduxFirebase(firebase, rrconfig))(createStore)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const rootReducer = combineReducers({
     budget: BudgetReducer,
     form: formReducer,
     userState: UserReducer,
     sessionState: SessionReducer
    //firebase: firebaseReducer
 })

 const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
        <Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>
    )

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();



