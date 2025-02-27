import { ComponentProps, ReactElement, ReactNode } from "react";
import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  suffixIcon: ReactElement;
};
const TextInput = ({ suffixIcon, ...otherProps }: Props): ReactNode => {
  return (
    <div className={styles["text-input"]}>
      <input type="text" {...otherProps}/>
      <span className={styles.suffix}>{suffixIcon}</span>
    </div>
  );
};

export default TextInput;
