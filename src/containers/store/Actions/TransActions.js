import *  as actionTypes from './ActionTypes'
import {database} from '../../../config/firebase'
import firebase from 'firebase'


export const fetchTransactions = () =>{
  return dispatch => {
      dispatch(fetchingTransactionRequest())
     database.collection('transactions').onSnapshot(snapshot => {
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

export const addTransactionItem = (newItem) => {
  return dispatch => {
    database.collection('transactions').add(newItem)
  
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




// export const fetchTransactions = () =>{
//   return dispatch => {
//     axios.get( 'https://jubilee2018-34a0a.firebaseio.com/' )
//       .then( response => {
//       dispatch(fetchingTransactionSuccess(response.data));
//     }) 
//     .catch (error => {
//       dispatch(fetchingTransactionFailure ());
//     });
//   }