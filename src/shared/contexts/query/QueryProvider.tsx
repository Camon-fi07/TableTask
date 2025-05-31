import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';
import { toast } from 'sonner';

export interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const [queryClient] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false }
      },
      queryCache: new QueryCache({
        onError: () => {
          toast.error(`Что-то пошло не так`);
        }
      }),
      mutationCache: new MutationCache({
        onError: () => {
          toast.error(`Что-то пошло не так`);
        }
      })
    })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
