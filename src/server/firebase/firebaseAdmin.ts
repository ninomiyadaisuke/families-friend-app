import admin from 'firebase-admin';
import { TypedFirestoreUniv } from 'fireschema';

import firestoreModel from '@/server/model/firestoreModel'; // exportしたものをimportする

/**
 * @description Firebaseの管理画面から取得した管理者アカウント情報
 * @note 環境変数は`.env.local`ファイルに定義しています
 */

const serviceAccount: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
};

/**
 * @description Firebase Admin SDKを扱うためのオブジェクト
 * @note バックエンドのみで使用可能
 */

export const firebaseAdmin =
  admin.apps[0] ||
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });

const createFirestoreStaticAdmin = (raw: any) => {
  return {
    arrayRemove: raw.FieldValue.arrayRemove.bind(raw.FieldValue),
    arrayUnion: raw.FieldValue.arrayUnion.bind(raw.FieldValue),
    deleteField: raw.FieldValue.delete.bind(raw.FieldValue),
    documentId: raw.FieldPath.documentId.bind(raw.FieldPath),
    increment: raw.FieldValue.increment.bind(raw.FieldValue),
    serverTimestamp: raw.FieldValue.serverTimestamp.bind(raw.FieldValue),
    Timestamp: raw.Timestamp,
  };
};

export const db = admin.firestore();
export const storage = admin.storage();
export const typedFirestore = new TypedFirestoreUniv(firestoreModel, createFirestoreStaticAdmin(admin.firestore), db);

export const auth = firebaseAdmin.auth();
