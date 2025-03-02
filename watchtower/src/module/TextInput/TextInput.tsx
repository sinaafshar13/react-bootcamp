import { ComponentProps, ReactElement, ReactNode } from "react";

import styles from "./TextInput.module.css";

import clsx from "clsx";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactElement;
};
const TextInput = ({
  suffixIcon,
  className,
  ...otherProps
}: Props): ReactNode => {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <input type="text" {...otherProps} />
      {suffixIcon && <span className={styles.suffix}>{suffixIcon}</span>}
    </div>
  );  
};

export default TextInput;
