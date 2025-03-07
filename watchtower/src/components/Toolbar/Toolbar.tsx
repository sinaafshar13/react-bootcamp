import { ReactNode, useContext } from "react";

import { ThemeContext } from "../../context/theme-context";

import TextInput from "../../module/TextInput/TextInput";
import Select from "../../module/Select/Select";
import Button from "../../module/Button/Button";

import styles from "./Toolbar.module.css";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine";
import MingcuteSunLine from "../../icons/MingcuteSunLine";

const Toolbar = (): ReactNode => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        placeholder="Search books and media..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <Select
        variant="solid"
        options={[
          { value: "all", label: "All" },
          { value: "movie", label: "Movie" },
          { value: "series", label: "Series" },
          { value: "book", label: "Book" },
        ]}
      ></Select>
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
