import { memo } from 'react';
import type { PrimitiveType } from 'react-intl';
import { FormattedMessage } from 'react-intl';

interface I18nTextProps {
  id: LocaleMessageId;
  values?: Record<string, PrimitiveType>;
}

export const I18nText = memo(({ id, values }: I18nTextProps) => (
  <FormattedMessage id={id} values={values} />
));

I18nText.displayName = 'I18nText';
