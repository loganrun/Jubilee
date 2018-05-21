import *  as actionTypes from './ActionTypes'
//import axios from 'axios';
import {database} from '../../../config/firebase'


export const getBudget = () => {
  return dispatch => {
    dispatch(fetchingBudgetRequest());
    return database.ref('/').once('value', snap => {
      const budget = snap.val();
      dispatch(fetchingBudgetSuccess(budget))
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchingBudgetFailure(error));
    });
  }
}


// function getInviteRequestedAction() {
//   return {
//     type: actionTypes.GetInviteRequested
//   };
// }

// function getInviteRejectedAction() {
//   return {
//     type: actionTypes.GetInviteRejected
//   }
// }

// function getInviteFulfilledAction(invite) {
//   return {
//     type: actionTypes.GetInviteFulfilled,
//     invite
//   };
// }

export const addBudgetItem = (newItem) => ({
  type: actionTypes.ADD_BUDGET_ITEM,
  newItem
});

export const removeBudgetItem = (newItem) => ({
  type: actionTypes.REMOVE_BUDGET_ITEM,
  newItem
});



export const fetchingBudgetRequest = () => ({type: actionTypes.FETCHING_BUDGET_REQUEST});

export const fetchingBudgetSuccess = (budget) => ({
  type: actionTypes.FETCHING_BUDGET_SUCCESS,
  payload: budget
})

export const fetchingBudgetFailure = (error) => ({
  type: actionTypes.FETCHING_BUDGET_FAILURE,
  payload: error
})

// export const fetchingBudgetRequest = () => dispatch=>{
//   database.on("value", snapshot => {
//     dispatch({
//       type: actionTypes.FETCHING_BUDGET_SUCCESS,
//       payload: snapshot.val()
//     });
//   });
// }

// axios.get( 'https://jubilee2018-34a0a.firebaseio.com/budget' )
//       .then( response => {
//       dispatch(fetchingBudgetSuccess(response.data));
//     }) 
//     .catch (error => {
//       dispatch(fetchingBudgetFailure ());
//     });