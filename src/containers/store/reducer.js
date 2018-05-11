import * as actionTypes from './actions';


const initialState = {
    budgetItem : {
        name: '',
        category: '',
        type: '',
        frequency: '',
        amount: 0,
        date: ''
    },
    
    budget:[],
    transaction: []

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BUDGET_ITEM:
            return{
                ...state,
                budget: [...state.budget, action.newItem]
                
            };
            
        case actionTypes.ADD_TRANSACTION:
            return{
                ...state,
                transaction: [...state.transaction, action.newItem]
                
            };
        default:
            return state;
        
    }
   
};

export default reducer