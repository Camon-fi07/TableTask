import React from 'react';

import type { QueryProviderProps } from '@/shared/contexts';
import { I18nProvider, QueryProvider } from '@/shared/contexts';

interface ProvidersProps {
  children: React.ReactNode;
  query?: Omit<QueryProviderProps, 'children'>;
}

export const Providers = ({ children, query }: ProvidersProps) => (
  <QueryProvider {...query}>
    <I18nProvider>{children}</I18nProvider>
  </QueryProvider>
);
