import *  as actionTypes from './ActionTypes'
import axios from 'axios';


export const addTransactionItem = (newItem) => ({
  type: actionTypes.ADD_TRANSACTION,
  newItem
});

export const removeTransactionItem = (newItem) => ({
  type: actionTypes.REMOVE_TRANSACTION,
  newItem
});



export const fetchingTransactionRequest = () => ({type: actionTypes.FETCHING_TRANACTION_REQUEST});

export const fetchingTransactionSuccess = (transactions) => ({
  type: actionTypes.FETCHING_TRANSACTION_SUCCESS,
  payload: transactions
})

export const fetchingTransactionFailure = (error) => ({
  type: actionTypes.FETCHING_TRANSACTION_FAILURE,
  payload: error
})

export const fetchTransactions = () =>{
  return dispatch => {
    axios.get( 'https://jubilee2018-34a0a.firebaseio.com/' )
      .then( response => {
      dispatch(fetchingTransactionSuccess(response.data));
    }) 
    .catch (error => {
      dispatch(fetchingTransactionFailure ());
    });
  }
}