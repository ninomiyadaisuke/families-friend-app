import { DataModel } from 'fireschema';

import { TUser, TUserDecoded, userSchema } from '../schema/userSchema';

export const UserModel = new DataModel({
  schema: userSchema,
  decoder: (data: TUser): TUserDecoded => ({
    ...data,
    created_at: data.created_at.toDate(),
    updated_at: data.updated_at.toDate(),
  }),
});
