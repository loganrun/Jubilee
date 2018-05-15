import axios from 'axios'
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const ADD_BUDGET_ITEM = 'ADD_BUDGET_ITEM';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const REMOVE_BUDGET_ITEM = 'REMOVE_BUDGET_ITEM';
export const FETCHING_BUDGET_REQUEST = 'FETCHING_BUDGET_REQUEST';
export const FETCHING_BUDGET_SUCCESS = 'FETCHING_BUDGET_SUCCESS';
export const FETCHING_BUDGET_FAILURE = 'FETCHING_BUDGET_FAILURE'


export const addBudgetItem = (newItem) => ({
  type: ADD_BUDGET_ITEM,
  newItem
});

export const addTransactionItem = (newItem) => ({
  type: ADD_TRANSACTION,
  newItem
});

export const fetchingBudgetRequest = () => ({type: FETCHING_BUDGET_REQUEST});

export const fetchingBudgetSuccess = (json) => ({
  type: FETCHING_BUDGET_SUCCESS,
  payload: json
})

export const fetchingBudgetFailure = (error) => ({
  type: FETCHING_BUDGET_FAILURE,
  payload: error
})

export const fetchBudget = () =>{
  return async dispatch => {
    dispatch(fetchingBudgetRequest());
    try{
      let response = await axios.get( 'https://jsonplaceholder.typicode.com/posts' );
      let json = await response.json();
      dispatch(fetchingBudgetSuccess(json.results));
    } catch (error){
      dispatch(fetchingBudgetFailure(error));
    }
  }
}