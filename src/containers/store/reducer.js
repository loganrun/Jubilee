import * as actionTypes from './actions';


const initialState = {
    budgetItem : {
        title: '',
        category: '',
        type: '',
        frequency: '',
        amount: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BUDGET_ITEM:
            return{
                ...state,
                budgetItem: {
                    ...state.budgetitem,
                    [action.expenseName]: state.budgetItem[action.expenseName]
                }
            };
        case actionTypes.REMOVE_BUDGET_ITEM:
            return{
                
            };
        default:
            return state;
        
    }
   
};

export default reducer