import en from '~/static/locales/en.json';
import ru from '~/static/locales/ru.json';

export type Messages = Record<LocaleMessageId, string>;

export const getMessagesByLocale = (locale: LocaleKey): Messages =>
  locale === 'ru' ? ru : en;
