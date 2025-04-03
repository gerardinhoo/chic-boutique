import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHuqKMLVts34IrHwuSQtHFoQzd9qkQpWA',
  authDomain: 'chic-boutique-db-535fc.firebaseapp.com',
  projectId: 'chic-boutique-db-535fc',
  storageBucket: 'chic-boutique-db-535fc.firebasestorage.app',
  messagingSenderId: '116570262171',
  appId: '1:116570262171:web:c6ab6efd35ab9e21be943e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
