import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKVI4qhdg8iKtoD6cub1bGZzhCrUfJQKA",
  authDomain: "socialphoto-cc3ca.firebaseapp.com",
  projectId: "socialphoto-cc3ca",
  storageBucket: "socialphoto-cc3ca.appspot.com",
  messagingSenderId: "914061727157",
  appId: "1:914061727157:web:54139d73078465f19bb5fc",
  measurementId: "G-026MGQWYX2"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

// const auth = firebase.auth();

// export { auth };