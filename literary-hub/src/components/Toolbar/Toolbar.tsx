import { ReactNode, useContext } from "react";
import { useTranslation } from "../../../node_modules/react-i18next";

import { ThemeContext } from "../../context/theme-context";

import TextInput from "../../module/TextInput/TextInput";
import Select from "../../module/Select/Select";
import Button from "../../module/Button/Button";
import LanguageButton from "../LanguageButton/LanguageButton";

import styles from "./Toolbar.module.css";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine";
import MingcuteSunLine from "../../icons/MingcuteSunLine";

const Toolbar = (): ReactNode => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { t } = useTranslation();

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        placeholder={t("toolbar.search.placeholder")}
        suffixIcon={<MingcuteSearchLine />}
      />
      <Select
        variant="solid"
        options={[
          { value: "all", label: t("media.form.category.all") },
          { value: "movie", label: t("media.form.category.movie") },
          { value: "series", label: t("media.form.category.series") },
          { value: "book", label: t("media.form.category.book") },
        ]}
      ></Select>
      <LanguageButton />
      <Button
        variant="solid"
        size="large"
        shape="square"
        onClick={() => toggleTheme()}
      >
        {theme === "dark" ? <MingcuteSunLine /> : <MingcuteMoonLine />}
      </Button>
    </div>
  );
};

export default Toolbar;
