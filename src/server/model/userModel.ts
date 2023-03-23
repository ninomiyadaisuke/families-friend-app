import { DataModel } from 'fireschema';

import { userSchema } from '../../schema/userSchema';

export const UserModel = new DataModel({
  schema: userSchema,
});
