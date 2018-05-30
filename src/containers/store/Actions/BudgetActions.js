import *  as actionTypes from './ActionTypes'
import {database} from '../../../config/firebase'


export const fetchBudget = (userId) =>{
  return dispatch => {
      dispatch(fetchingBudgetRequest(userId))
       console.log(userId)
     database.collection("user").doc(userId).collection("budget").onSnapshot(snapshot => {
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


export const addBudgetItem = (newItem, userId) => {
 
  return dispatch => {
     database.collection("user").doc(userId).collection("budget").add(newItem)
  
};
}

export const removeBudgetItem = (value,userId) => {
  return dispatch => {
     database.collection("user").doc(userId).collection("budget").doc(value).delete()
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

