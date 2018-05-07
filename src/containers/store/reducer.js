import * as actionTypes from './actions';


const initialState = {
    budgetItem : {
        title: '',
        category: '',
        type: '',
        frequency: '',
        amount: 0
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BUDGET_ITEM:
            return{
                ...state,
                budgetItem: {
                    ...state.budgetitem,
                    [action.itemName]: state.budgetItem[action.itemName]
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