import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore, combineReducers, compose} from 'redux'
 import {reducer as formReducer} from 'redux-form'
 import BudgetReducer from './containers/store/reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  budget: BudgetReducer,
  form: formReducer,
})

const store = createStore(rootReducer, composeEnhancers());


const app = (
        <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
    )

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();



