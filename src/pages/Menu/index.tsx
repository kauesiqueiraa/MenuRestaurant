import Search from 'components/Search';
import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { useState } from 'react';

export default function Menu() {
  const [search, setSearch] = useState("");


  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do Código e da Massa
        </div>
      </header>

      <section className={styles.section_menu}>
        <h3 className={styles.section_menu__title}>Cardápio</h3>
        <Search
          search={search}
          setSearch={setSearch}
        />
      </section>
    </main>
  )
}