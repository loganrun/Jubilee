import *  as actionTypes from './ActionTypes'
import {database} from '../../../config/firebase'



export const fetchTransactions = (userId) =>{
  return dispatch => {
      dispatch(fetchingTransactionRequest(userId))
     database.collection("user").doc(userId).collection("transaction").onSnapshot(snapshot => {
      const transactions = snapshot.docs.map(doc => {
        return Object.assign(doc.data(), {id: doc.id})
      })
      dispatch({
        type: actionTypes.FETCHING_TRANSACTION_SUCCESS,
        payload: transactions
      })
    })
  }
}

export const addTransactionItem = (newItem,userId) => {
  return dispatch => {
    database.collection("user").doc(userId).collection("transaction").add(newItem)
  
};
}

export const removeTransactionItem = (newItem) => ({
  type: actionTypes.REMOVE_TRANSACTION,
  newItem
});



export const fetchingTransactionRequest = () => ({type: actionTypes.FETCHING_TRANSACTION_REQUEST});

export const fetchingTransactionSuccess = (transactions) => ({
  type: actionTypes.FETCHING_TRANSACTION_SUCCESS,
  payload: transactions
})

export const fetchingTransactionFailure = (error) => ({
  type: actionTypes.FETCHING_TRANSACTION_FAILURE,
  payload: error
})




