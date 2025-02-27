import { ReactNode } from "react";

import style from "./Header.module.css"

const Header = (): ReactNode => {
  return (
    <header className={style.header}>
      <h1>Watchtower</h1>
    </header>
  );
};

export default Header;
