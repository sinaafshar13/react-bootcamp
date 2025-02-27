import { ReactElement, ReactNode } from "react";
import styles from "./TextInput.module.css";

type Props = {
  placeholder: string;
  suffixIcon: ReactElement;
};
const TextInput = ({ placeholder, suffixIcon }: Props): ReactNode => {
  return (
    <div className={styles["text-input"]}>
      <input type="text" placeholder={placeholder} />
      <span className={styles.suffix}>{suffixIcon}</span>
    </div>
  );
};

export default TextInput;
