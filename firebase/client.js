import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABm-hlSsgTPkxo1c2Uob0Z1ce67bV-xn8",
  authDomain: "devter-daa71.firebaseapp.com",
  projectId: "devter-daa71",
  storageBucket: "devter-daa71.appspot.com",
  messagingSenderId: "441871035824",
  appId: "1:441871035824:web:589d086bc6d5c2deba3a75",
  measurementId: "G-SDXRTP4H2E",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};
export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();

  return firebase.auth().signInWithPopup(githubProvider);
};
