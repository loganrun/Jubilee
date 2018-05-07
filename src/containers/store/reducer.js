import * as actionTypes from './actions';


const initialState = {
    budgetItem : {
        title: '',
        category: '',
        type: '',
        frequency: '',
        amount: 0
    },
    budget: [{
      id: '1232',
      title: 'Westside',
      category: 'Employment', //Debts, Housing, Food, Transportation
      type: 'Income', //income,expense
      frequency: 'Monthly', //monthly income or expense yes or no,
      amount: '5,000'//how much
    },

      {
        id: '38974732',
        title: 'Amazon',
        category: 'Employment', //Debts, Housing, Food, Transportation
        type: 'Income', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'4,000'//how much

      },
      {
        id: '2682362816',
        title: 'Real Estate',
        category: 'Investment', //Debts, Housing, Food, Transportation
        type: 'Income', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'2,000'
      },{
        id: '4234',
        title: 'Visa',
        category: 'Debt', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'500'
      },
      {
        id: '6755',
        title: 'Master Card',
        category: 'Debt', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'500'
      },
      {
        id: '34534534',
        title: 'Student Loan',
        category: 'Debt', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'600'
      },
      {
        id: '12321321',
        title: 'Rent',
        category: 'Housing', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'2,000'
      },
      {
        id: '34324324',
        title: 'Car Note',
        category: 'Transportation', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'350'
      },
      {
        id: '23432423',
        title: 'groceries',
        category: 'Food', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'500'
      },
      {
        id: '23542343',
        title: 'Clothes',
        category: 'Personal', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'100'
      },
      {
        id: '3432432434',
        title: 'fast food',
        category: 'Food', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'200'
      },
      {
        id: '34324uiy324',
        title: 'Car Insurance',
        category: 'Transportation', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'120'
      },
      {
        id: '3432434324324',
        title: 'Gas Bill',
        category: 'Utilities', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'120'
      },
      {
        id: '34324323432424',
        title: 'Entertainment',
        category: 'Personal', //Debts, Housing, Food, Transportation
        type: 'Expense', //income,expense
        frequency: 'Monthly', //monthly income or expense yes or no
        amount:'300'
      }]
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
                
            };
        default:
            return state;
        
    }
   
};

export default reducer
