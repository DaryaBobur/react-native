import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

export const authSignUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password, login);
      const user = auth.currentUser;
      await updateProfile(user, {
        displayName: login,
      });

      const { displayName, uid } = user;

      const userUpdateProfile = {
        login: displayName,
        userId: uid,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      console.log(user);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

export const authSignOut = () => async (dispatch, getState) => {};

export const authStateChangeUser = () => async () => {
  

};
