import { ReactNode } from "react";

import styles from "./Header.module.css"

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <h1>Watchtower</h1>
    </header>
  );
};

export default Header;
