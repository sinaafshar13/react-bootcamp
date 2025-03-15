import { ComponentProps, ReactElement, ReactNode, useContext } from "react";

import styles from "./TextInput.module.css";

import clsx from "clsx";

import { MediaContext } from "../../context/media-context";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactElement;
};
const TextInput = ({
  suffixIcon,
  className,
  ...otherProps
}: Props): ReactNode => {
  const { setSearch } = useContext(MediaContext);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value); // Update search term in context
  };

  return (
    <div className={clsx(styles["text-input"], className)}>
      <input onChange={searchChangeHandler} type="text" {...otherProps} />
      {suffixIcon && <span className={styles.suffix}>{suffixIcon}</span>}
    </div>
  );
};

export default TextInput;
