import { auth } from './firebase';

//sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
auth.creaeUserWithEmailAndPassword(email, password);

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