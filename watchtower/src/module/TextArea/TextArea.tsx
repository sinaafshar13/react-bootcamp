import { Children, ComponentProps, ReactNode } from "react";

import styles from "./TextArea.module.css";

import clsx from "clsx";

type Props = ComponentProps<"textarea">;

const TextArea = ({ className, ...otherProps }: Props): ReactNode => {
  return (
    <div>
      <textarea
        className={clsx(styles["text-area"], className)}
        rows={3}
        {...otherProps}
      />
    </div>
  );
};

export default TextArea;
