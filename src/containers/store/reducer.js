import * as actionTypes from './Actions/ActionTypes';


const initialState = {
    errorMessage: "",
    loggingIn: false,
    loggedIn: false,
    signingIn: false,
    loggingOut: false,
    loading: false,
    user:{
        uid: ''
    },
    budgetItem : {
        name: '',
        category: '',
        type: '',
        frequency: '',
        amount: 0,
        date: '',
        
    },
    
    budget:[],
    transaction: []

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.FETCHING_BUDGET_REQUEST:
            
            return{ ...state, loading: true
            }
        case actionTypes.FETCHING_BUDGET_SUCCESS:
            const budget  = action.payload;
    
              const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got Budget.',
                budget: budget,
                loading: false
              });
              return newState
              
        case actionTypes.ADD_BUDGET_ITEM:
            return{
                ...state,
                budget: [...state.budget, action.payload]
                
            };
        case actionTypes.FETCHING_BUDGET_FAILURE:
            return{
                ...state, errorMessage: action.payload
            }
            
         case actionTypes.FETCHING_TRANSACTION_REQUEST:
            
            return{ ...state, loading: true
            }    
        
        case actionTypes.FETCHING_TRANSACTION_SUCCESS:
            const transactions  = action.payload;
              const tranState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got TransActions.',
                transaction: transactions,
                loading: false
              });
              return tranState
              
        case actionTypes.ADD_TRANSACTION:
            return{
                ...state,
                transaction: [...state.transaction, action.newItem]
            };
        case actionTypes.CREATE_USER_SUCCESS:
            const { user: { uid: userId} } = action;
            return { ...state, loggedIn: true, userId }
        case(actionTypes.CREATE_USER_FAIL):
            const { error } = action;
            return { ...state, loggedIn: false, error };
            
        case actionTypes.LOGIN_USER_SUCCESS:
            {
            const { user: { uid: userId} } = action;
            return { ...state, loggedIn: true, userId }
            }
        case(actionTypes.LOGIN_USER_FAIL):
            {
            const { error } = action;
            return { ...state, loggedIn: false, error }
            }
        default:
            return state;
        
    }
   
};

export default reducer