import { useState } from "react";

import Search from "components/Search";
import Filters from "components/Filters";

import styles from "./Menu.module.scss";

import Sort from "components/Sort";
import Itens from "components/Itens";

import stylesTheme from "styles/Theme.module.scss";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sort, setSort] = useState("");

  return (
    <section className={styles.section_menu}>
      <h3 className={stylesTheme.section_menu__title}>Cardápio</h3>
      <Search
        search={search}
        setSearch={setSearch}
      />

      <div className={styles.section_menu__filters}>
        <Filters
          filter={filter}
          setFilter={setFilter}
        />
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </div>
      <Itens
        search={search}
        filter={filter}
        sort={sort}
      />
    </section>
  );
}