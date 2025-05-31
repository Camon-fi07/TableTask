import { useContext } from 'react';

import { Users } from '@/modules/users/users';
import { I18nContext } from '@/shared/contexts';

import styles from './app.module.css';

export const App = () => {
  const langContext = useContext(I18nContext);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() =>
          langContext.setLocale(langContext.locale === 'ru' ? 'en' : 'ru')
        }
      >
        Change Language
      </button>
      <Users />
    </div>
  );
};
