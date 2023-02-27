import db from '../../firebase/config';

export const authSignIn = () => async(dispatch, getState) => {};

export const authSignUp = ({login, email, password, }) => async(dispatch, getState) => {
try {
    const user = await db.auth().createUserWithEmailAndPassword(email, password);
    console.log(user)
} catch (error) {
    console.log(error.message)
}
};

export const authSignOut = () => async(dispatch, getState) => {};