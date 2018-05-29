import *  as actionTypes from './ActionTypes'
//import axios from 'axios';
import {database} from '../../../config/firebase'
//import firebase from 'firebase'


export const fetchBudget = () =>{
  return dispatch => {
      dispatch(fetchingBudgetRequest())
     database.collection('budget').onSnapshot(snapshot => {
      const budget = snapshot.docs.map(doc => {
        return Object.assign(doc.data(), {id: doc.id})
      })
      dispatch({
        type: actionTypes.FETCHING_BUDGET_SUCCESS,
        payload: budget
      })
    })
  }
}


export const addBudgetItem = (newItem) => {
  return dispatch => {
    database.collection('budget').add(newItem)
  
};
}

export const removeBudgetItem = (newItem) => {
  return dispatch => {
    database.collection('budget').doc(".id")
  };
};



export const fetchingBudgetRequest = () => ({type: actionTypes.FETCHING_BUDGET_REQUEST});

export const fetchingBudgetSuccess = (budget) => ({
  type: actionTypes.FETCHING_BUDGET_SUCCESS,
  payload: budget
})

export const fetchingBudgetFailure = (error) => ({
  type: actionTypes.FETCHING_BUDGET_FAILURE,
  payload: error
})

