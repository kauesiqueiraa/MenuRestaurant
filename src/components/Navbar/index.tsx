import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Navbar() {
  const routes = [{
    label: "Início",
    to: "/"
  }, {
    label: "Cardápio",
    to: "/menu"
  }, {
    label: "Sobre nós",
    to: "/about"
  }];

  return (
    <nav className={styles.menu}>
      <Logo width={100} />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={route.to} >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}