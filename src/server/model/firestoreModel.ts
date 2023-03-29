import { FirestoreModel } from 'fireschema';

import { FamilyModel } from './familyModel';
import { houseHoldeMemberModel } from './houseHoldMemberModle';
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
    'function returnUid()': `
    return request.resource.data.uid
    `,
    model: FamilyModel,
    allow: {
      read: 'requestUserIs(request.resource.data.uid)',
      write: 'requestUserIs(request.resource.data.uid)',
    },
    '/household_member/{houseHoldMemberId}': {
      model: houseHoldeMemberModel,
      allow: {
        read: 'requestUserIs(returnUid())',
        write: 'requestUserIs(returnUid())',
      },
    },
  },
});

export default firestoreModel;
