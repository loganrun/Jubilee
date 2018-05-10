export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const ADD_BUDGET_ITEM = 'ADD_BUDGET_ITEM';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const REMOVE_BUDGET_ITEM = 'REMOVE_BUDGET_ITEM';


export const addBudgetItem = (newItem) => ({
  type: ADD_BUDGET_ITEM,
  newItem
});

export const addTransactionItem = (newItem) => ({
  type: ADD_TRANSACTION,
  newItem
});