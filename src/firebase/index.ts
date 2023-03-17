import { FirebaseOptions, initializeApp } from 'firebase/app';
import { collection, Firestore, getFirestore, serverTimestamp } from 'firebase/firestore';

export const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PEOJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const firestore: Firestore = getFirestore(app);

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const familiesRef = collection(db, 'families');
export const timeStamp = serverTimestamp();
