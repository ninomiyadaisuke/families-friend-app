import { DataModel } from 'fireschema';

import { TUser, userSchema } from '../schema/userSchema';

export const UserModel = new DataModel({
  schema: userSchema,
});
