import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Router from 'next/router';

import { EditProfile } from '../schema';

export const update = async (values: EditProfile, cache: EditProfile | undefined) => {
  const data = {
    inputData: values,
    cacheData: cache,
  };

  await axios.post('/api/my/updateProfile', data);
};
