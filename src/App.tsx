import styles from './App.module.css';

import { PlusCircle } from '@phosphor-icons/react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Header as ListHeader } from './components/List/Header';
import { Empty } from './components/List/Empty';

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader tasksCounter={0} checkedTasksCounter={0} />
          <Empty />
        </div>
      </section>
    </main>
  );
}
