import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ ...rest }) => {
  const classNames = `${styles.button} ${rest.className ?? ""}`;
  return (
    <button {...rest} className={classNames}>
      {rest.children}
    </button>
  );
};

export default Button;
