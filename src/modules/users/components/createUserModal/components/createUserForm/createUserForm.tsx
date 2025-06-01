import { Controller } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { I18nText } from '@/components/I18nText';
import { phoneMask } from '@/shared/helpers/phoneMask';
import { Button, FormItem, FormMessage, Input, Label } from '@/shared/UI';

import { useCreateUserForm } from './createUserForm.hooks';
import styles from './createUserForm.module.css';

interface CreateUserFormProps {
  onClose: () => void;
}

export const CreateUserForm = ({ onClose }: CreateUserFormProps) => {
  const { form, errors, handleSubmit, isPending } = useCreateUserForm(onClose);
  const intl = useIntl();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <Controller
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <Label htmlFor={field.name}>
                <I18nText id='fullName' />
              </Label>
              <Input {...field} />
              <FormMessage>
                {errors.fullName &&
                  intl.formatMessage({ id: errors.fullName.message })}
              </FormMessage>
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <Label htmlFor={field.name}>
                <I18nText id='email' />
              </Label>
              <Input {...field} inputMode='email' />
              <FormMessage>
                {errors.email &&
                  intl.formatMessage({ id: errors.email.message })}
              </FormMessage>
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name='phoneNumber'
          render={({ field }) => (
            <FormItem>
              <Label htmlFor={field.name}>
                <I18nText id='phone' />
              </Label>
              <Input
                {...field}
                inputMode='tel'
                onChange={(e) => field.onChange(phoneMask(e.target.value))}
              />
              <FormMessage>
                {errors.phoneNumber &&
                  intl.formatMessage({ id: errors.phoneNumber.message })}
              </FormMessage>
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem>
              <Label htmlFor={field.name}>
                <I18nText id='city' />
              </Label>
              <Input {...field} />
              <FormMessage>
                {errors.city && intl.formatMessage({ id: errors.city.message })}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className={styles.univeirsity}>
          <Controller
            control={form.control}
            name='university'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={field.name}>
                  <I18nText id='university' />
                </Label>
                <Input {...field} />
                <FormMessage>
                  {errors.university &&
                    intl.formatMessage({ id: errors.university.message })}
                </FormMessage>
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name='grade'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={field.name}>
                  <I18nText id='grade' />
                </Label>
                <Input {...field} inputMode='numeric' type='number' />
                <FormMessage>
                  {errors.grade &&
                    intl.formatMessage({ id: errors.grade.message })}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className={styles.panel}>
        <Button size='large' type='submit' disabled={isPending}>
          <I18nText id='button.create' />
        </Button>
        <Button
          mode='outline'
          size='large'
          onClick={onClose}
          disabled={isPending}
        >
          <I18nText id='button.cancel' />
        </Button>
      </div>
    </form>
  );
};
