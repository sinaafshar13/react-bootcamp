import { ReactNode } from "react";

import styles from "./Header.module.css";

import Rocket from "../../icons/Rocket";
import { useTranslation } from "react-i18next";

const Header = (): ReactNode => {
  const { t, i18n } = useTranslation();

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
