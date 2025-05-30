import React from 'react';

interface I18nContextValues {
  locale: LocaleKey;
  setLocale: React.Dispatch<LocaleKey>;
}

export const I18nContext = React.createContext<I18nContextValues>({
  locale: (localStorage.getItem('locale') as LocaleKey) || 'ru',
  setLocale: () => {}
});
