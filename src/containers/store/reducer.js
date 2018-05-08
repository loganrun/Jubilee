import * as actionTypes from './actions';


const initialState = {
    budgetItem : {
        title: '',
        category: '',
        type: '',
        frequency: '',
        amount: 0
    },
    
    budget:[]

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BUDGET_ITEM:
            return{
                ...state,
                budget: [...state.budget, action.newItem]
                
            };
            
        case actionTypes.REMOVE_BUDGET_ITEM:
            return{
                ...state,
                budget: [...state.budget, action.newItem]
                
            };
        default:
            return state;
        
    }
   
};

export default reducer