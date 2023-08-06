import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// import { getDatabase } from "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKVI4qhdg8iKtoD6cub1bGZzhCrUfJQKA",
  authDomain: "socialphoto-cc3ca.firebaseapp.com",
  projectId: "socialphoto-cc3ca",
  storageBucket: "socialphoto-cc3ca.appspot.com",
  messagingSenderId: "914061727157",
  appId: "1:914061727157:web:54139d73078465f19bb5fc",
  measurementId: "G-026MGQWYX2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();