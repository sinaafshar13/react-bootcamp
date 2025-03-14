import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";

import Rocket from "../../icons/Rocket";


const Header = (): ReactNode => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Rocket />
      <h1>
        {t("title")}
        <span>{t("spanTitle")}</span>
      </h1>
    </header>
  );
};

export default Header;
