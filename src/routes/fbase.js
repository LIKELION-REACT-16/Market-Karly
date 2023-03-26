// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGIN_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  databaseUrl: import.meta.env.VITE_REACT_APP_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

export const dbService = getFirestore(app);
export const storage = getStorage(app);
