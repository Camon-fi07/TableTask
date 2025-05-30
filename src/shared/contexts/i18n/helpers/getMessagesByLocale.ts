import { createRequire } from 'module';

import defaultMessages from '~/static/locales/ru.json' assert { type: 'json' };
const require = createRequire(import.meta.url);
export type Messages = Record<LocaleMessageId, string>;

export const getMessagesByLocale = (locale: LocaleKey): Messages => {
  try {
    const localeMessages = require(
      `/static/locales/${locale}.json`
    ) as Messages;

    return localeMessages;
  } catch (error: unknown) {
    console.error('Error loading messages for locale', locale, error);

    return defaultMessages;
  }
};
