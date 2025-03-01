import { ReactNode } from "react";

import styles from "./Header.module.css";
import Rocket from "../../icons/Rocket";

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <Rocket />
      <h1>
        Watch
        <span>tower</span>
      </h1>
    </header>
  );
};

export default Header;
