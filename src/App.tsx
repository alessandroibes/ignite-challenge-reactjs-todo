import styles from './App.module.css';

export function App() {
  return (
    <main>
      <div className={styles.header}>
        <img src="/logo.svg" alt="logo da aplicação" />
      </div>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <input />
          <button>Criar</button>
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
