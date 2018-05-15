import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
 import {reducer as formReducer} from 'redux-form'
 import BudgetReducer from './containers/store/reducer'

 const rootReducer = combineReducers({
     budget: BudgetReducer,
     form: formReducer,
 })

 const store = applyMiddleware(thunk)(createStore)(rootReducer);
const app = (
        <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
    )

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();



