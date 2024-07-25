import { getApartmentLabel } from "@/entities/apartment";
import { Modal, Option } from "@/shared/ui";
import { ReactNode } from "react";

interface IProps {
  label: string;
  onClose: VoidFunction;

  options: number[];
  getOptionLabel: (val: number) => string;
  selectedOptions: number[];

  onSelect: (val: number) => void;
  opened: boolean;
  children?: ReactNode;
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
}) => {
  return (
    <Modal open={opened} onClose={onClose} header={label} onCrossClick={onClose}>
      {options.map((val, idx) => (
        <Option
          key={idx}
          value={val}
          label={getOptionLabel(val)}
          onSelect={(val) => onSelect(val as number)}
          active={selectedOptions.includes(val)}
        />
      ))}
      {children}
    </Modal>
  );
};

export default OptionsModal;
