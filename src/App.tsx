import styles from './App.module.css';

import { PlusCircle } from '@phosphor-icons/react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Header as ListHeader } from './components/List/Header';
import { Empty } from './components/List/Empty';
import { Item } from './components/List/Item';

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

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
          <div>
            <Item
              data={{ id: 4, text: 'Exemplo de Tarefa 4', isChecked: false }}
            />
            <Item
              data={{ id: 3, text: 'Exemplo de Tarefa 3', isChecked: false }}
            />
            <Item
              data={{ id: 2, text: 'Exemplo de Tarefa 1', isChecked: true }}
            />
            <Item
              data={{ id: 1, text: 'Exemplo de Tarefa 1', isChecked: true }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
