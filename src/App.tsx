import { Check, PlusCircle, Trash } from '@phosphor-icons/react';

import styles from './App.module.css';

export function App() {
  return (
    <main>
      <div className={styles.header}>
        <img src="/logo.svg" alt="logo da aplicação" />
      </div>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <input className={styles.input} />
          <button className={styles.button}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </button>
        </div>

        <div className={styles.tasksList}>
          <header className={styles.listHeader}>
            <aside>
              <p>Tarefas criadas</p>
              <span>0</span>
            </aside>

            <aside>
              <p>Concluídas</p>
              <span>0</span>
            </aside>
          </header>

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
