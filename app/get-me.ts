'use server';

import { get } from './common/constants/util/fetch';

export default async function getMe() {
  return get('users/me');
}
