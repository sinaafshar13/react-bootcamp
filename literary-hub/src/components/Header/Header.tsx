import { ReactNode } from "react";
import { useTranslation } from "../../../node_modules/react-i18next";

import styles from "./Header.module.css";

import Logo from "../../icons/logo";

const Header = (): ReactNode => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Logo />
      <h1>
        {t("app.title")}
        <span>{t("app.spanTitle")}</span>
      </h1>
    </header>
  );
};

export default Header;
