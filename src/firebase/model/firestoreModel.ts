import { FirestoreModel, rules } from 'fireschema';

import { FamilyModel } from './familyModel';
import { UserModel } from './userModel';

export const firestoreModel = new FirestoreModel({
  'function requestUserIs(uid)': `
      return request.auth.uid == uid;
`,
  collectionGroups: {},

  '/users/{uid}': {
    model: UserModel,
    allow: {
      read: 'requestUserIs(uid)',
      write: 'requestUserIs(uid)',
    },
  },
  '/families/{familyId}': {
    model: FamilyModel,
    allow: {
      read: 'requestUserIs(uid)',
      write: 'requestUserIs(uid)',
    },
  },
});

export default firestoreModel;
