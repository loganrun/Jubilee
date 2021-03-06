import *  as actionTypes from './ActionTypes'
//import axios from 'axios';
import {auth} from '../../../config/firebase'
import firebase from 'firebase'


//sign up
export const createUser = (email, password) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
export const loginUser = (email, password) => dispatch => {
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
      console.log("arg:", arguments)
return firebase.auth().signInWithEmailAndPassword(email, password)})
.then((resp)=>{
    return dispatch(loginUserSuccess(resp))
})
.catch((error) => dispatch(loginUserFail))
}

export const loginUserSuccess = (resp) => {
    return {
        type: actionTypes.LOGIN_USER_SUCCESS,
        user: resp,
    }
}

export const loginUserFail = (error) => {
    return {
        type: actionTypes.LOGIN_USER_FAIL,
        error
    }
}


//sign out

export const logOutUser = ()=> dispatch =>firebase.auth().signOut()
.then((resp) =>{
    return dispatch(logoutUserSuccess(resp))
})
.catch((error)=> dispatch(logoutUserFail))

export const logoutUserSuccess = (resp) =>{
    return{
        type: actionTypes.LOGOUT_USER_SUCCESS,
        user: resp
    }
}

export const logoutUserFail = (resp) => {
    return{
        type: actionTypes.LOGOUT_USER_FAIL
    }
}


//password reset

export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) =>
auth.currentUser.updatePassword(password);