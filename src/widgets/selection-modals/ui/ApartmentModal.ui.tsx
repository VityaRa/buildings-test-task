import {
  APARTMENT_NUMBER_LABEL,
  getApartmentLabel,
} from "@/entities/apartment";
import { apartmentsList } from "@/entities/apartment/apartment.data";
import { useKeyListener } from "@/features/key-pressing-managment";
import { OptionsModal } from "@/features/modal";
import { Button } from "@/shared/ui";
import { useTempSelection } from "../model/use-temp-selection.hook";
import styles from './styles.module.scss';

interface Props {
  onClose: VoidFunction;
  selected: number[];

  onSelect: (id: number) => void;
  onFinish: VoidFunction;
}

const ApartmentModal: React.FC<Props> = ({ onClose, selected, onSelect, onFinish }) => {
  const { handleTop, handleDown, tempIndex } = useTempSelection(apartmentsList);

  useKeyListener({
    deps: [tempIndex, selected],
    onBottomArrow: handleDown,
    onTopArrow: handleTop,
    onEnter: () => {
      if (tempIndex === undefined) {
        return;
      }

      onSelect(apartmentsList[tempIndex]);
    },
    onEnterCtrl: () => {
      if (selected.length === 0) {
        return;
      };

      onFinish();
    },
    onLeftArrow: onClose,
  });

  return (
    <OptionsModal
      options={apartmentsList}
      opened
      onClose={onClose}
      label={APARTMENT_NUMBER_LABEL}
      getOptionLabel={getApartmentLabel}
      selectedOptions={selected}
      onSelect={onSelect}
      tempSelectedOption={tempIndex}
    >
      <Button
        className={styles.btn}
        onClick={onFinish}
      >
        Добавить
      </Button>
    </OptionsModal>
  );
};

export default ApartmentModal;
