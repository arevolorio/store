import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwaXPtyhBFhFRwGibmg3PnYo2irRDYmgI",
    authDomain: "rev-store-36b08.firebaseapp.com",
    databaseURL: "https://rev-store-36b08.firebaseio.com",
    projectId: "rev-store-36b08",
    storageBucket: "rev-store-36b08.appspot.com",
    messagingSenderId: "796778603027",
    appId: "1:796778603027:web:70d2f66dfd0031aebed5e6",
    measurementId: "G-HD08DGLREJ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    let userRef = null;
    if (userAuth) {
        userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
            } catch(error){
                console.error('Error: Unable to create the user', error.message);
            }
        }
    }
    return userRef
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;