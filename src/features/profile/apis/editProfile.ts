import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { EditProfile } from '../schema';

export const update = async (values: EditProfile) => {
  await axios.post('/api/my/updateProfile', values);
};
