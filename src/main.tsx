import { createRoot } from 'react-dom/client';

import '~/public/styles/index.css';

import { App } from './App/App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
