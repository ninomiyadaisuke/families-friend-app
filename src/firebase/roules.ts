import { FirestoreModel, rules } from 'fireschema';

import { UserModel } from './model/userModel';

export const firestoreModel = new FirestoreModel({
  'function isAdmin()': `
    return exists(${rules.basePath}/admins/$(request.auth.uid));
`,
  'function requestUserIs(uid)': `
      return request.auth.uid == uid;
`,
  collectionGroups: {},

  '/users/{uid}': {
    model: UserModel,
    allow: {
      read: rules.or('requestUserIs(uid)', 'isAdmin()'),
      write: rules.or('requestUserIs(uid)', 'isAdmin()'),
    },
  },
});

export default firestoreModel;
