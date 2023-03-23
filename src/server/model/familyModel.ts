import { DataModel } from 'fireschema';

import { familySchema } from '../../schema/familySchema';

export const FamilyModel = new DataModel({
  schema: familySchema,
});
