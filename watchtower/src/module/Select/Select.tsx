import { ComponentProps, ReactNode } from "react";

import styles from "./Select.module.css";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
};

const Select = ({ options }: Props): ReactNode => {
  return (
    <select className={styles.select} name="category" id="category">
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  );
};

export default Select;
