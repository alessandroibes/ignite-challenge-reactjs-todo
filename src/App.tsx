import { PlusCircle } from '@phosphor-icons/react';

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
          <header>
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
            Imagem
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus iten a fazer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
