import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const authSignIn =
  ({ email, password }) =>
  async () => {
    const auth = getAuth();
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
    const auth = getAuth();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        login
      );
      console.log(user);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

export const authSignOut = () => async (dispatch, getState) => {};
