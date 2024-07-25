import { CrossIcon } from "@/shared/icons";
import { Button } from "../button";
import styles from "./Modal.module.scss";

interface IProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  header: string;
  onCrossClick: () => void;
}

const Modal: React.FC<IProps> = ({ header, onCrossClick, ...rest }) => {
  return (
    <dialog {...rest} className={`${styles.dialog} ${rest.className ?? ""}`} >
      <div className={styles.dialog__header}>
        <span className={styles.dialog__header__text}>{header}</span>
        <Button onClick={onCrossClick}>
          <CrossIcon />
        </Button>
      </div>
      <div className={styles.dialog__content}>{rest.children}</div>
    </dialog>
  );
};

export default Modal;
