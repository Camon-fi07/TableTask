import { z } from 'zod';

export const CREATE_USER_FORM_SCHEMA = z.object({
  fullName: z.string().min(1, 'validation.required'),
  city: z.string().min(1, 'validation.required'),
  grade: z.string().min(1, 'validation.required'),
  email: z.string().min(1, 'validation.required').email('validation.format'),
  phoneNumber: z.string().min(1, 'validation.required'),
  university: z.string().min(1, 'validation.required')
});

export type CreateUserFormFields = z.infer<typeof CREATE_USER_FORM_SCHEMA>;
