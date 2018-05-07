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
                    ...state.budgetItem,
                    [action.item]: state.budgetItem[action.item]
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