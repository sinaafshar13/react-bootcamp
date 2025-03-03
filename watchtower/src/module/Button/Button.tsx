import { ComponentProps, ReactNode } from "react";

import styles from "./Button.module.css";

import clsx from "clsx";

type Variant = "solid" | "outlined" | "ghost";
type Size = "small" | "medium" | "large";
type Color = "primary" | "danger";
type Shape = "rectangle" | "square" | "circle";

type Props = ComponentProps<"button"> & {
  color?:Color;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

const Button = ({
  variant = "solid",
  size = "medium",
  shape = "rectangle",
  color = "primary",
  className,
  children,
  ...otherProps
}: Props): ReactNode => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[color],
        styles[shape],
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
