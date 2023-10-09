import styles from "./DefaultPage.module.scss";

import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do Código e da Massa
        </div>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
}