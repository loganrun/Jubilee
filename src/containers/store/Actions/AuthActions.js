import *  as actionTypes from './ActionTypes'
//import axios from 'axios';
import {auth} from '../../../config/firebase'
import firebase from 'firebase'


//sign up
export const createUser = (email, pass) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((resp) => {
        return dispatch(createUserSuccess(resp));
    }) 
    .catch((error) => dispatch(createUserFail));
}

export const createUserSuccess = (resp) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        user: resp,
    }
}
export const createUserFail = (error) => {
    return {
        type: actionTypes.CREATE_USER_FAIL,
        error
    }
}

//signin
export const doSignInWithEmailAndPassword = (email, password) =>
auth.SignInWithEmailAndPassword(email, password);

//sign out

export const doSignOut = ()=> auth.signOut();

//password reset

export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) =>
auth.currentUser.updatePassword(password);