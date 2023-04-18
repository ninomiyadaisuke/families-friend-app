import type { NextApiHandler } from 'next';

import { editProfileSchema } from '@/features/profile/schema';
import { TUser } from '@/schema/userSchema';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

function removeUndefinedProperties(obj: any) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;

  const {
    uid,
    family_id,
    file,
    first_name,
    first_name_kana,
    last_name,
    last_name_kana,
    email,
    phone_number,
    birthday,
    hobby,
    zip_code,
    address,
    building,
    relationship,
    image,
    members,
  } = editProfileSchema.parse(req.body);
  await auth.verifySessionCookie(cookies, true).then(async (decodedToken) => {
    if (decodedToken.uid !== uid) {
      return res.status(403).send('Forbidden');
    }

    const userData: TUser = {
      uid,
      family_id,
      file,
      first_name,
      first_name_kana,
      last_name,
      last_name_kana,
      email,
      phone_number,
      birthday,
      hobby,
      zip_code,
      address,
      building,
      relationship,
      image,
    };

    const cleanedUserData = removeUndefinedProperties(userData);

    await typedFirestore.collection('users').doc(uid).setMerge(cleanedUserData);
    const householdMemberCollection = typedFirestore
      .collection('families')
      .doc(family_id)
      .collection('household_member');

    for (const member of members) {
      const memberId = member?.id || householdMemberCollection.doc().id;
      const memberData = {
        ...member,
        id: memberId,
      };
      try {
        const memberDoc = await householdMemberCollection.doc(memberId).get();
        if (memberDoc.exists()) {
          await householdMemberCollection.doc(memberId).setMerge(memberData);
        } else {
          await householdMemberCollection.doc(memberId).create(memberData);
        }
      } catch (error) {
        throw new Error('Failed to update household member data');
      }
    }
    return res.status(200).send('Success');
  });
};

export default handler;
