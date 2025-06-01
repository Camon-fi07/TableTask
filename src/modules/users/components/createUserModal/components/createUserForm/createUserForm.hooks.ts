import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { toast } from 'sonner';

import { usePostUserCreateMutation } from '@/shared/api/hooks';

import {
  CREATE_USER_FORM_SCHEMA,
  CreateUserFormFields
} from './createUserForm.const';

export const useCreateUserForm = (onClose: () => void) => {
  const form = useForm<CreateUserFormFields>({
    resolver: zodResolver(CREATE_USER_FORM_SCHEMA),
    defaultValues: { phoneNumber: '+7 (', grade: 1 }
  });
  const [isOpen, setIsOpen] = useState(false);
  const postUserCreateMutation = usePostUserCreateMutation();
  const intl = useIntl();

  const toggleIsOpen = () => setIsOpen((prevVal) => !prevVal);

  const handleSubmit = form.handleSubmit(async (data) => {
    await postUserCreateMutation.mutateAsync({ params: data });
    toast.success(intl.formatMessage({ id: 'message.successCreateUser' }));
    onClose();
  });

  return {
    form,
    handleSubmit,
    errors: form.formState.errors,
    isOpen,
    toggleIsOpen,
    isPending: postUserCreateMutation.isPending
  };
};
