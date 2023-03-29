import { DataModel } from 'fireschema';

import { houseHoldMemberSchema } from '../../schema/houseHoldMemberSchema';

export const houseHoldeMemberModel = new DataModel({
  schema: houseHoldMemberSchema,
});
