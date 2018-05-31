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
import {reactReduxFirebase,firebaseReducer} from 'react-redux-firebase'
import firebase from 'firebase'


const rrconfig = {
    userProfile: 'users'
}

    
const createStoreWithFirebase = compose(applyMiddleware(thunk),
reactReduxFirebase(firebase, rrconfig))(createStore)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const rootReducer = combineReducers({
     budget: BudgetReducer,
     form: formReducer,
     userState: UserReducer,
     sessionState: SessionReducer,
     firebase: firebaseReducer
 })



 const store = createStoreWithFirebase(rootReducer, composeEnhancers(applyMiddleware(thunk)))


const app = (
        <Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>
    )

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();



// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   } catch(e) {
//     console.log(e)
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('state')
//     if (serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch(e) {
//     console.log(e)
//     return undefined
//   }
// }
//  store.subscribe(() => saveToLocalStorage(store.getState())) 

// const persistedState = loadFromLocalStorage()