import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = ({ ...rest }) => {
  const classNames = `${styles.button} ${rest.className ?? ""}`;
  return (
    <button {...rest} className={classNames}>
      {rest.children}
    </button>
  );
};

export default Button;
