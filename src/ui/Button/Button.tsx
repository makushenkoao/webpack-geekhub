import React, { FC } from "react";
import styles from "./Button.module.scss";
import UserAvatarIcon from "assets/icons/user.svg";

import { classNames } from "lib/classNames";

export enum EButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: EButtonVariant;
}

export const Button: FC<IButtonProps> = ({
  className,
  variant = EButtonVariant.primary,
  children,
  ...rest
}) => {
  return (
    <button className={classNames(styles.Button, styles[variant])} {...rest}>
      {children}
    </button>
  );
};
