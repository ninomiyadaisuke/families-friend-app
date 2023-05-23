import { FC } from 'react';

import { RoundedInput } from '@/components/forms';
import { LabelLayout } from '@/components/layouts';

const FamilyInfo: FC = () => {
  return (
    <div>
      <LabelLayout
        required="required"
        label="世帯主"
        type="flex"
        children={() => <RoundedInput type="text" iconType="user" placeholder="苗字" />}
      />
      <LabelLayout
        required="required"
        label="世帯主"
        type="flex"
        children={() => <RoundedInput type="text" placeholder="苗字" />}
      />
    </div>
  );
};

export default FamilyInfo;
