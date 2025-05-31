import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

import { Providers } from '@/components/Providers/Providers.tsx';

import { App } from './App/App.tsx';

import '~/public/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <Toaster />
    <App />
  </Providers>
);
