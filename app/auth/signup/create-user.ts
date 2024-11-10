'use server';

import { FormError } from '@/app/common/form-error.interface';
import { post } from '@/app/util/fetch';
import { redirect } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createUser(_prevState: FormError, formData: FormData) {
  const { error } = await post('users', formData);
  if (error) {
    return { error };
  }
  redirect('/');
}
