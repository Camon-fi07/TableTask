import { Providers } from '@/components/Providers';

import styles from './styles.module.css';

export const App = () => {
  return (
    <Providers>
      <div className={styles.test}>App</div>
    </Providers>
  );
};
