import { storage } from 'firebase-admin';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

import { EncodedFile } from '@/features/profile/apis/editProfile';
import { auth } from '@/server/firebase/firebaseAdmin';

export const checkUser = async (ctx: GetServerSidePropsContext, isProtected: boolean) => {
  const cookies = nookies.get(ctx);
  const session = cookies.session || '';
  const user = await auth.verifySessionCookie(session, true).catch(() => null);
  const isRedirect = !user && !isProtected;
  if (isRedirect) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: user
        ? {
            email: user.email,
            uid: user.uid,
          }
        : null,
    },
  };
};

export const imageSaveToReturnUrl = async (file?: EncodedFile) => {
  if (!file) return;
  const filename = file?.filename;
  const image = file.encodedString;
  const folderPath = 'users';
  const bucketName = process.env.FIREBASE_STORAGE_BUCKET;
  const buffer = Buffer.from(image, 'base64');
  const files = storage().bucket(bucketName).file(`${folderPath}/${filename}`);
  await files.save(buffer);
  // Firebase Storageの公開URLを構築
  const encodedFilePath = encodeURIComponent(`${folderPath}/${filename}`);
  const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedFilePath}?alt=media`;
  return publicUrl;
};
