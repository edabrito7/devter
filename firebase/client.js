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

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    userName: displayName,
    email,
    uid,
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



export const addDevit = ({avatar, content, userName, userUid}) => {
  return db.collection("devits").add({
    avatar,
    content,
    userUid,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}


export const fetchLatestDevits = () => {
  return db.collection("devits")
  .orderBy("createdAt", "desc")
  .get()
  .then(snapshot => {
    return snapshot.docs.map(doc => {
      const data = doc.data()
      const id = doc.id
      const {createdAt} = data


      return {
        ...data,
        id, 
        createdAt: +createdAt.toDate(),
      }

    })
  })
}