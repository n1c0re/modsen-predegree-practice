import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjrAZ_hitGyDqZ3D1CYctu8-lcKRsNQlg",
  authDomain: "city-guide-d6d38.firebaseapp.com",
  projectId: "city-guide-d6d38",
  storageBucket: "city-guide-d6d38.appspot.com",
  messagingSenderId: "1032119636835",
  appId: "1:1032119636835:web:14a61baac971bc4e783956"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);