import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type Variant = "default" | "nofill";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
};

const variantToClass: {[key in Variant]: string} = {
  'default': styles.button__default,
  'nofill': styles.button__nofill,
}

const Button: React.FC<IProps> = ({ variant = 'default', ...rest }) => {
  const classNames = `${styles.button} ${rest.className ?? ""} ${variantToClass[variant]}`;
  return (
    <button {...rest} className={classNames}>
      {rest.children}
    </button>
  );
};

export default Button;
