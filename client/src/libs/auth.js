import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../libs/firebase';

export const authJoin = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const authLogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const authLogout = () => {
  return signOut(auth);
};

export const getAuthToken = () => {
  return auth.currentUser.getIdToken();
};
