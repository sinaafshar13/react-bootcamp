import { ComponentProps, ReactNode } from "react";

import styles from "./Select.module.css";
import { SelectOption } from "../../types/select-option";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
};

const Select = ({ options }: Props): ReactNode => {
  return (
    <div className={styles.select}>
      <select name="category" id="category">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
