import { z } from 'zod';

export const CREATE_USER_FORM_SCHEMA = z.object({
  fullName: z
    .string({ message: 'validation.required' })
    .min(1, 'validation.required'),
  city: z
    .string({ message: 'validation.required' })
    .min(1, 'validation.required'),
  grade: z
    .number({ message: 'validation.required' })
    .min(1, 'validation.grade.min')
    .max(4, 'validation.grade.max'),
  email: z
    .string({ message: 'validation.required' })
    .min(1, 'validation.required')
    .email('validation.format'),
  phoneNumber: z
    .string({ message: 'validation.required' })
    .min(1, 'validation.required'),
  university: z
    .string({ message: 'validation.required' })
    .min(1, 'validation.required')
});

export type CreateUserFormFields = z.infer<typeof CREATE_USER_FORM_SCHEMA>;
