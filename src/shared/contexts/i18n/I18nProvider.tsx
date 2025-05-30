import { useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { getMessagesByLocale } from './helpers/getMessagesByLocale';
import { I18nContext } from './I18nContext';

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocale] = useState<LocaleKey>(
    (localStorage.getItem('locale') as LocaleKey) || 'ru'
  );
  const messages = useMemo(() => getMessagesByLocale(locale), [locale]);
  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>
      <IntlProvider locale={locale} defaultLocale='ru' messages={messages}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
};
