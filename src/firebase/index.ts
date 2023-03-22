import { FirebaseOptions, initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { TypedFirestoreWeb } from 'fireschema';

import firestoreModel from './model/firestoreModel';

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

const firestoreApp = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});

export const $web: TypedFirestoreWeb<typeof firestoreModel> = new TypedFirestoreWeb(firestoreModel, firestoreApp);

export const usersRef = $web.collection('users');
