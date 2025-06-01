import { Header } from '@/components/header/header';
import { Users } from '@/modules/users/users';

import styles from './app.module.css';

export const App = () => (
  <div>
    <Header />
    <main className={styles.wrapper}>
      <Users />
    </main>
  </div>
);
