import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCoDwuGdhM-t4N-q789VThCio2gmcfYlkQ",
    authDomain: "nfclone-e77c6.firebaseapp.com",
    projectId: "nfclone-e77c6",
    storageBucket: "nfclone-e77c6.appspot.com",
    messagingSenderId: "748406281979",
    appId: "1:748406281979:web:b61a5db7edd821c794025e"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
