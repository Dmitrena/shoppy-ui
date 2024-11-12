'use server';

import { post } from '@/app/common/constants/util/fetch';
import { FormError } from '@/app/common/interfaces/form-error.interface';
import { redirect } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createUser(_prevState: FormError, formData: FormData) {
  const { error } = await post('users', formData);
  if (error) {
    return { error };
  }
  redirect('/');
}
