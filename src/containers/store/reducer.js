import * as actionTypes from './Actions/ActionTypes';


const initialState = {
    errorMessage: "",
    budgetItem : {
        name: '',
        category: '',
        type: '',
        frequency: '',
        amount: 0,
        date: ''
    },
    
    budget:[
         {
        id: '1232',
        name: 'Westside',
        category: 'income', //Debts, Housing, Food, Transportation
        type: 'income', //income,expense
        date: '5/12/18',
        amount: 5000//how much
    },
    
    {
        id: '38974732',
        name: 'Office',
        category: 'income', //Debts, Housing, Food, Transportation
        type: 'income', //income,expense
        date: '5/12/18', //monthly income or expense yes or no
        amount:8000//how much
        
    },
    {
        id: '2682362816',
        name: 'Real Estate',
        category: 'income', //Debts, Housing, Food, Transportation
        type: 'income', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 2000
    },
    {
        id: '4234',
        name: 'Visa',
        category: 'debt', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 500
    },
    {
        id: '6755',
        name: 'Master Card',
        category: 'debt', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 500
    },
    {
        id: '34534534',
        name: 'Student Loan',
        category: 'debt', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 600
    },
    {
        id: '12321321',
        name: 'Rent',
        category: 'housing', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 2000
    },
    {
        id: '34324324',
        name: 'Car Note',
        category: 'transportation', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 350
    }
        ],
    transaction: [
        {
        id: '1232',
        name: 'Westside',
        category: 'income', //Debts, Housing, Food, Transportation
        type: 'income', //income,expense
        date: '5/12/18',
        amount: 5000//how much
    },
    
    {
        id: '38974732',
        name: 'Office',
        category: 'income', //Debts, Housing, Food, Transportation
        type: 'income', //income,expense
        date: '5/12/18', //monthly income or expense yes or no
        amount:8000//how much
        
    },
    {
        id: '2682362816',
        name: 'Real Estate',
        category: 'income', //Debts, Housing, Food, Transportation
        type: 'income', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 2000
    },
    {
        id: '4234',
        name: 'Visa',
        category: 'debt', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 500
    },
    {
        id: '6755',
        name: 'Master Card',
        category: 'debt', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 500
    },
    {
        id: '34534534',
        name: 'Student Loan',
        category: 'debt', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 600
    },
    {
        id: '12321321',
        name: 'Rent',
        category: 'housing', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 2000
    },
    {
        id: '34324324',
        name: 'Car Note',
        category: 'transportation', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 350
    },
     {
        id: '23432423',
        name: 'Ralphs',
        category: 'groceries', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 500
    },
     {
        id: '23542343',
        name: 'Clothes',
        category: 'shopping', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 100
    },
     {
        id: '3432432434',
        name: 'fast food',
        category: 'dining', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 200
    },
     {
        id: '34324uiy324',
        name: 'Car Insurance',
        category: 'transportation', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 120
    },
     {
        id: '3432434324324',
        name: 'Gas Bill',
        category: 'utilities', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 120
    },
     {
        id: '34324323432424',
        name: 'Movies',
        category: 'entertainment', //Debts, Housing, Food, Transportation
        type: 'expense', //income,expense
         date: '5/12/18', //monthly income or expense yes or no
        amount: 300
    }
        ]

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
        case actionTypes.FETCHING_BUDGET_REQUEST:
            return state;
        case actionTypes.FETCHING_BUDGET_FAILURE:
            return{
                ...state, errorMessage: action.payload
            }
        case actionTypes.FETCHING_BUDGET_SUCCESS:
            const { budget } = action.payload;
            console.log(budget)
              const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got Budget.',
              });
              newState.budget = [];
              if (budget) {
        newState.budget = Object.keys(budget).map(k => budget[k]);
      }
      return newState;
        default:
            return state;
        
    }
   
};

export default reducer