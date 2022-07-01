import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv6i3sq3OEZeHgqTy_PuNYxiUJ5YIKG9A",
  authDomain: "crown-clothing-db-1bc3b.firebaseapp.com",
  projectId: "crown-clothing-db-1bc3b",
  storageBucket: "crown-clothing-db-1bc3b.appspot.com",
  messagingSenderId: "350160074687",
  appId: "1:350160074687:web:d880f9ab7aadc2b9a6530a",
  measurementId: "G-T4M0LN5P7D"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const  signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();
//in order to use db
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
}
