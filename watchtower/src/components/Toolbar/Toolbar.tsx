import { ReactNode } from "react";

import TextInput from "../../module/TextInput/TextInput";
import Select from "../../module/Select/Select";
import Button from "../../module/Button/Button";

import styles from "./Toolbar.module.css"

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine";


const Toolbar = (): ReactNode => {
  return (
    <div className={styles.toolbar}>
      <TextInput className={styles.input} placeholder="Search books and media..." suffixIcon={<MingcuteSearchLine />} />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "movie", label: "Movie" },
          { value: "series", label: "Series" },
          { value: "book", label: "Book" },
        ]}
      ></Select>
      <Button variant="solid" size="large" shape="square">
        <MingcuteMoonLine/>
      </Button>
    </div>
  );
};

export default Toolbar;
