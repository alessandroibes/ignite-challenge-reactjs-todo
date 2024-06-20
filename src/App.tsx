import styles from './App.module.css';

import { Check, PlusCircle, Trash } from '@phosphor-icons/react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Header as ListHeader } from './components/List/Header';

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
          <ListHeader tasksCounter={4} checkedTasksCounter={2} />
          <div>
            <div className={styles.item}>
              <div>
                <label>
                  <input readOnly type="checkbox" />
                  <span
                    className={`${styles.checkbox} ${styles['checkbox-unchecked']}`}
                  >
                    <Check size={12} />
                  </span>

                  <p
                    className={`${styles.paragraph} ${styles['paragraph-unchecked']}`}
                  >
                    Exemplo de Task 4
                  </p>
                </label>
              </div>

              <button>
                <Trash size={16} color="#808080" />
              </button>
            </div>
            <div className={styles.item}>
              <div>
                <label>
                  <input readOnly type="checkbox" />
                  <span
                    className={`${styles.checkbox} ${styles['checkbox-unchecked']}`}
                  >
                    <Check size={12} />
                  </span>

                  <p
                    className={`${styles.paragraph} ${styles['paragraph-unchecked']}`}
                  >
                    Exemplo de Task 3
                  </p>
                </label>
              </div>

              <button>
                <Trash size={16} color="#808080" />
              </button>
            </div>
            <div className={styles.item}>
              <div>
                <label>
                  <input readOnly type="checkbox" />
                  <span
                    className={`${styles.checkbox} ${styles['checkbox-checked']}`}
                  >
                    <Check size={12} />
                  </span>

                  <p
                    className={`${styles.paragraph} ${styles['paragraph-checked']}`}
                  >
                    Exemplo de Task 2
                  </p>
                </label>
              </div>

              <button>
                <Trash size={16} color="#808080" />
              </button>
            </div>
            <div className={styles.item}>
              <div>
                <label>
                  <input readOnly type="checkbox" />
                  <span
                    className={`${styles.checkbox} ${styles['checkbox-checked']}`}
                  >
                    <Check size={12} />
                  </span>

                  <p
                    className={`${styles.paragraph} ${styles['paragraph-checked']}`}
                  >
                    Exemplo de Task 1
                  </p>
                </label>
              </div>

              <button>
                <Trash size={16} color="#808080" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
