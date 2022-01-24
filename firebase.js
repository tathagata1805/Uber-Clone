import {initializeApp} from 'firebase/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_cRWWRPRIPHWygHNynjUUIrurUnm523E",
    authDomain: "uber-clone-6586e.firebaseapp.com",
    projectId: "uber-clone-6586e",
    storageBucket: "uber-clone-6586e.appspot.com",
    messagingSenderId: "1040591948575",
    appId: "1:1040591948575:web:5e219a1e29f48f6218be2a",
    measurementId: "G-QDTCJGBRZY"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth};