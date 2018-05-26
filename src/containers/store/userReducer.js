import * as actionTypes from './Actions/ActionTypes';


const initialState = {
    loggingIn: false,
    loggedIn: false,
    signingIn: false,
    loggingOut: false,
}

const userReducer = (state = initialState, action) => {
//      switch (action.type) {
        
//     //     case actionTypes.LOGIN_USER_SUCCESS:
//     //         const userId = action.user.uid;
//     //         return { ...state, loggedIn: true, userId  }
//     //     case actionTypes.LOGIN_USER_FAIL:
//     //         return { ...state, loggedIn: false }
//     //     case('LOG_OUT'):
//     //         return {loggingOut: true}
//         case actionTypes.CREATE_USER_SUCCESS:
//             return { ...state }
//         case actionTypes.CREATE_USER_FAIL:
//             return { ...state}
//         default:
//             return state;
//     }
}

export default userReducer();
