import { Modal, Option } from "@/shared/ui";
import { ReactNode } from "react";
import styles from "./OptionsModal.module.scss";

interface IProps {
  label: string;
  onClose: VoidFunction;

  options: number[];
  getOptionLabel: (val: number) => string;
  selectedOptions: number[];

  onSelect: (val: number) => void;
  opened: boolean;
  children?: ReactNode;

  tempSelectedOption?: number;
}

const OptionsModal: React.FC<IProps> = ({
  label,
  opened,
  options,
  onClose,
  getOptionLabel,
  onSelect,
  selectedOptions,
  children,
  tempSelectedOption,
}) => {
  return (
    <Modal
      open={opened}
      onClose={onClose}
      header={label}
      onCrossClick={onClose}
      className={styles.modal}
    >
      {options.map((val, idx) => (
        <Option
          key={idx}
          value={val}
          label={getOptionLabel(val)}
          onSelect={(val) => onSelect(val as number)}
          active={selectedOptions.includes(val)}
          keyActive={idx === tempSelectedOption}
        />
      ))}
      {children}
    </Modal>
  );
};

export default OptionsModal;
