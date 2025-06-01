import { GlobeIcon } from 'lucide-react';
import { useContext } from 'react';

import { I18nContext } from '@/shared/contexts';
import { Button } from '@/shared/UI';

import styles from './header.module.css';

export const Header = () => {
  const { locale, setLocale } = useContext(I18nContext);

  const toggleLang = () => {
    setLocale(locale === 'ru' ? 'en' : 'ru');
  };

  return (
    <header data-testid='header' className={styles.header}>
      <h2 className={styles.title}>Table Task</h2>
      <div>
        <Button
          className={styles.buttonLang}
          mode='outline'
          onClick={toggleLang}
        >
          <GlobeIcon />
          <span>{locale === 'ru' ? 'RU' : 'EN'}</span>
        </Button>
      </div>
    </header>
  );
};
